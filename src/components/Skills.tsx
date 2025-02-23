import { Badge } from "@/components/ui/badge";
import { HARD_SKILLS, SOFT_SKILLS } from "@/constants/info";
import { AnimatePresence, motion } from "framer-motion";

const TRANSITION_DELAY = 0.2;

export default function Skills() {
  return (
    <div className="flex flex-col space-y-8 text-secondary flex-wrap rounded-2xl p-10 flex-grow justify-center items-center select-none">
      <h1 className="text-primary drop-shadow-lg text-3xl lg:text-6xl">
        Skills
      </h1>
      <AnimatePresence mode="wait">
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 gap-6">
          {HARD_SKILLS.map((hardSkill, index) => (
            <motion.div
              key={hardSkill.name}
              whileInView="visible"
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * TRANSITION_DELAY }}
            >
              <Badge
                variant="outline"
                className="flex !border-none flex-col group relative rounded-xl shadow-lg lg:p-6 p-3 transition-colors ease-in-out duration-200 cursor-pointer w-full items-center justify-center"
              >
                <p className=" flex items-center justify-center mb-auto gap-1 text-center mt-auto text-lg lg:text-xl z-10">
                  {hardSkill.icon}
                  <strong>{hardSkill.name}</strong>
                </p>
                <p className="text-center mt-auto mb-2 lg:mb-0 z-10">
                  {hardSkill.time} year{hardSkill.time > 1 && "s"}
                </p>
                <div
                  style={{ width: `${hardSkill.percent}%` }}
                  className="absolute bg-skill inset-0 inset-y-auto bottom-0 rounded-xl h-2 float-left p-0 border-0 m-0"
                ></div>
              </Badge>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
      <div className="flex flex-col justify-center items-center lg:w-9/12">
        <div className="flex flex-row flex-wrap justify-center items-center">
          {SOFT_SKILLS.map((softSkill, index) => (
            <motion.div
              key={softSkill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay:
                  HARD_SKILLS.length * TRANSITION_DELAY + index * TRANSITION_DELAY,
              }}
            >
              <Badge
                key={index}
                variant="default"
                className="flex gap-2 items-center rounded-xl mb-3 shadow-lg p-3 mx-3 w-42 transition-colors cursor-pointer duration-200"
              >
                <div>{softSkill.icon}</div>
                <p className="text-center text-sm w-full">{softSkill.name}</p>
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
