import { Globe } from "lucide-react";
import { externalResources } from "./resourcesContent";

export function ExternalSupportDirectory() {
  return (
    <section id="external" className="bg-slate-50 px-4 py-12 md:hidden">
      <h2 className="text-2xl font-bold tracking-tight text-slate-950">
        Trusted External Support
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        Organizations and websites for additional mental health support.
      </p>

      <div className="mt-6 space-y-3">
        {externalResources.map((resource) => (
          <article
            key={resource.title}
            className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <Globe className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                {resource.category}
              </p>
              <h3 className="mt-1 text-base font-semibold leading-snug text-slate-950">
                {resource.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {resource.description}
              </p>
            </div>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-50"
            >
              Visit
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
