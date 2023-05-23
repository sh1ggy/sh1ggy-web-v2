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
          ],
        tags:
          [
            "Incident management",
            "Troubleshooting skills",
            "MySQL"
          ]
      },
      {
        jobName: "Wings Education",
        bio:
          [
            "Managed and developed PHP-based Learning Management System website using Moodle & SQL that aimed to increase staff and student productivity.",
            "Mentored cohorts of 2 - 3 IT interns every 4 months in basic IT troubleshooting, social media design and LMS maintenance skills in addition to teaching essential communication skills.",
          ],
        tags:
          [
            "SMM",
            "Adaptability",
            "MySQL"
          ]
      },
    ]
  const [selectedJob, setSelectedJob] = useState<string>(JOBS[0].jobName);
  return (
    <div className="bg-card flex flex-col space-y-6 rounded-2xl p-10 h-screen justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row space-x-6 mb-9">
          <h1 className="text-primary text-3xl lg:text-9xl">Exper</h1>
          <img className="lg:h-32 h-12" src="../placeholder.svg" />
          <h1 className="text-primary text-3xl lg:text-9xl">ence</h1>
        </div>

        <div className="flex flex-col">
          <div className="bg-[#919bb3] text-right p-2 pr-6 rounded-t-lg">{selectedJob}</div>
          <div className="flex flex-row bg-[#484D59] rounded-b-lg">
            <div className="flex flex-col text-body">
              {JOBS
                .map((b, i) => ({ b, i }))
                .filter(({ b, i }) => b.jobName != selectedJob)
                .map(({ b, i }) => {
                  return (
                    <button
                      key={i}
                      onClick={() => setSelectedJob(b.jobName)}
                      className="bg-page pr-24 pl-6 py-3 whitespace-nowrap rounded-r-lg shadow-sm text-left lg:w-56">{b.jobName}</button>
                  )
                })
              }
            </div>
            <div className="bg-container rounded-br-lg">
              <ul className="list-disc pl-12 p-8">
                {JOBS
                  .map((b) => (b))
                  .filter((b) => b.jobName == selectedJob)
                  .map((b) => (b.bio))[0]
                  .map((d, i) => (<li key={i} className="text-body">{d}</li>))
                }
                <div className="flex flex-row flex-0 justify-center m-3 space-x-3">
                  {JOBS
                    .map((b) => (b))
                    .filter((b) => b.jobName == selectedJob)
                    .map((b) => (b.tags))[0]
                    .map((d, i) => (<div key={i} className="text-body cursor-default hover:bg-[#565b68] transition-colors bg-card rounded-lg p-2">{d}</div>))
                  }
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

