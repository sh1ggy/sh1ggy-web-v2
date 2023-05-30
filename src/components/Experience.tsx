import { useEffect, useState } from "react"
import sonic from "../sonic.svg"

export default function Experience() {
  const JOBS =
    [
      {
        jobName: "Systems Support @ Sonic IT",
        date: "May 2022 - Current",
        bio: "Responsible for incident management that involves troubleshooting medical software supported by Sonic IT to resolve tickets raised by medical sites across Australia.",
        tags:
          [
            "MySQL",
            "Incident management",
            "Troubleshooting",
            "Documentation",
            "Multitasking",
          ],
        imagePath: "../sonic.svg"
      },
      {
        jobName: "IT Supervisor & SM Designer @ Wings Education",
        date: "August 2021 - May 2022",
        bio: "Led development on an LMS using Moodle (PHP) & SQL, managed company social media platforms and posts as well as composed major pieces of internal documentation.",
        tags:
          [
            "MySQL",
            "PHP",
            "Design",
            "Training",
            "Project management",
            "Adaptability",
          ],
        imagePath: "../wings.svg"
      },
    ]
  const [selectedJob, setSelectedJob] = useState<string>(JOBS[0].jobName);

  return (
    <div className=" flex flex-col space-y-6 rounded-2xl p-10 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row mb-12 items-center lg:space-x-10">
          <div className="flex space-x-3">
            <h1 className="text-primary text-3xl lg:text-6xl">Exper</h1>
            <img className="lg:h-16 h-12" src="../placeholder.svg" />
            <h1 className="text-primary text-3xl lg:text-6xl">ence</h1>
          </div>
          <p className="text-body lg:text-right text-center">Most of my most recent job experience has been in the IT Support space, with a focus on documentation, communication and adaptability.</p>
        </div>
        {/* Expandable Jobs */}
        <div className="space-y-3">
          {JOBS
            .map((j, i) => (
              <div key={i} className='collapse collapse-arrow bg-[#484D59] shadow-xl rounded-xl lg:w-full items-center justify-center transition-transform'>
                <input type="checkbox" />
                <div className="collapse-title font-medium flex flex-row bg-card shadow-sm rounded-xl">
                  <p>{j.jobName}</p>
                  <p className="ml-auto">{j.date}</p>
                </div>
                <div className="collapse-content">
                  <div className="flex flex-col lg:flex-row justify-center items-center h-full lg:bottom-0 lg:inset-x-0 space-x-3">
                    <div className="flex flex-col rounded-br-lg justify-center">
                      <div className="flex">
                        <ul className="lg:relative list-disc pl-12 p-8">
                          {j.bio}
                        </ul>
                        <img src={j.imagePath} />
                      </div>
                      <div className="flex flex-row items-center space-x-3 justify-center">
                        {j.tags.map((t, i) => (<div key={i} className="text-body cursor-default hover:bg-[#565b68] transition-colors bg-card rounded-xl p-2">{t}</div>))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

