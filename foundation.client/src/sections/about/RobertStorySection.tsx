import { Heart } from "lucide-react";

export function RobertStorySection() {
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
            {/* 
              To add Robert's photo:
              
              Option 1 (Recommended): Place image in /public folder
              - Add your image file to: foundation.client/public/robert-photo.jpg
              - The path "/robert-photo.jpg" will work automatically
              
              Option 2: Import from assets folder
              - Add image to: foundation.client/src/assets/robert-photo.jpg
              - Import it: import robertPhoto from '../../assets/robert-photo.jpg'
              - Use it: src={robertPhoto}
            */}
            <img
              src="/robert-photo.jpg"
              alt="Robert A. Hendry"
              className="w-40 h-40 rounded-full object-cover border-2 border-border shadow-md"
            />
            <p className="text-base text-muted-foreground leading-relaxed md:text-left text-center">
              Robert was a brilliant, kind, and deeply loved son, brother, and
              friend. Every project we take on keeps his curiosity, humor, and
              compassion at the center.
            </p>
          </div>

          <div className="space-y-6">
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
