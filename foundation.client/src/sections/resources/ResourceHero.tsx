import { useState } from "react";
import { Search } from "lucide-react";
import { SEAL_LOGO_SRC } from "../../constants/logos";
import { popularSearches } from "./resourcesContent";
import { HeroStartHereCard } from "./HeroStartHereCard";

export function ResourceHero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      document.getElementById("resource-library")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.dispatchEvent(
        new CustomEvent("resourceSearch", { detail: searchQuery })
      );
    }
  };

  const handlePopularSearch = (term: string) => {
    setSearchQuery(term);
    window.dispatchEvent(new CustomEvent("resourceSearch", { detail: term }));
    setTimeout(() => {
      document.getElementById("resource-library")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleAnxiety101 = () => {
    window.dispatchEvent(
      new CustomEvent("learningLevelFilter", { detail: "beginner" })
    );
  };

  const handleSeekHelp = () => {
    document.getElementById("topic-browser")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Mobile hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white px-4 pb-8 pt-8 md:hidden">
        <img
          src={SEAL_LOGO_SRC}
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Anxiety Resource Library
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-950">
            Learn About Anxiety
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-700">
            Evidence-based education to help you understand anxiety, recognize
            symptoms, and find support resources.
          </p>

          <form onSubmit={handleSearch} className="mt-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                <Search className="h-4 w-4 shrink-0 text-slate-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500"
                  placeholder="Search anxiety resources..."
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Search
              </button>
            </div>
          </form>

          <div className="scrollbar-none mt-4 flex gap-2 overflow-x-auto pb-1">
            {popularSearches.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => handlePopularSearch(term)}
                className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-medium capitalize text-slate-700 transition hover:border-slate-300"
              >
                {term}
              </button>
            ))}
          </div>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Evidence-based education · Crisis links included · Information-only
            nonprofit
          </p>
        </div>
      </section>

      {/* Desktop editorial hero */}
      <section className="relative hidden overflow-hidden border-b border-slate-200/70 bg-[radial-gradient(circle_at_top_right,rgba(65,87,113,0.12),transparent_36%),linear-gradient(to_bottom,#ffffff,#f8fafc)] md:block">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#415771]">
              Anxiety Resource Library
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-bold tracking-tight text-slate-950 xl:text-6xl">
              Clear, trusted resources for understanding anxiety.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Evidence-based educational resources to help you understand
              anxiety, symptoms, and support options.
            </p>

            <form onSubmit={handleSearch} className="mt-8">
              <div className="flex max-w-2xl items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-900/5">
                <div className="flex flex-1 items-center gap-3 px-3">
                  <Search className="h-4 w-4 shrink-0 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search resources… (e.g., panic attacks, coping strategies)"
                    className="h-12 w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 shrink-0 rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white transition hover:bg-[#415771] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#415771] focus-visible:ring-offset-2"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-slate-600">
                Popular:
              </span>
              {popularSearches.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => handlePopularSearch(term)}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium capitalize text-slate-700 shadow-sm transition hover:border-[#415771]/40 hover:bg-[#f4f7fa]"
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-8 border-t border-slate-200/70 pt-6">
              <div>
                <p className="text-2xl font-bold text-slate-950">100+</p>
                <p className="text-xs font-medium text-slate-500">Resources</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-950">10+</p>
                <p className="text-xs font-medium text-slate-500">Categories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-950">24/7</p>
                <p className="text-xs font-medium text-slate-500">Available</p>
              </div>
            </div>
          </div>

          <HeroStartHereCard
            onSelectAnxiety101={handleAnxiety101}
            onSelectSeekHelp={handleSeekHelp}
          />
        </div>
      </section>
    </>
  );
}
