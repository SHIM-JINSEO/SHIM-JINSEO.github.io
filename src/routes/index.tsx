import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Code,
  Terminal,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const interests = [
    {
      title: "Program Induction & Synthesis",
      description:
        "Exploring methods to generate code and induce programs using combinatorial search and deep learning.",
      icon: Terminal,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Symmetry & Geometry in ML",
      description:
        "Incorporating geometric priors and symmetry groups into neural representations for better generalization.",
      icon: Code,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Representation Learning",
      description:
        "Learning structured representations (e.g., lattices, graphs) to facilitate compositional reasoning.",
      icon: Sparkles,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
  ];

  const news = [
    {
      date: "Jan 2026",
      title: "AAAI-2026 Selection",
      description:
        "Selected to present at the AAAI-2026 Undergraduate Consortium.",
      highlight: true,
    },
    {
      date: "Dec 2025",
      title: "NeurIPS-2025 Workshop Paper",
      description:
        "Presented our work on latent program lattices at the Symmetry and Geometry in Neural Representations (NeurReps) workshop.",
    },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      {/* Bio / Intro Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
        <p className="text-base text-muted-foreground leading-relaxed">
          Hi! I'm <strong className="text-foreground">Jinseo Shim</strong>, an
          undergraduate student majoring in Computer Science at{" "}
          <a
            href="https://www.gist.ac.kr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GIST
          </a>{" "}
          (Gwangju Institute of Science and Technology).
        </p>
        <p className="text-base text-muted-foreground leading-relaxed">
          I am passionate about building intelligent systems that can reason
          efficiently and systematically. My current research focuses on{" "}
          <strong className="text-foreground">Representation Learning</strong>,
          espcially program representation with mathematical structures and
          incorporating geometric constraints into neural networks.
        </p>
      </section>

      {/* Research Interests Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <BookOpen className="w-5 h-5 text-blue-500" />
          <h3 className="text-xl font-bold tracking-tight">
            Research Interests
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {interests.map((interest, i) => {
            const Icon = interest.icon;
            return (
              <div
                key={i}
                className="group p-5 rounded-xl border border-border bg-card hover:border-blue-500/50 hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${interest.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className={`w-5 h-5 ${interest.color}`} />
                </div>
                <h4 className="font-semibold text-base mb-1.5 group-hover:text-blue-500 transition-colors duration-200">
                  {interest.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <GraduationCap className="w-5 h-5 text-indigo-500" />
          <h3 className="text-xl font-bold tracking-tight">Education</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 p-4 rounded-xl border border-border bg-card">
          <div>
            <h4 className="font-bold text-foreground">
              Gwangju Institute of Science and Technology (GIST)
            </h4>
            <p className="text-sm text-muted-foreground">
              B.S. Student in Computer Science and Engineering
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-muted text-muted-foreground uppercase tracking-wider">
            2024 - Present
          </span>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <h3 className="text-xl font-bold tracking-tight">News & Updates</h3>
        </div>
        <div className="relative border-l border-border pl-6 ml-3 space-y-8">
          {news.map((item, i) => (
            <div key={i} className="relative group">
              {/* Timeline dot */}
              <span
                className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-background transition-colors duration-300 ${
                  item.highlight
                    ? "bg-blue-500 ring-4 ring-blue-500/10"
                    : "bg-muted-foreground/30"
                }`}
              />
              <div className="space-y-1">
                <span className="text-xs font-semibold text-muted-foreground">
                  {item.date}
                </span>
                <h4 className="font-bold text-foreground flex items-center gap-1.5">
                  {item.title}
                  {item.highlight && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                      Selected
                    </span>
                  )}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
