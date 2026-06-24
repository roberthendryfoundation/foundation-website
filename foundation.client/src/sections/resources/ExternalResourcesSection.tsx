import { externalResources } from "./resourcesContent";

export function ExternalResourcesSection() {
  return (
    <section id="external" className="hidden bg-slate-50/70 py-16 md:block">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#415771]">
              Trusted Sources
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              External resources
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            Trusted organizations and websites for additional mental health
            support.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {externalResources.map((resource) => (
            <article
              key={resource.title}
              className="flex items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="min-w-0 flex-1">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-600">
                  {resource.category}
                </span>
                <h3 className="mt-2 text-base font-semibold leading-snug text-slate-950">
                  {resource.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {resource.description}
                </p>
                <p className="mt-2 text-xs font-medium text-slate-500">
                  {resource.url.replace(/^https?:\/\//, "")}
                </p>
              </div>
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:border-[#415771]/40 hover:bg-[#f4f7fa]"
              >
                Visit
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
