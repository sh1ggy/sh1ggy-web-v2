import { useState } from "react"

export default function Experience() {
  const JOBS =
    [
      {
        jobName: "Sonic IT",
        date: "May 2022 - Current",
        bio:
          [
            "Engagement with internal teams & external vendors for critical incident management and resolution.",
            "Maintenance of team-wide knowledge articles as a part of a collaborative effort to document the support process for 30+ different pieces of software.",
            "Responsible for troubleshooting medical software supported by Sonic IT to resolve tickets raised by medical sites across Australia, achieving an average of 6+ ticket resolutions per day.",
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
        date: "August 2021 - May 2022",
        bio:
          [
            "Managed and developed PHP-based Learning Management System website using Moodle & SQL that aimed to increase staff and student productivity.",
            "Mentored cohorts of 2 - 3 IT interns every 4 months in basic IT troubleshooting, social media design and LMS maintenance skills in addition to teaching essential communication skills.",
            "Composed major pieces of internal company documentation that the company still uses today.",
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
    <div className="bg-card flex flex-col space-y-6 rounded-2xl p-10 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row items-center space-x-3 mb-12">
          <h1 className="text-primary text-3xl lg:text-6xl">Exper</h1>
          <img className="lg:h-16 h-12" src="../placeholder.svg" />
          <h1 className="text-primary text-3xl lg:text-6xl">ence</h1>
          <p className="text-body text-right">Most of my most recent job experience has been in the IT Support space, with a focus on documentation, communication and adaptability.</p>
        </div>

        <div className="flex flex-col mb-12">
          <div className="lg:flex lg:flex-col bg-[#919bb3] text-card text-right p-2 pr-6 rounded-t-lg">
            <strong>{selectedJob}</strong>
            <p className="italic">
              {JOBS
                .map((b, i) => ({ b, i }))
                .filter(({ b, i }) => b.jobName == selectedJob).map(({ b, i }) => (b.date))
              }
            </p>

          </div>

          <div className="flex flex-row bg-[#484D59] rounded-b-lg">
            <div className="flex flex-col text-body lg:w-auto">
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
            <div className="flex rounded-br-lg justify-center">
              <ul className="lg:relative list-disc pl-12 p-8">
                {JOBS
                  .map((b) => (b))
                  .filter((b) => b.jobName == selectedJob)
                  .map((b) => (b.bio))[0]
                  .map((d, i) => (<li key={i} className="text-body break-inside-auto">{d}</li>))
                }
                <div className="flex flex-col lg:flex-row justify-center lg:bottom-0 lg:inset-x-0 space-x-3 mt-6">
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

