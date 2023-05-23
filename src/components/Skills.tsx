export default function Skills() {
  const SKILLS = [
    { skill: "TypeScript", time: 2 },
    { skill: "React", time: 2 },
    { skill: "CSS", time: 1 },
    { skill: "Tailwind", time: 1 },
    { skill: "MySQL", time: 3 },
    { skill: "Figma", time: 1 },
  ]
  return (
    <div className="bg-card flex flex-col space-y-12 flex-wrap rounded-2xl p-10 h-screen justify-center items-center">
      <h1 className="text-primary text-3xl lg:text-8xl">Skills</h1>
      <div className="grid grid-cols-3 gap-12">
        {SKILLS
          .map((s) => (
            <div className="bg-page rounded-xl p-6 mx-6 w-52">
              <p className="text-accent text-center text-xl"><strong>{s.skill}</strong></p>
              <p className="text-body text-center">{s.time} years</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}
