import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { SEAL_LOGO_SRC } from "../../constants/logos";

export function AboutHeroSection() {
  return (
    <>
      {/* Mobile: integrated editorial panel */}
      <section className="relative overflow-hidden bg-white px-5 py-10 md:hidden">
        <div className="relative mx-auto max-w-xl overflow-hidden rounded-[2rem] border border-border/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] animate-fade-up">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
            About the Robert A. Hendry Foundation
          </p>

          <h1 className="mt-5 text-[2.35rem] font-extrabold leading-[0.95] tracking-[-0.055em] text-primary">
            Built from loss.
            <span className="block">Focused on action.</span>
          </h1>

          <p className="mt-5 text-[15px] leading-7 text-muted-foreground">
            Founded after the loss of Robert Hendry, the foundation turns grief
            into practical anxiety resources, community listening, and
            action-based projects.
          </p>

          <div className="mt-6 flex items-center gap-4 rounded-2xl border border-border bg-section-alt/80 p-4">
            <img
              src={SEAL_LOGO_SRC}
              alt="The Robert A. Hendry Foundation seal"
              className="h-16 w-16 shrink-0 object-contain"
            />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                In memory of
              </p>
              <p className="mt-1 text-lg font-bold tracking-[-0.02em] text-primary">
                Robert A. Hendry
              </p>
              <p className="text-sm text-muted-foreground">1990–2023</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <Button size="lg" className="w-full" asChild>
              <Link to="/resources">Browse Resources</Link>
            </Button>
            <a
              href="#story"
              className="text-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Read Robert&apos;s Story →
            </a>
          </div>
        </div>
      </section>

      {/* Desktop: split editorial hero */}
      <section className="relative hidden overflow-hidden bg-white md:block">
        <div
          className="pointer-events-none absolute inset-x-0 top-20 flex justify-center"
          aria-hidden="true"
        >
          <img
            src={SEAL_LOGO_SRC}
            alt=""
            className="h-[320px] w-[320px] object-contain opacity-[0.04] lg:h-[420px] lg:w-[420px]"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28 animate-fade-up">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              About The Robert A. Hendry Foundation
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight leading-[0.95] text-primary sm:text-5xl lg:text-7xl">
              Built from loss.
              <br />
              Focused on action.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              The Robert A. Hendry Foundation exists to make anxiety support
              clearer, easier to access, and shaped by the people and families
              who need it most.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Founded by Andrew Hendry after the loss of his son Robert, the
              foundation turns grief into practical resources, community
              listening, and future collaborative projects.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link to="/resources">Browse Resources</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#story">Read Robert&apos;s Story</a>
              </Button>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="relative w-full rounded-[2rem] border border-border bg-section-alt/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-secondary/20 hover:shadow-[0_28px_90px_rgba(15,23,42,0.10)]">
              <div className="relative flex flex-col items-center text-center">
                <img
                  src={SEAL_LOGO_SRC}
                  alt="The Robert A. Hendry Foundation seal"
                  className="h-28 w-28 object-contain sm:h-32 sm:w-32"
                />

                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  In memory of
                </p>
                <p className="mt-2 text-2xl font-bold tracking-tight text-primary">
                  Robert A. Hendry
                </p>
                <p className="mt-1 text-sm text-muted-foreground">1990–2023</p>

                <p className="mt-6 max-w-xs text-sm leading-7 text-muted-foreground">
                  A deeply loved son, brother, and friend whose story drives
                  everything we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
