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
import { motion, AnimatePresence } from "framer-motion";

import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiDiagramsdotnet } from "react-icons/si";
import { MdOutlineAppShortcut } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineDotNet } from "react-icons/ai";

import type { ReactNode } from "react";
import { Badge } from "./ui/badge";

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

const TRANSITION_DELAY = 0.2;

export default function Skills() {
  const HARD_SKILLS: HardSkill[] = [
    { name: "React", time: 3, percent: 70, icon: <FaReact /> },
    {
      name: "RN",
      time: 2,
      percent: 50,
      icon: <TbBrandReactNative />,
    },
    { name: "TypeScript", time: 3, percent: 70, icon: <TbBrandTypescript /> },
    { name: "Tailwind", time: 2, percent: 80, icon: <RiTailwindCssLine /> },
    { name: ".NET", time: 1, percent: 30, icon: <AiOutlineDotNet /> },
    { name: "CSS", time: 4, percent: 75, icon: <FaCss3 /> },
    { name: "SQL", time: 3, percent: 60, icon: <FaDatabase /> },
    { name: "Figma", time: 1, percent: 50, icon: <FaFigma /> },
  ];

  const SOFT_SKILLS: SoftSkill[] = [
    { name: "Written Communication", icon: <FaPen /> },
    { name: "Project Management", icon: <FaProjectDiagram /> },
    { name: "Incident Management", icon: <FaUsers /> },
    { name: "Change Management", icon: <FaExchangeAlt /> },
    { name: "Solution Design", icon: <SiDiagramsdotnet /> },
    { name: "Technical Documentation", icon: <FaBook /> },
    { name: "Wireframing", icon: <MdOutlineAppShortcut /> },
    { name: "Design", icon: <MdDesignServices /> },
  ];
  return (
    <div className="flex flex-col space-y-8 text-secondary flex-wrap rounded-2xl p-10 flex-grow justify-center items-center select-none">
      <h1 className="text-primary drop-shadow-lg text-3xl lg:text-6xl">
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-6">
        {HARD_SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * TRANSITION_DELAY }}
          >
            <Badge
              variant="outline"
              className="flex !border-none flex-col group relative rounded-xl shadow-lg lg:p-6 p-3 transition-colors ease-in-out duration-200 cursor-pointer w-full items-center justify-center"
            >
              <p className=" flex items-center justify-center mb-auto gap-1 text-center mt-auto text-lg lg:text-xl z-10">
                {s.icon}
                <strong>{s.name}</strong>
              </p>
              <p className="text-center mt-auto mb-2 lg:mb-0 z-10">
                {s.time} year{s.time > 1 && "s"}
              </p>
              <div
                style={{ width: `${s.percent}%` }}
                className="absolute bg-skill inset-0 inset-y-auto bottom-0 rounded-xl h-2 float-left p-0 border-0 m-0"
              ></div>
            </Badge>
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col justify-center items-center lg:w-9/12">
        <div className="flex flex-row flex-wrap justify-center items-center">
          {SOFT_SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay:
                  HARD_SKILLS.length * TRANSITION_DELAY + i * TRANSITION_DELAY,
              }}
            >
              <Badge
                key={i}
                variant="default"
                className="flex gap-2 items-center rounded-xl mb-3 shadow-lg p-3 mx-3 w-42 transition-colors cursor-pointer duration-200"
              >
                <div>{s.icon}</div>
                <p className="text-center text-sm w-full">{s.name}</p>
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
