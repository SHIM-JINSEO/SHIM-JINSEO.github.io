import { University, MapPinHouse, Mail } from "lucide-react";
import { SiGoogle, SiLinkedin, SiGithub } from "react-icons/si";
import profile from "../assets/profile.jpg";

export default function Aside() {
  return (
    <aside className="w-full md:w-64 flex flex-col items-center md:items-start gap-6 md:gap-8 pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-border md:pr-8 md:min-h-[calc(100vh-8rem)]">
      {/* Profile Image & Name Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 w-full">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <img
            src={profile}
            alt="Profile"
            className="relative w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-2 border-background shadow-lg"
          />
        </div>
        <div className="space-y-1">
          <div className="text-3xl font-bold tracking-tight text-foreground">
            Jinseo Shim
          </div>
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-sm font-medium text-muted-foreground">
            <University className="w-4 h-4 shrink-0 text-blue-500" />
            <span>Undergraduate at GIST</span>
          </div>
        </div>
      </div>

      {/* Information / Links */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-col gap-2 md:gap-3 text-sm font-medium text-muted-foreground">
        <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/50 hover:text-foreground transition-all duration-200">
          <MapPinHouse className="w-4 h-4 shrink-0 text-indigo-500" />
          <a
            href="https://en.wikipedia.org/wiki/Changwon"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            Changwon, Korea
          </a>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/50 hover:text-foreground transition-all duration-200">
          <SiGoogle className="w-4 h-4 shrink-0 text-[#4285F4]" />
          <a
            href="https://scholar.google.com/citations?user=YzPrGD8AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            Google Scholar
          </a>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/50 hover:text-foreground transition-all duration-200">
          <SiGithub className="w-4 h-4 shrink-0 text-foreground" />
          <a
            href="https://github.com/SHIM-JINSEO"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/50 hover:text-foreground transition-all duration-200">
          <SiLinkedin className="w-4 h-4 shrink-0 text-[#0A66C2]" />
          <a
            href="https://www.linkedin.com/in/jinseo-shim-135834395/"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate hover:underline"
          >
            LinkedIn
          </a>
        </div>

        <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/50 hover:text-foreground transition-all duration-200">
          <Mail className="w-4 h-4 shrink-0 text-rose-500" />
          <a
            href="mailto:jinseo5892@gm.gist.ac.kr"
            className="truncate hover:underline"
          >
            jinseo5892@gm.gist.ac.kr
          </a>
        </div>
      </div>
    </aside>
  );
}
