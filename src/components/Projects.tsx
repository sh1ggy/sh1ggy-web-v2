import React from "react";

export default function Projects() {
  const PROJECTS =
    [
      {
        jobName: "RM DIGS",
        desc: "My first and most important web and app development project that was responsible for inspiring me to further my skills and pursue it as a potential career path.",
        tags:
          [
            "TypeScript",
            "React Admin",
            "React Native"
          ],
        imagePath: "../public/rm.png",
        repo: "https://github.com/ProPablo/rm_dashboard"
      },
      {
        jobName: "NAKL",
        desc: "Ongoing web development project with the goal of creating a serverless peer to peer transfer platform to quickly transfer text and files between two parties.",
        tags:
          [
            "TypeScript",
            "NextJS",
          ],
        imagePath: "../public/nakl.png",
        repo: "https://github.com/ProPablo/nakl"
      },
      // {
      //   jobName: "keyDOTboard",
      //   desc: "An RFID card password manager",
      //   tags:
      //     [
      //       "Tauri", 
      //       "TypeScript",
      //       "Arduino"
      //     ],
      //   repo: "https://github.com/sh1ggy/keyDOTboard",
      // },
    ]
  const HACKATHONS =
    [
      {
        hack: "Casual Earnings",
        date: "17-11-2019",
        event: "Mobile App Development for Start-Ups",
        desc: "Wage calculator & rostering application concept",
        eventLink: "https://www.eventbrite.com.au/e/brisbanes-mobile-app-hackathon-tickets-72067400535#",
        repo: "https://github.com/sh1ggy/hackathon19-TDRJKM-android",
        tags:
          [
            "Android Studio",
            "Adobe XD",
          ],
      },
      {
        hack: "COVID Toolkit",
        date: "18-10-2020",
        event: "Hack Quarantine",
        desc: "A COVID Toolkit including a country statistics, a hand-washing timer and FAQ section.",
        eventLink: "https://hackquarantine.devpost.com/",
        repo: "https://github.com/sh1ggy/COVIDToolkit",
        tags:
          [
            "Android Studio",
          ],
      },
      {
        hack: "Casual Earnings",
        date: "17-11-2019",
        event: "Mobile App Development for Start-Ups",
        desc: "Wage calculator & rostering application concept",
        eventLink: "https://www.eventbrite.com.au/e/brisbanes-mobile-app-hackathon-tickets-72067400535#",
        repo: "https://github.com/sh1ggy/hackathon19-TDRJKM-android",
        tags:
          [
            "Android Studio",
            "Adobe XD",
          ],
      },
      {
        hack: "Casual Earnings",
        date: "17-11-2019",
        event: "Mobile App Development for Start-Ups",
        desc: "Wage calculator & rostering application concept",
        eventLink: "https://www.eventbrite.com.au/e/brisbanes-mobile-app-hackathon-tickets-72067400535#",
        repo: "https://github.com/sh1ggy/hackathon19-TDRJKM-android",
        tags:
          [
            "Android Studio",
            "Adobe XD",
          ],
      },
    ]
  return (
    <div className="flex flex-col items-center lg:h-screen h-[calc(100dvh)] justify-center">
      <div className="carousel rounded-box w-[100%] shadow-inner">
        <div id="item1" className="carousel-item w-full">
          <div>
            <div className="bg-card flex flex-col space-y-6 p-10 justify-center items-center h-full">
              <div className="flex flex-row items-center space-x-3">
                <h1 className="text-primary text-3xl lg:text-6xl">Pr</h1>
                <img className="lg:h-16 h-12" src="../placeholder.svg" />
                <h1 className="text-primary text-3xl lg:text-6xl">jects</h1>
              </div>
              <h2 className="text-accent text-md lg:text-lg"><strong>front-end / hackathons</strong></h2>
              <p className="text-body text-center">With 3 years of web development experience my skill level is currently junior to intermediate level as I balance my personal up-skilling with full-time work in IT support.</p>
            </div>
          </div>
        </div>
        {PROJECTS
          .map((p, i) => (
            <div id={`item${i}`} className="carousel-item w-full">
              <div className="bg-card flex flex-col space-y-6 p-10 justify-center items-center">
                <h1 className="text-primary text-3xl lg:text-6xl">{p.jobName}</h1>
                <div className="flex flex-row space-x-3">
                  {p.tags.map((t) => (
                    <div className="text-accent cursor-default hover:bg-[#565b68] transition-colors bg-[#55607B] rounded-lg p-2">{t}</div>
                  ))}
                </div>
                <p className="text-body text-center">{p.desc}</p>
                <a href={p.repo} className="opacity-70 hover:opacity-90 transition-opacity relative z-0 group">
                  <div className="group absolute inset-0 flex justify-center items-center z-10 opacity-50 rounded-3xl">
                    <img className="h-10 w-10 hover:visible" src="../link.svg" />
                  </div>
                  <img src={p.imagePath} />
                </a>
              </div>
            </div>
          ))
        }
        <div id={`item${PROJECTS.length + 1}`} className="carousel-item flex">
          <div className="bg-card flex flex-col flex-grow-0 space-y-6 items-center justify-center p-10">
            <div className="flex flex-col items-center justify-center lg:w-[70vw] w-[60vw]">
              <h1 className="text-primary text-3xl lg:text-6xl">Other</h1>
              <p className="text-body text-center">Whenever I get the chance to, I love participating in hackathons and it's definitely contributed a lot to my passion for programming and built my desire to continue working on projects I am passionate about.</p>
            </div>
            {/* TIMELINE */}
            <div className="lg:w-[70vw] w-[60vw] flex flex-col sm:flex-shrink bg-[#61697c] rounded-2xl m-10 overflow-x-scroll h-full">
              <ol className="sm:flex">
                {HACKATHONS
                  .map((h) => (
                    <li className="relative mb-6 sm:mb-0 p-5 justify-center items-center min-w-[40%]">
                      <div className="bg-card shadow-md p-6 rounded-2xl">
                        <div className="mt-3">
                          <div className="flex flex-row">
                            <a href={h.eventLink} className="hover:text-link transition-colors">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{h.event}</h3>
                            </a>
                          </div>
                          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{h.date}</time>
                          <p className="text-body mb-2 font-normal text-gray-500 dark:text-gray-400 break-words">{h.desc}</p>
                          <div className="flex flex-row space-x-3 lg:bottom-0 lg:inset-x-0">
                            <img src="../github.svg" className="h-10 w-10 mr-3" />
                            {h.tags.map((t) => (
                              <div className="text-body cursor-default items-center justify-center flex bg-[#565b68] transition-colors hover:bg-[#777d8e] rounded-lg p-2">{t}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ol>
            </div>
            <div className="text-accent cursor-default hover:bg-[#565b68] transition-colors bg-[#55607B] rounded-lg p-2">Count: 1</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row space-x-4 my-3 w-[100%] text-center justify-center items-center">
        <a href="#item1" className="text-card flex items-center justify-center w-1/3 bg-primary p-3 rounded-2xl cursor-pointer hover:bg-[#bfe8bd] transition-colors h-full">Redland Museum</a>
        <a href="#item2" className="text-card flex items-center justify-center w-1/3 bg-primary p-3 rounded-2xl cursor-pointer hover:bg-[#bfe8bd] transition-colors h-full">NAKL</a>
        <a href="#item3" className="text-card flex items-center justify-center w-1/3 bg-primary p-3 rounded-2xl cursor-pointer hover:bg-[#bfe8bd] transition-colors h-full">Hackathons</a>
      </div>
    </div>
  )
}