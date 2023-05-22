import { useState } from "react"

export default function Experience() {
  const JOBS =
    [
      {
        jobName: "Sonic IT",
        bio:
          [
            "Responsible for engaging with internal Sonic IT teams & external vendors via thorough communication to assist with incident resolution and management of critical incidents.",
            "Maintenance of case-by-case incident documentation and team-wide knowledge articles as a part of a collaborative effort to document the support process for 30+ different pieces of software.",
          ]
      },
      {
        jobName: "Wings Education",
        bio:
          [
            "Managed and developed PHP-based Learning Management System website using Moodle & SQL that aimed to increase staff and student productivity.",
            "Mentored cohorts of 2 - 3 IT interns every 4 months in basic IT troubleshooting, social media design and LMS maintenance skills in addition to teaching essential communication skills.",
          ]
      },
    ]
  const [selectedJob, setSelectedJob] = useState<string>(JOBS[0].jobName);
  return (
    <div className="bg-card flex flex-col space-y-6 rounded-2xl p-10 h-screen w-full justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row space-x-6 mb-9">
          <h1 className="text-primary text-3xl lg:text-9xl">Exper</h1>
          <img className="lg:h-32 h-12" src="../placeholder.svg" />
          <h1 className="text-primary text-3xl lg:text-9xl">ence</h1>
        </div>

        <div className="flex flex-col">
          <div className="bg-primary text-right p-2 pr-6 rounded-t-lg">{selectedJob}</div>
          <div className="flex flex-row bg-[#838383] rounded-b-lg">
            <div className="flex flex-col rounded-br-lg text-body">
              {JOBS
                .map((b, i) => ({ b, i }))
                .filter(({ b, i }) => b.jobName != selectedJob)
                .map(({ b, i }) => {
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedJob(b.jobName)}
                      className="bg-page pr-24 pl-6 py-3 whitespace-nowrap text-left w-30">{b.jobName}</button>
                  )
                })
              }
            </div>
            <div className="bg-container rounded-br-lg">
              <ul className="list-disc pl-12 p-8">
                {JOBS
                  .map((b) => (b))
                  .filter((b) => b.jobName == selectedJob)
                  .map((b) => b.bio)
                  .map((d) => d)[0]
                  .map((d, i) => (<li key={i} className="text-body">{d}</li>))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

