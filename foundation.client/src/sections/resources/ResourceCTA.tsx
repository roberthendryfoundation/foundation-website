import { useNavigate } from "react-router-dom";
import { SEAL_LOGO_SRC } from "../../constants/logos";
import { ArrowRight } from "lucide-react";

export function ResourceCTA() {
  const navigate = useNavigate();

  const quickLinks = [
    { label: "Crisis Support", href: "tel:988" },
    {
      label: "Find a Therapist",
      href: "https://www.psychologytoday.com/us/therapists",
      external: true,
    },
    {
      label: "Start with Anxiety 101",
      onClick: () => {
        window.dispatchEvent(
          new CustomEvent("learningLevelFilter", { detail: "beginner" })
        );
        document.getElementById("resource-library")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      },
    },
  ];

  return (
    <>
      {/* Mobile CTA */}
      <section className="relative overflow-hidden bg-slate-950 px-4 py-14 text-white md:hidden">
        <img
          src={SEAL_LOGO_SRC}
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-md text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-white">
            Have Questions About These Resources?
          </h2>
          <p className="mt-4 text-base leading-7 text-white/80">
            We're an information-only nonprofit. We can't offer counseling, but
            we can help you navigate options and point to reputable hotlines and
            providers.
          </p>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
          >
            Contact Us →
          </button>
          <p className="mt-6 text-xs leading-5 text-white/60">
            Information on this page is educational and not a substitute for
            professional care. If you're in crisis, call or text 988.
          </p>
        </div>
      </section>

      {/* Desktop split CTA */}
      <section className="relative hidden overflow-hidden bg-slate-950 py-16 text-white md:block lg:py-20">
        <img
          src={SEAL_LOGO_SRC}
          alt=""
          className="pointer-events-none absolute right-10 top-1/2 h-96 w-96 -translate-y-1/2 opacity-[0.035]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
              Still not sure where to start?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/80">
              We're an information-only nonprofit. We can't offer counseling, but
              we can help you navigate options and point to reputable hotlines
              and providers.
            </p>
            <p className="mt-6 text-xs leading-5 text-white/60">
              Information on this page is educational and not a substitute for
              professional care. If you're in crisis, call or text 988 (U.S.).
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/contact")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </button>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
                Quick links
              </p>
              <ul className="mt-3 space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    {"onClick" in link ? (
                      <button
                        type="button"
                        onClick={link.onClick}
                        className="text-sm font-medium text-white/85 transition hover:text-white"
                      >
                        {link.label} →
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-white/85 transition hover:text-white"
                      >
                        {link.label} →
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
