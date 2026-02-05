import { University, MapPinHouse } from "lucide-react";
import { SiGoogle, SiLinkedin, SiGithub } from "react-icons/si";
import profile from "../assets/profile.jpg";

export default function Aside() {
  return (
    <aside className="w-64 h-full flex flex-col p-8 gap-2">
      <img
        src={profile}
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover"
      />
      <div className="text-xl font-semibold text-blue-400">Jinseo Shim</div>
      <div className="flex gap-1">
        <University />
        <a href="https://www.gist.ac.kr/en/main.html">GIST</a>
      </div>
      <div className="flex gap-1">
        <MapPinHouse />
        <a href="https://en.wikipedia.org/wiki/Changwon">
          Changwon, <br /> South Korea
        </a>
      </div>
      <div className="flex gap-1">
        <div className="flex items-center justify-center">
          <SiGoogle className="text-[#4285F4]" />
        </div>
        <a href="https://scholar.google.com/citations?user=YzPrGD8AAAAJ&hl=en">
          Google Scholar
        </a>
      </div>
      <div className="flex gap-1">
        <div className="flex items-center justify-center">
          <SiGithub />
        </div>
        <a href="https://github.com/SHIM-JINSEO">Github</a>
      </div>
      <div className="flex gap-1">
        <div className="flex items-center justify-center">
          <SiLinkedin className="text-[#0A66C2]" />
        </div>
        <a href="https://www.linkedin.com/in/jinseo-shim-135834395/">
          LinkedIn
        </a>
      </div>
    </aside>
  );
}
