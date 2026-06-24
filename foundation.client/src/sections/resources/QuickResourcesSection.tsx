import { Link } from "react-router-dom";
import { Phone, Brain, PlayCircle, Users, ArrowRight } from "lucide-react";
import { quickResources } from "./resourcesContent";

const isExternal = (url?: string) =>
  !!url && (url.startsWith("http") || url.startsWith("tel:"));

const actionIcons = {
  tool: Brain,
  audio: PlayCircle,
  directory: Users,
};

export function QuickResourcesSection() {
  const crisis = quickResources[0];
  const actions = quickResources.slice(1);

  return (
    <section id="quick-access" className="hidden bg-white py-14 md:block lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#415771]">
            Quick Access
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
            Essential support, right away.
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Immediate access to mental health tools and trusted support resources.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_1.9fr]">
          <div className="relative overflow-hidden rounded-3xl border border-[#415771]/30 bg-[#f4f7fa] p-7 shadow-md shadow-slate-900/5">
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#415771]">
                U.S. Crisis Support
              </p>
              <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#415771] shadow-sm">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-slate-950">
                Need support now?
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {crisis.description}
              </p>
              <a
                href="tel:988"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#415771]"
              >
                {crisis.action}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {actions.map((resource) => {
              const Icon =
                actionIcons[resource.type as keyof typeof actionIcons] ??
                Brain;
              const card = (
                <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f4f7fa] text-[#415771]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-slate-950">
                    {resource.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-slate-950 transition group-hover:text-[#415771]">
                    {resource.action}
                    <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                  </span>
                </article>
              );

              if (!resource.url) return <div key={resource.title}>{card}</div>;

              if (isExternal(resource.url)) {
                return (
                  <a
                    key={resource.title}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {card}
                  </a>
                );
              }

              return (
                <Link key={resource.title} to={resource.url} className="block h-full">
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
