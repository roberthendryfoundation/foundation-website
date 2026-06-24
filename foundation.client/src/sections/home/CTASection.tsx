import { Link } from "react-router-dom";
import { homeImages } from "./homeContent";

function TrustOverlayCard() {
  return (
    <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-primary/80 p-5 shadow-2xl backdrop-blur-md">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-footer-muted">
        Built on Trust
      </p>
      <p className="mt-3 text-sm leading-6 text-primary-foreground">
        Clear information, ethical content, and community-shaped action.
      </p>
    </div>
  );
}

function CTAImageCard({
  className,
  imageClassName,
}: {
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.35)] lg:rounded-[28px] ${className ?? ""}`}
    >
      <img
        src={homeImages.cta}
        alt="Transparency and trust in anxiety education"
        className={`h-full w-full object-cover object-center ${imageClassName ?? ""}`}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/25 to-transparent"
        aria-hidden="true"
      />
      <TrustOverlayCard />
    </div>
  );
}

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/10 bg-primary py-16 text-primary-foreground lg:py-24"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl lg:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16 lg:px-8 animate-fade-up">
        <div className="mx-auto flex w-full max-w-sm flex-col items-center text-center lg:mx-0 lg:max-w-xl lg:items-start lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-footer-muted">
            Get Involved
          </p>

          <h2
            id="cta-heading"
            className="mt-4 max-w-lg text-3xl font-bold tracking-[-0.04em] text-primary-foreground lg:text-4xl"
          >
            Help turn awareness into completed action.
          </h2>

          <p className="mt-5 text-base leading-8 text-footer-muted lg:text-lg">
            We collaborate with mission-aligned partners, contributors, and
            communities to turn anxiety awareness into completed action.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 lg:max-w-sm">
            <Link
              to="/contact"
              className="flex h-12 items-center justify-center rounded-2xl bg-white text-sm font-bold text-primary transition hover:bg-section-alt"
            >
              Contact the Team
            </Link>
            <Link
              to="/stories"
              className="flex h-12 items-center justify-center rounded-2xl border border-white/15 bg-transparent text-sm font-bold text-primary-foreground transition hover:bg-white/5"
            >
              Explore Stories
            </Link>
          </div>

          {/* Mobile image */}
          <div className="mt-10 w-full lg:hidden">
            <CTAImageCard className="h-[260px]" />
          </div>
        </div>

        {/* Desktop image */}
        <div className="relative hidden justify-self-end lg:block">
          <CTAImageCard className="h-[420px] w-full max-w-[380px]" />
        </div>
      </div>
    </section>
  );
}
