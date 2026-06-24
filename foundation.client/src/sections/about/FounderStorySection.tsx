import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../components/ui/utils";
import { SEAL_LOGO_SRC } from "../../constants/logos";
import { storyAccordionItems } from "./aboutContent";

export function FounderStorySection() {
  const [openItem, setOpenItem] = useState<string>(storyAccordionItems[0].id);

  return (
    <section id="story" className="bg-section-alt py-10 sm:py-12 md:py-20 lg:py-28">
      {/* Mobile: compact story accordion */}
      <div className="mx-auto max-w-xl px-5 md:hidden animate-fade-up">
        <h2 className="text-[1.8rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-primary">
          Why this work exists
        </h2>

        <p className="mt-4 text-[15px] leading-7 text-muted-foreground">
          Robert was brilliant, kind, and deeply loved. His story is why the
          foundation is focused on clearer support, practical resources, and
          community-shaped action.
        </p>

        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
          {storyAccordionItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div key={item.id} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`story-panel-${item.id}`}
                  id={`story-trigger-${item.id}`}
                  onClick={() => setOpenItem(isOpen ? "" : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-semibold text-primary">{item.title}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`story-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`story-trigger-${item.id}`}
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-7 text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop: sticky panel + full story */}
      <div className="mx-auto hidden max-w-7xl gap-10 px-5 sm:px-6 md:grid lg:grid-cols-[0.8fr_1.2fr] lg:px-8 animate-fade-up">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.5rem] border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:border-secondary/20 hover:shadow-md">
            <div className="flex flex-col items-center text-center">
              <img
                src={SEAL_LOGO_SRC}
                alt="The Robert A. Hendry Foundation seal"
                className="h-24 w-24 object-contain"
              />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                In memory of
              </p>
              <p className="mt-2 text-xl font-bold text-primary">
                Robert A. Hendry
              </p>
              <p className="mt-1 text-sm text-muted-foreground">1990–2023</p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                A deeply loved son, brother, and friend.
              </p>
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
              Why the foundation exists
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Robert was a brilliant, kind, and deeply loved son, brother, and
              friend. Every project we take on keeps his curiosity, humor, and
              compassion at the center.
            </p>
          </div>

          <StoryBlocks />

          <div className="grid gap-4 sm:grid-cols-2">
            <article
              id="story-family-partners"
              className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/25 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-lg font-semibold text-primary">
                Shaped by real experience
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                The resources we build are informed by people who live with
                anxiety every day. Community input guides what we create—not
                assumptions.
              </p>
            </article>

            <article
              id="story-community-voices"
              className="rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/25 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-lg font-semibold text-primary">
                Guided by community voices
              </h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-base">
                We listen to individuals, families, and contributors. Their
                perspectives shape our priorities and keep our work grounded,
                practical, and compassionate.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryBlocks({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        Robert lived with anxiety—an invisible burden that he carried in
        silence. Like so many others, he struggled to ask for help. When anxiety
        became overwhelming, alcohol felt like the only option to cope.
      </p>

      <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
        In 2023, at just 33 years old, Robert&apos;s life was cut short by the
        tragic combination of unsuccessfully treated anxiety and alcohol use. His
        death was preventable. That is why this foundation exists.
      </p>

      <blockquote className="rounded-2xl border border-primary/15 bg-primary/5 px-6 py-5">
        <p className="text-lg font-semibold leading-8 text-primary sm:text-xl">
          Robert deserved better. And so do you.
        </p>
      </blockquote>

      <div>
        <h3 className="text-2xl font-bold tracking-tight text-primary">
          Turning grief into practical action
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          This foundation is a promise: to turn tragedy into action, to help
          people get the support they need, and to create a world where no one
          suffers in silence. We co-create with families and community partners,
          doing things that support their efforts and make care easier to access.
        </p>
      </div>
    </div>
  );
}
