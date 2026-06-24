import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../components/ui/utils";
import { responsibilityItems } from "./aboutContent";

export function ResponsibleDesignAccordion() {
  const [openItem, setOpenItem] = useState<string | null>(
    responsibilityItems[0].id
  );

  return (
    <section
      className="bg-white py-10 sm:py-12 md:bg-section-alt md:py-16 lg:py-24"
      aria-labelledby="responsible-design-heading"
    >
      <div className="mx-auto max-w-xl px-5 md:max-w-3xl sm:px-6 lg:px-8 animate-fade-up">
        <div className="md:text-center">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-muted-foreground md:text-sm md:tracking-[0.18em]">
            Our Commitments
          </p>
          <h2
            id="responsible-design-heading"
            className="mt-4 text-center text-[1.8rem] font-extrabold leading-[1.05] tracking-[-0.045em] text-primary md:text-3xl md:tracking-tight lg:text-4xl"
          >
            <span className="md:hidden">Trust &amp; Responsibility</span>
            <span className="hidden md:inline">Responsible by Design</span>
          </h2>
          <p className="mx-auto mt-4 max-w-sm text-center text-[15px] leading-7 text-muted-foreground md:max-w-2xl md:text-base lg:text-lg">
            <span className="md:hidden">
              Clear boundaries, privacy-first practices, and careful crisis
              navigation.
            </span>
            <span className="hidden md:inline">
              We are careful with the information we publish, how we handle
              inquiries, and how we guide people toward crisis support.
            </span>
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] md:mt-10 md:divide-y md:rounded-[1.5rem] md:shadow-sm">
          {responsibilityItems.map((item) => {
            const isOpen = openItem === item.id;
            return (
              <div key={item.id} className="border-b border-border last:border-b-0">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`responsible-panel-${item.id}`}
                  id={`responsible-trigger-${item.id}`}
                  onClick={() => setOpenItem(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-section-alt/40 md:py-5"
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
                  id={`responsible-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`responsible-trigger-${item.id}`}
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[15px] leading-7 text-muted-foreground md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
