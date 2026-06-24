import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

export function AboutFinalCTA() {
  return (
    <section className="bg-primary px-5 py-10 text-white sm:py-12 md:py-16 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-xl flex-col gap-7 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:max-w-7xl sm:p-10 md:flex-row md:items-center md:justify-between md:gap-8 animate-fade-up">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
            Help make support easier to find.
          </h2>
          <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
            Explore clear resources, read community stories, or contact the
            foundation to learn more about the work.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:shrink-0 md:flex-row">
          <Button
            size="lg"
            className="w-full bg-white text-primary hover:bg-white/90 md:w-auto"
            asChild
          >
            <Link to="/resources">Browse Resources</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white md:w-auto"
            asChild
          >
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
