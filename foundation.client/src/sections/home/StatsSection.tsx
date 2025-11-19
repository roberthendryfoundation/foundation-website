export function StatsSection() {
  const stats = [
    {
      number: "40 Million",
      label: "Adults in the U.S. affected by anxiety annually",
    },
    { number: "Only 36%", label: "Of people with anxiety seek treatment" },
    {
      number: "31.9%",
      label: "Of adolescents have experienced an anxiety disorder",
    },
    { number: "#1", label: "Most common mental health condition" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl lg:text-4xl text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
