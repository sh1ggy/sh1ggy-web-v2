import {
  FaCss3,
  FaReact,
  FaDatabase,
  FaFigma,
  FaPen,
  FaProjectDiagram,
  FaUsers,
  FaExchangeAlt,
  FaBook,
} from "react-icons/fa";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiDiagramsdotnet } from "react-icons/si";
import { MdOutlineAppShortcut } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineDotNet } from "react-icons/ai";

import type { ReactNode } from "react";

interface HardSkill {
  name: string;
  time: number;
  percent: number;
  icon: ReactNode;
}

interface SoftSkill {
  name: string;
  icon: ReactNode;
}

export default function Skills() {
  const HARD_SKILLS: HardSkill[] = [
    { name: "TypeScript", time: 3, percent: 70, icon: <TbBrandTypescript /> },
    { name: "React", time: 3, percent: 70, icon: <FaReact /> },
    { name: ".NET", time: 1, percent: 30, icon: <AiOutlineDotNet /> },
    {
      name: "React Native",
      time: 2,
      percent: 50,
      icon: <TbBrandReactNative />,
    },
    { name: "Tailwind", time: 2, percent: 70, icon: <RiTailwindCssLine /> },
    { name: "CSS", time: 3, percent: 70, icon: <FaCss3 /> },
    { name: "SQL", time: 2, percent: 60, icon: <FaDatabase /> },
    { name: "Figma", time: 2, percent: 60, icon: <FaFigma /> },
  ];

  const SOFT_SKILLS: SoftSkill[] = [
    { name: "Written Communication", icon: <FaPen /> },
    { name: "Project Management", icon: <FaProjectDiagram /> },
    { name: "Incident Management", icon: <FaUsers /> },
    { name: "Change Management", icon: <FaExchangeAlt /> },
    { name: "Solution Design", icon: <SiDiagramsdotnet /> },
    { name: "Documentation", icon: <FaBook /> },
    { name: "Wireframing", icon: <MdOutlineAppShortcut /> },
    { name: "Design", icon: <MdDesignServices /> },
  ];
  return (
    <div className="flex flex-col space-y-8 flex-wrap rounded-2xl p-10 flex-grow justify-center items-center select-none">
      <h1 className="text-primary drop-shadow-lg text-3xl lg:text-6xl">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-6">
        {HARD_SKILLS.map((s, i) => (
          <div
            key={i}
            className="bg-[#444c62] flex flex-col group relative rounded-xl shadow-lg lg:p-6 p-3 transition-colors ease-in-out duration-200 hover:bg-[#5e6578] cursor-pointer w-full items-center justify-center"
          >
            <div className="flex items-center gap-1">
              {s.icon}
              <p className="text-body text-center mt-auto text-xl z-10">
                <strong>{s.name}</strong>
              </p>
            </div>
            <p className="text-body text-center mt-auto mb-2 lg:mb-0 z-10">
              {s.time} year{s.time > 1 && "s"}
            </p>
            <div
              style={{ width: `${s.percent}%` }}
              className="absolute bg-accent inset-0 inset-y-auto bottom-0 rounded-xl h-2 float-left p-0 border-0 m-0"
            ></div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center lg:w-9/12">
        <div className="lg:flex lg:flex-row lg:flex-wrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-3 justify-center items-center">
          {SOFT_SKILLS.map((s, i) => (
            <div
              key={i}
              className="flex gap-2 items-center bg-[#717c96] rounded-xl mb-3 shadow-lg p-3 mx-3 w-42 hover:bg-[#8a98bc] transition-colors cursor-pointer duration-200"
            >
              {s.icon}
              <p className="text-body text-center text-sm">{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
