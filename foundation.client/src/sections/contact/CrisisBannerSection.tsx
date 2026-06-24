import { Phone } from "lucide-react";
import { crisisSurfaceClass } from "../../constants/brand";

export function CrisisBannerSection() {
  return (
    <section className={`border-b border-border py-6 ${crisisSurfaceClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Need Immediate Help?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-secondary" />
              Call or text 988 Crisis Lifeline (U.S.)
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-secondary" />
              Dial 911 for immediate emergency assistance
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-secondary" />
              Contact your local crisis line for regional support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
