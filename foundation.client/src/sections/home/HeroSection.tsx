import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { EditorialImagePanel } from "../../components/EditorialImagePanel";
import { SEAL_LOGO_SRC } from "../../constants/logos";
import { homeImages } from "./homeContent";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-section-alt to-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-12 flex justify-center opacity-[0.07] sm:top-16"
        aria-hidden="true"
      >
        <img
          src={SEAL_LOGO_SRC}
          alt=""
          className="h-[220px] w-[220px] sm:h-[320px] sm:w-[320px] lg:h-[440px] lg:w-[440px] object-contain"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-10 sm:px-6 lg:grid lg:min-h-[min(680px,85vh)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:px-8 lg:py-20 animate-fade-up">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-border bg-white/80 px-3 py-1 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur-sm">
            The Robert A. Hendry Foundation
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Building an Action-Based Anxiety Foundation
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            Created in memory of Robert A. Hendry, we turn anxiety awareness into
            completed projects, practical resources, and community-driven support.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link to="/resources">Browse Resources</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Read Our Story</Link>
            </Button>
          </div>

          <div className="mt-6 rounded-2xl border border-border bg-white/80 px-4 py-3 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
            <strong className="font-semibold text-primary">
              Need immediate support?
            </strong>{" "}
            Call or text{" "}
            <a
              href="tel:988"
              className="font-semibold text-secondary hover:underline"
            >
              988
            </a>{" "}
            in the U.S.
          </div>
        </div>

        {/* Mobile: compact editorial image */}
        <div className="mt-8 lg:hidden">
          <EditorialImagePanel
            src={homeImages.hero}
            alt="Community members connected through The Robert A. Hendry Foundation"
            className="aspect-[16/10] max-h-[280px]"
          />
        </div>

        {/* Desktop: editorial image with trust card */}
        <div className="relative hidden lg:block">
          <EditorialImagePanel
            src={homeImages.hero}
            alt="Community members connected through The Robert A. Hendry Foundation"
            className="aspect-[4/5] max-h-[620px]"
          >
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 p-5 shadow-sm backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                The Robert A. Hendry Foundation
              </p>
              <p className="mt-2 text-sm font-semibold text-primary">
                501(c)(3) nonprofit
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Action-based anxiety resources, shaped by community and lived
                experience.
              </p>
            </div>
          </EditorialImagePanel>
        </div>
      </div>
    </section>
  );
}
