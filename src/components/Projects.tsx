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
  return (
    <div className="flex flex-col items-center lg:h-screen h-[calc(100dvh)] justify-center">
      <div className="carousel rounded-box w-full">
        <div id="item1" className="carousel-item w-full">
          <div>
            <div className="bg-card flex flex-col space-y-6 rounded-2xl p-10 justify-center items-center h-full">
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
            <div id={`#item${i}`} className="carousel-item w-full">
              <div className="bg-card flex flex-col space-y-6 rounded-2xl p-10 justify-center items-center">
                <h1 className="text-primary text-3xl lg:text-6xl">{p.jobName}</h1>
                <div className="flex flex-row space-x-3">
                  {p.tags.map((t) => (
                    <div className="text-accent cursor-default hover:bg-[#565b68] transition-colors bg-[#55607B] rounded-lg p-2">{t}</div>
                  ))}
                </div>
                <p className="text-body text-center">{p.desc}</p>
                <a href={p.repo} className="hover:opacity-60 transition-opacity relative z-0 group">
                  <div className="group absolute inset-0 flex justify-center items-center z-10 opacity-50 rounded-3xl">
                    <img className="h-10 w-10 hover:visible" src="../link.svg" />
                  </div>
                  <img src={p.imagePath} />
                </a>
              </div>
            </div>
          ))
        }
      </div>
      <div className="flex flex-row space-x-4 my-3 w-full text-center justify-center items-center">
        <a href="#item1" className="text-card flex items-center justify-center w-1/3 bg-primary p-3 rounded-2xl cursor-pointer hover:bg-[#bfe8bd] transition-colors h-full">Redland Museum</a>
        <a href="#item2" className="text-card flex items-center justify-center w-1/3 bg-primary p-3 rounded-2xl cursor-pointer hover:bg-[#bfe8bd] transition-colors h-full">NAKL</a>
        <a href="#item3" className="text-card flex items-center justify-center w-1/3 bg-primary p-3 rounded-2xl cursor-pointer hover:bg-[#bfe8bd] transition-colors h-full">Hackathons</a>
      </div>
    </div>
  )
}