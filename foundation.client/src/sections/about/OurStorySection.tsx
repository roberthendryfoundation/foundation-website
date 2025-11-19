import { Heart } from "lucide-react";

export function OurStorySection() {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl lg:text-4xl mb-4 text-foreground">
              Our Story
            </h2>
            <p className="text-lg text-muted-foreground">
              In memory of Robert A. Hendry (1990 - 2023)
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
            <div className="w-40 h-40 rounded-full border border-dashed border-border bg-muted/40 flex items-center justify-center text-center text-xs font-medium text-muted-foreground">
              Rob&rsquo;s photo coming soon
            </div>
            <p className="text-base text-muted-foreground leading-relaxed md:text-left text-center">
              Robert was a brilliant, kind, and deeply loved son, brother, and
              friend. Every project we take on keeps his curiosity, humor, and
              compassion at the center.
            </p>
          </div>

          <div id="story-roberts-legacy" className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Robert lived with anxiety—an invisible burden that he carried in
              silence. Like so many others, he struggled to ask for help. When
              anxiety became overwhelming, alcohol felt like the only option to
              cope.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              In 2023, at just 33 years old, Robert's life was cut short by the
              tragic combination of unsuccessfully treated anxiety and alcohol
              use. His death was preventable. That is why this foundation
              exists.
            </p>

            <p className="text-lg font-semibold text-foreground leading-relaxed">
              Robert deserved better. And so do you.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              This foundation is a promise: to turn tragedy into action, to help
              people get the support they need, and to create a world where no
              one suffers in silence. We co-create with families and community
              partners, doing things that support their efforts and make care
              easier to access.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <article
              id="story-family-partners"
              className="bg-muted/30 border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Shaped by Real Experience
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                The resources we build are informed by the people who live with
                anxiety every day. Through conversations, shared stories, and
                community input, we learn what information feels confusing,
                overwhelming, or hard to access. Those insights guide what we
                create and help ensure our tools reflect real needs not
                assumptions.
              </p>
            </article>

            <article
              id="story-community-voices"
              className="bg-muted/30 border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Guided by Community Voices
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We listen to individuals, families, and contributors who share
                their experiences with anxiety and alcohol use. Their
                perspectives help us understand where support is lacking and
                what would make a difference. Their voices shape our priorities
                and keep our work grounded, practical, and compassionate.
              </p>
            </article>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground italic">
              "If you're struggling with anxiety, please know: you're not alone,
              it's not your fault, and help is available. Call or text 988 in
              the U.S. for immediate support."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
