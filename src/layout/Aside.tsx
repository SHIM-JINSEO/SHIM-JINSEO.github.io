import { University, MapPinHouse } from "lucide-react";
import { SiGoogle, SiLinkedin, SiGithub } from "react-icons/si";
import profile from "../assets/profile.jpg";

export default function Aside() {
  return (
    <aside className="flex p-2 gap-4 w-full md:w-64 h-full md:flex-col md:p-8">
      <div className="flex flex-col justify-between">
        <img
          src={profile}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover"
        />
        <div className="text-3xl font-semibold text-blue-400">Jinseo Shim</div>
      </div>
      <div className="w-40 text-xl">
        <div className="flex gap-1">
          <div className="flex items-center justify-center">
            <University />
          </div>
          <a className="text-center" href="https://www.gist.ac.kr/en/main.html">
            GIST
          </a>
        </div>
        <div className="flex gap-1">
          <div className="flex items-center justify-center">
            <MapPinHouse />
          </div>
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
      </div>
    </aside>
  );
}
