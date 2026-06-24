import { BookOpen, AlertCircle, Phone, ArrowRight } from "lucide-react";
import { SEAL_LOGO_SRC } from "../../constants/logos";

interface HeroStartHereCardProps {
  onSelectAnxiety101: () => void;
  onSelectSeekHelp: () => void;
}

const startRows = [
  {
    id: "anxiety-101",
    icon: BookOpen,
    title: "Anxiety 101",
    description: "Learn the basics of anxiety disorders.",
    action: "anxiety101" as const,
  },
  {
    id: "seek-help",
    icon: AlertCircle,
    title: "When to Seek Help",
    description: "Know when and how to reach out for support.",
    action: "seekHelp" as const,
  },
  {
    id: "crisis",
    icon: Phone,
    title: "Crisis Support",
    description: "Call or text 988 for immediate U.S. crisis support.",
    action: "crisis" as const,
  },
];

export function HeroStartHereCard({
  onSelectAnxiety101,
  onSelectSeekHelp,
}: HeroStartHereCardProps) {
  const handleRowClick = (action: (typeof startRows)[number]["action"]) => {
    if (action === "anxiety101") {
      onSelectAnxiety101();
      document.getElementById("resource-library")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (action === "seekHelp") {
      onSelectSeekHelp();
      document.getElementById("topic-browser")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-2xl shadow-slate-900/10 backdrop-blur">
      <img
        src={SEAL_LOGO_SRC}
        alt=""
        className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 opacity-[0.04]"
        aria-hidden="true"
      />
      <div className="relative">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#415771]">
          Start Here
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
          Not sure where to begin?
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Three trusted entry points to help you navigate this library.
        </p>

        <ul className="mt-6 space-y-3">
          {startRows.map((row) => {
            const Icon = row.icon;
            const inner = (
              <>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f4f7fa] text-[#415771]">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-950">
                    {row.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-5 text-slate-600">
                    {row.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-[#415771]" />
              </>
            );

            if (row.action === "crisis") {
              return (
                <li key={row.id}>
                  <a
                    href="tel:988"
                    className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition duration-300 hover:border-[#415771]/40 hover:bg-[#f4f7fa] hover:shadow-sm"
                  >
                    {inner}
                  </a>
                </li>
              );
            }

            return (
              <li key={row.id}>
                <button
                  type="button"
                  onClick={() => handleRowClick(row.action)}
                  className="group flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left transition duration-300 hover:border-[#415771]/40 hover:bg-[#f4f7fa] hover:shadow-sm"
                >
                  {inner}
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Educational information only — not a substitute for professional care.
        </p>
      </div>
    </div>
  );
}
