import { createFileRoute } from "@tanstack/react-router";
import { Network, Brain, GitBranch, Cpu, Compass } from "lucide-react";

export const Route = createFileRoute("/Research/")({
  component: RouteComponent,
});

function RouteComponent() {
  const researchProjects = [
    {
      title: "Latent Program Lattices",
      subtitle: "Representation Learning for Program Structure",
      description:
        "To capture compositional structure of programs, we proposed indutive hypothesis that composed programs are represented as linaer combination of basis programs, which forms discrete lattice latent space for program indcution.",
      icons: [Network, GitBranch],
      tags: ["Neuro-Symbolic AI", "Lattice Theory", "Representation Learning"],
      papers: ["NeurReps @ NeurIPS 2025"],
    },
    {
      title: "Cylindrical Lattice Embedding",
      subtitle: "Symmetry and Geometry in Program Induction",
      description:
        "Focusing embedding of invariant programs on cylindrical lattice. The invariant programs, which return to its initial state after certain time of execution, must be maaped as closed loop in the latent space. It allows to produce shorter program sequences than previous latent program lattice approach.",
      icons: [Brain, Compass],
      tags: ["Geometric Deep Learning", "Program Induction", "Generalization"],
      papers: ["AAAI 2026 UC"],
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Research</h2>
        <p className="text-muted-foreground text-sm">
          Exploring the intersection of deep learning, mathematical structure,
          and program synthesis.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {researchProjects.map((project, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-border bg-card hover:border-blue-500/30 hover:shadow-md transition-all duration-300 space-y-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
                  {project.subtitle}
                </p>
              </div>
              <div className="flex gap-1.5 bg-muted p-2 rounded-lg">
                {project.icons.map((Icon, idx) => (
                  <Icon key={idx} className="w-5 h-5 text-muted-foreground" />
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.papers && (
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Featured In:
                  </span>
                  {project.papers.map((paper, idx) => (
                    <span
                      key={idx}
                      className="underline decoration-blue-500/30"
                    >
                      {paper}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Methodology Section */}
      <section className="p-6 rounded-xl border border-border bg-card space-y-4">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Cpu className="w-5 h-5 text-indigo-500" />
          <span>Core Methodological Approach</span>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          My work aims to improve data efficiency and reasoning performance of
          the model via structured latent space. By structuring the latent space
          of neural networks using mathematical constructs like graph, groups,
          and lattices:
        </p>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pl-2">
          <li>
            We enable neural synthesis systems to verify program properties
            during generation.
          </li>
          <li>
            We preserve structural symmetries under execution transformations.
          </li>
          <li>
            We can extract core knowledge to solve certain problems <br />
            (e.g.Algebraic structure of mathematical problems, Dynamics and
            interactions of systems)
          </li>
        </ul>
      </section>
    </div>
  );
}
