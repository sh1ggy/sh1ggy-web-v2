export default function Skills() {
  const HARD_SKILLS = [
    { skill: "TypeScript", time: 2 },
    { skill: "React", time: 2 },
    { skill: "CSS", time: 1 },
    { skill: "Tailwind", time: 1 },
    { skill: "MySQL", time: 3 },
    { skill: "Figma", time: 1 },
  ]
  const SOFT_SKILLS = [
    "Documentation",
    "Wireframing",
    "Written Communication",
    "Systems Diagramming",
    "Incident Management",
  ]
  return (
    <div className="bg-card flex flex-col space-y-12 flex-wrap rounded-2xl p-10 lg:h-[calc(screen-24px)] flex-grow justify-center items-center select-none">
      <h1 className="text-primary text-3xl lg:text-6xl">Skills</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
        {HARD_SKILLS
          .map((s) => (
            <div className="bg-page rounded-xl shadow-lg lg:p-6 lg:mx-6 lg:w-52 p-3 hover:bg-[#7280a3] transition-colors cursor-pointer">
              <p className="text-accent text-center text-xl"><strong>{s.skill}</strong></p>
              <p className="text-body text-center">{s.time} years</p>
            </div>
          ))
        }
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary text-md lg:text-4xl mb-6">Soft Skills</h1>
        <div className="lg:flex lg:flex-row lg:flex-wrap grid grid-cols-2 justify-center items-center">
          {SOFT_SKILLS
            .map((s) => (
              <div className="bg-page rounded-xl mb-3 shadow-lg p-3 mx-3 w-42 hover:bg-[#7280a3] transition-colors cursor-pointer">
                <p className="text-body text-center text-sm"><strong>{s}</strong></p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
