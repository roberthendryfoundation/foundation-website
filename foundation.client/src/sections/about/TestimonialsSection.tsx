import { Card, CardContent } from "../../components/ui/Card";
import { Quote } from "lucide-react";
import { useTestimonials } from "../../hooks/useSanityData";

const fallbackTestimonials = [
  {
    _id: "fallback-1",
    name: "Maria, Parent Advocate",
    role: "Co-creating resource kits",
    quote:
      "This foundation listens first. Every call ends with a real next step, and our family feels supported instead of alone.",
    photo: "https://placehold.co/200x200/74a4a4/ffffff?text=Community",
  },
  {
    _id: "fallback-2",
    name: "Jordan, School Counselor",
    role: "Partnering on anxiety workshops",
    quote:
      "We mapped out a project timeline together, and they handled the logistics so I could focus on students.",
    photo: "https://placehold.co/200x200/1f2933/ffffff?text=Partner",
  },
  {
    _id: "fallback-3",
    name: "Taylor, Peer Support Leader",
    role: "Advisory cohort member",
    quote:
      "Their approach is collaborative from day one. They ask how to support our efforts and then help make it happen.",
    photo: "https://placehold.co/200x200/4a90a4/ffffff?text=Advocate",
  },
];

export function TestimonialsSection() {
  const { data, isLoading } = useTestimonials({
    featured: true,
  });
  const testimonials = data && data.length > 0 ? data : fallbackTestimonials;

  if (isLoading) {
    return (
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-12 w-12 bg-muted rounded-full mx-auto mb-4"></div>
            <div className="h-8 w-64 bg-muted rounded mx-auto mb-4"></div>
            <div className="h-6 w-96 bg-muted rounded mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-muted rounded-xl"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Don't show section if no testimonials
  if (!testimonials.length) {
    return null;
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Quote className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Voices from Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from the people who make our mission possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial._id}
              className="border-border shadow-soft hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="pt-6 pb-6">
                {/* Photo */}
                <div className="mb-6">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-md"
                    loading="lazy"
                  />
                </div>

                {/* Quote */}
                <div className="mb-6 relative">
                  <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic leading-relaxed pl-6 text-center">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Name & Role */}
                <div className="text-center pt-4 border-t border-border">
                  <p className="font-semibold text-foreground text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Optional: Add link to full stories page if you build one later */}
        {testimonials.length >= 6 && (
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Want to share your story?{" "}
              <a
                href="/contact"
                className="text-primary font-semibold hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
