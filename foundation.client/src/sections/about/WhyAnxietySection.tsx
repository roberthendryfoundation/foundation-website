import { Card, CardContent } from "../../components/ui/Card";

export function WhyAnxietySection() {
  const stats = [
    {
      number: "40M",
      label: "Adults in the U.S.",
      description: "live with anxiety disorders",
    },
    {
      number: "31%",
      label: "of U.S. Adults",
      description: "will experience an anxiety disorder at some point",
    },
    {
      number: "36%",
      label: "Wait 10+ Years",
      description: "before seeking treatment for anxiety",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
            Why Focus on Anxiety?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Anxiety is the most common mental health condition—but it's also one
            of the most treatable. The gap between need and treatment is where
            we focus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <Card key={i} className="text-center border-border shadow-soft">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-8 border border-border">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            <strong className="text-foreground">Anxiety is treatable.</strong>{" "}
            But millions of people don't get help because of stigma, cost, or
            lack of access. That's the gap we're working to close—through
            education, resources, and future collaborative projects that create
            real change.
          </p>
        </div>
      </div>
    </section>
  );
}
