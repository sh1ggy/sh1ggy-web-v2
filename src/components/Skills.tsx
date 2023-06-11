export default function Skills() {
  const HARD_SKILLS = [
    { skill: "TypeScript", time: 2, percent: 60, },
    { skill: "React", time: 3, percent: 60, },
    { skill: "React Native", time: 3, percent: 70, },
    { skill: "CSS", time: 3, percent: 80, },
    { skill: "Tailwind", time: 1, percent: 70, },
    { skill: "MySQL", time: 3, percent: 70, },
    { skill: "Figma", time: 1, percent: 60, },
  ]
  const SOFT_SKILLS = [
    "Documentation",
    "Wireframing",
    "Written Communication",
    "Systems Diagramming",
    "Incident Management",
  ]
  return (
    <div className="bg-card shadow-lg flex flex-col space-y-12 flex-wrap rounded-2xl p-10 lg:h-[calc(screen-24px)] flex-grow justify-center items-center select-none">
      <h1 className="text-primary text-3xl lg:text-6xl">Skills</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {HARD_SKILLS
          .map((s, i) => {
            const x = `w-[${s.percent}%]`
            console.group(x)
            return (
              <div key={i} className="bg-[#444c62] group relative rounded-xl shadow-lg lg:p-6 p-3 transition-colors ease-in-out duration-1000 hover:bg-[#5e6578] cursor-pointer w-full">
                <p className="text-body text-center text-xl z-10"><strong>{s.skill}</strong></p>
                <p className="text-body text-center z-10">{s.time} years</p>
                <div style={{width: `${s.percent}%`}} className="absolute bg-accent inset-0 inset-y-auto bottom-0 rounded-xl h-2 float-left p-0 border-0 m-0"></div>
              </div>
            )
          })
        }
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="lg:flex lg:flex-row lg:flex-wrap grid grid-cols-2 justify-center items-center">
          {SOFT_SKILLS
            .map((s, i) => (
              <div key={i} className="bg-page rounded-xl mb-3 shadow-lg p-3 mx-3 w-42 hover:bg-[#7280a3] transition-colors cursor-pointer duration-500">
                <p className="text-body text-center text-sm">{s}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
