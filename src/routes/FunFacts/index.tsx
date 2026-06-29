import { createFileRoute } from "@tanstack/react-router";
import { Smile, Coffee, Compass, BookOpen, Atom } from "lucide-react";

export const Route = createFileRoute("/FunFacts/")({
  component: RouteComponent,
});

function RouteComponent() {
  const categories = [
    {
      title: "Physics and Mathematics",
      description:
        "I am currently doing physics minor on GIST. I love talking about not only AI research, but also physics and mathematics .",
      icon: Atom,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Coffee & Coding",
      description:
        "My productivity is directly proportional to the quality of espresso. I enjoy exploring local coffee spots and working on front-end development at those places.",
      icon: Coffee,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: "Geometry in Art & Nature",
      description:
        "I find symmetrical patterns and fractal structures in nature fascinating, which also fuels my research interest in geometric deep learning.",
      icon: Compass,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Science Fiction",
      description:
        "A huge fan of speculative fiction exploring AI, space exploration, and hard-science concepts. Hit me up for book recommendations!",
      icon: BookOpen,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight flex items-center gap-2">
          <Smile className="w-8 h-8 text-blue-500" />
          <span>Fun Facts</span>
        </h2>
        <p className="text-muted-foreground text-sm">
          A bit more about me outside of classes and publications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card hover:shadow-md hover:border-border/80 hover:-translate-y-0.5 transition-all duration-300 space-y-3"
            >
              <div
                className={`w-10 h-10 rounded-lg ${cat.bg} flex items-center justify-center`}
              >
                <Icon className={`w-5 h-5 ${cat.color}`} />
              </div>
              <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Trivia / Callout Section */}
      {/* <section className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 space-y-3">
        <h3 className="text-base font-bold text-foreground flex items-center gap-1.5">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span>Quick Trivia</span>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Why "Cylindrical" Lattice Embedding? Programs with loop invariants
          behave periodically under iterations. Embedding them in cylindrical
          spaces aligns the circular topology of loops naturally with the
          geometry of the embedding space, preventing numerical overflow and
          preserving structure.
        </p>
      </section> */}
    </div>
  );
}
