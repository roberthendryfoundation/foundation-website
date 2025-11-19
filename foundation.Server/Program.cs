
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.RateLimiting;
using System.IO.Compression;
using System.Threading.RateLimiting;

namespace foundation.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            // Add response compression for better performance
            builder.Services.AddResponseCompression(options =>
            {
                options.EnableForHttps = true;
                options.Providers.Add<BrotliCompressionProvider>();
                options.Providers.Add<GzipCompressionProvider>();
            });

            builder.Services.Configure<BrotliCompressionProviderOptions>(options =>
            {
                options.Level = CompressionLevel.Fastest;
            });

            builder.Services.Configure<GzipCompressionProviderOptions>(options =>
            {
                options.Level = CompressionLevel.Optimal;
            });

            // Add rate limiting to prevent API abuse
            builder.Services.AddRateLimiter(options =>
            {
                // Global rate limit: 100 requests per minute per IP
                options.GlobalLimiter = PartitionedRateLimiter.Create<HttpContext, string>(context =>
                {
                    var ipAddress = context.Connection.RemoteIpAddress?.ToString() ?? "unknown";
                    
                    return RateLimitPartition.GetFixedWindowLimiter(
                        partitionKey: ipAddress,
                        factory: _ => new FixedWindowRateLimiterOptions
                        {
                            PermitLimit = 100,
                            Window = TimeSpan.FromMinutes(1),
                            QueueProcessingOrder = QueueProcessingOrder.OldestFirst,
                            QueueLimit = 5
                        });
                });

                // Handle rate limit exceeded
                options.OnRejected = async (context, cancellationToken) =>
                {
                    context.HttpContext.Response.StatusCode = 429;
                    await context.HttpContext.Response.WriteAsync(
                        "Too many requests. Please try again later.",
                        cancellationToken);
                };
            });

            // Add health checks
            builder.Services.AddHealthChecks();

            var app = builder.Build();

            // Enable response compression
            app.UseResponseCompression();

            // Enable rate limiting
            app.UseRateLimiter();

            // Add security headers
            app.Use(async (context, next) =>
            {
                // Security headers
                context.Response.Headers.Append("X-Content-Type-Options", "nosniff");
                context.Response.Headers.Append("X-Frame-Options", "DENY");
                context.Response.Headers.Append("X-XSS-Protection", "1; mode=block");
                context.Response.Headers.Append("Referrer-Policy", "strict-origin-when-cross-origin");
                context.Response.Headers.Append("Permissions-Policy", "geolocation=(), microphone=(), camera=()");
                
                // Cache control for static assets
                if (context.Request.Path.StartsWithSegments("/assets"))
                {
                    context.Response.Headers.Append("Cache-Control", "public, max-age=31536000, immutable");
                }
                
                await next();
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            else
            {
                // Enable HSTS in production
                app.UseHsts();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            // Map health check endpoint
            app.MapHealthChecks("/health");

            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
