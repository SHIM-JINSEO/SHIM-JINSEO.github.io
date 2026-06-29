import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Share2, ExternalLink } from "lucide-react";
import { SiGoogle, SiLinkedin, SiGithub } from "react-icons/si";

export const Route = createFileRoute("/Contact/")({
  component: RouteComponent,
});

function RouteComponent() {
  const contacts = [
    {
      title: "Email",
      value: "jinseo5892@gm.gist.ac.kr",
      description:
        "For academic discussions, research collaborations, or general inquiries.",
      href: "mailto:jinseo5892@gm.gist.ac.kr",
      icon: Mail,
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      actionText: "Send Email",
    },
    {
      title: "Office Location",
      value: "GIST, Gwangju, South Korea",
      description:
        "Department of Computer Science and Engineering, Gwangju Institute of Science and Technology.",
      href: "https://www.gist.ac.kr/en/main.html",
      icon: MapPin,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
      actionText: "Open Offical Website",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/SHIM-JINSEO",
      icon: SiGithub,
      handle: "@SHIM-JINSEO",
      color: "hover:text-foreground",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jinseo-shim-135834395/",
      icon: SiLinkedin,
      handle: "Jinseo Shim",
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=YzPrGD8AAAAJ&hl=en",
      icon: SiGoogle,
      handle: "Jinseo Shim",
      color: "hover:text-[#4285F4]",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <p className="text-muted-foreground text-sm">
          Feel free to reach out via email or connect with me on social
          platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div
              key={index}
              className="p-6 rounded-xl border border-border bg-card flex flex-col justify-between space-y-4 hover:shadow-md hover:border-border/80 transition-all duration-300"
            >
              <div className="space-y-3">
                <div
                  className={`w-10 h-10 rounded-lg ${contact.bg} flex items-center justify-center`}
                >
                  <Icon className={`w-5 h-5 ${contact.color}`} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground">
                    {contact.title}
                  </h3>
                  <p className="text-sm font-semibold text-foreground/90 font-mono break-all">
                    {contact.value}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {contact.description}
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors duration-200"
                >
                  <span>{contact.actionText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Social Profiles Card */}
      <div className="p-6 rounded-xl border border-border bg-card space-y-4 hover:border-border/80 hover:shadow-md transition-all duration-300">
        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
          <Share2 className="w-5 h-5 text-blue-500" />
          <span>Soical Links</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-lg border border-border/60 bg-muted/20 flex items-center gap-3 transition-all duration-200 ${social.color}`}
              >
                <div className="bg-background p-2 rounded-md border border-border/40 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-foreground font-sans">
                    {social.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {social.handle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
