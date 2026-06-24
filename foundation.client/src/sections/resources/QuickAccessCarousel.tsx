import { Link } from "react-router-dom";
import { quickResources } from "./resourcesContent";

const isExternal = (url?: string) =>
  !!url && (url.startsWith("http") || url.startsWith("tel:"));

export function QuickAccessCarousel() {
  return (
    <section id="quick-access" className="bg-white px-4 py-10 md:hidden">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        01 / Quick Access
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
        Quick Access Resources
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Essential support tools and immediate resources.
      </p>

      <div className="scrollbar-none -mx-4 mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4">
        {quickResources.map((resource) => {
          const Icon = resource.icon;
          const isCrisis = resource.type === "emergency";

          const cardContent = (
            <>
              <p
                className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                  isCrisis ? "text-white/60" : "text-slate-500"
                }`}
              >
                {resource.subtitle}
              </p>
              <div className="mt-3 flex items-start gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isCrisis ? "bg-white/10 text-white" : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <h3
                    className={`text-base font-semibold leading-snug ${
                      isCrisis ? "text-white" : "text-slate-950"
                    }`}
                  >
                    {resource.title}
                  </h3>
                  <p
                    className={`mt-2 text-sm leading-6 ${
                      isCrisis ? "text-white/75" : "text-slate-600"
                    }`}
                  >
                    {resource.description}
                  </p>
                </div>
              </div>
              <p
                className={`mt-4 text-sm font-semibold ${
                  isCrisis ? "text-white" : "text-slate-950"
                }`}
              >
                {resource.action} →
              </p>
            </>
          );

          if (isCrisis) {
            return (
              <article
                key={resource.title}
                className="min-w-[280px] snap-start rounded-3xl bg-slate-950 p-5 text-white shadow-[0_20px_60px_rgba(15,23,42,0.22)]"
              >
                {cardContent}
              </article>
            );
          }

          const className =
            "min-w-[260px] snap-start rounded-3xl border border-slate-200 bg-white p-5 shadow-sm";

          if (resource.url) {
            if (isExternal(resource.url)) {
              return (
                <a
                  key={resource.title}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {cardContent}
                </a>
              );
            }
            return (
              <Link key={resource.title} to={resource.url} className={className}>
                {cardContent}
              </Link>
            );
          }

          return (
            <article key={resource.title} className={className}>
              {cardContent}
            </article>
          );
        })}
      </div>
    </section>
  );
}
