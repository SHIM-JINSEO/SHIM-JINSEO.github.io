import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, Calendar, Users } from "lucide-react";
import AAAI from "@/assets/AAAI.png";
import NeurIPS from "@/assets/NeurIPS.png";

export const Route = createFileRoute("/Publication/")({
  component: RouteComponent,
});

const PublicationData = [
  {
    title: "Cylindrical Lattice Embedding for Program Induction",
    authors: ["Jinseo Shim"],
    venue: "AAAI 2026 Undergraduate Consortium",
    details:
      "Research Proposal selected for presentation at the Undergraduate Consortium (UC) of the AAAI Conference on Artificial Intelligence.",
    year: "2026",
    image: AAAI,
    link: "https://ojs.aaai.org/index.php/AAAI/article/view/42323",
    badge: "AAAI-26 UC",
    badgeColor:
      "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  },
  {
    title: "Composed Program Induction with Latent Program Lattice",
    authors: [
      "Jumyung Park",
      "Jiwon Park",
      "Jinseo Shim",
      "Sejin Kim",
      "Paulina Vennemann",
      "Sundong Kim",
    ],
    venue: "NeurIPS 2025 NeurReps Workshop",
    details:
      "Symmetry and Geometry in Neural Representations workshop paper at the Conference on Neural Information Processing Systems.",
    year: "2025",
    image: NeurIPS,
    link: "https://openreview.net/forum?id=N99odDSTM7",
    badge: "NeurReps @ NeurIPS'25",
    badgeColor:
      "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
  },
];

function RouteComponent() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Publications</h2>
        <p className="text-muted-foreground text-sm">
          A list of select conference papers, workshop papers, and research
          proposals.
        </p>
      </div>

      <div className="space-y-6">
        {PublicationData.map((pub, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 p-5 rounded-xl border border-border bg-card hover:shadow-md hover:border-border/80 transition-all duration-300"
          >
            {/* Logo/Image container */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-lg bg-muted flex items-center justify-center p-3 shrink-0 border border-border/50 self-center md:self-start">
              <img
                src={pub.image}
                alt={pub.venue}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Content container */}
            <div className="flex-1 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${pub.badgeColor}`}
                >
                  {pub.badge}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {pub.year}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground hover:text-blue-500 transition-colors duration-200">
                <a href={pub.link} target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
              </h3>

              {/* Authors List */}
              <div className="flex items-start gap-1.5 text-sm text-muted-foreground">
                <Users className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground/80" />
                <p className="leading-relaxed">
                  {pub.authors.map((author, i) => {
                    const isSelf = author === "Jinseo Shim";
                    return (
                      <span key={i}>
                        {isSelf ? (
                          <strong className="text-foreground font-semibold underline decoration-blue-500/50">
                            {author}
                          </strong>
                        ) : (
                          <span>{author}</span>
                        )}
                        {i < pub.authors.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
                </p>
              </div>

              <p className="text-sm text-muted-foreground font-medium italic">
                {pub.venue}
              </p>

              <p className="text-sm text-muted-foreground/95 leading-relaxed">
                {pub.details}
              </p>

              {/* Action Links */}
              <div className="pt-2">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/95 transition-colors duration-200"
                >
                  <span>Paper Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
