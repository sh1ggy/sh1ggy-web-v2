import { useState } from "react"

export default function Skills() {
  const HARD_SKILLS = [
    { skill: "TypeScript", time: 2, percent: 8, },
    { skill: "React", time: 3, percent: 8, },
    { skill: "React Native", time: 3, percent: 8, },
    { skill: "CSS", time: 3, percent: 8, },
    { skill: "Tailwind", time: 1, percent: 8, },
    { skill: "MySQL", time: 3, percent: 8, },
    { skill: "Figma", time: 1, percent: 5, },
  ]
  const SOFT_SKILLS = [
    "Documentation",
    "Wireframing",
    "Written Communication",
    "Systems Diagramming",
    "Incident Management",
  ]
  const [hover, setHover] = useState(false);
  const fill = {
    transition: 'width 1s ease-in-out',
  }
  return (
    <div className="bg-card flex flex-col space-y-12 flex-wrap rounded-2xl p-10 lg:h-[calc(screen-24px)] flex-grow justify-center items-center select-none">
      <h1 className="text-primary text-3xl lg:text-6xl">Skills</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {HARD_SKILLS
          .map((s, i) => (
            <>
              <div key={i} className="bg-[#444c62] group relative rounded-xl shadow-lg lg:p-6 p-3 transition-colors cursor-pointer w-full">
                {/* <div className={fill + `w-[${s.percent + "%"}] transition-all ease-in-out duration-1000 absolute group-hover:opacity-30 opacity-0 p-10 inset-0 rounded-xl bg-[#e6a37e] -z-1`}></div> */}
                <p className="text-body text-center text-xl z-10"><strong>{s.skill}</strong></p>
                <p className="text-body text-center z-10">{s.time} years</p>
                <div className={`absolute bg-accent inset-0 inset-y-auto bottom-0 rounded-xl h-2 w-${s.percent + "/12"} float-left p-0 border-0 m-0`}></div>

              </div>
            </>

          ))
        }
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:flex lg:flex-row lg:flex-wrap grid grid-cols-2 justify-center items-center">
          {SOFT_SKILLS
            .map((s) => (
              <div className="bg-page rounded-xl mb-3 shadow-lg p-3 mx-3 w-42 hover:bg-[#7280a3] transition-colors cursor-pointer duration-500">
                <p className="text-body text-center text-sm">{s}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
