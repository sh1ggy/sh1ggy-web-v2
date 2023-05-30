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
        imagePath: "../rm.png",
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
        imagePath: "../nakl.png",
        repo: "https://github.com/ProPablo/nakl"
      },
      {
        jobName: "keyDOTboard",
        desc: "An RFID card password manager using an ESP32 with auto-login made as a part of the 2023 Arduino Hackathon",
        tags:
          [
            "Tauri",
            "TypeScript",
            "Arduino"
          ],
        imagePath: "../nakl.png",
        repo: "https://github.com/sh1ggy/keyDOTboard",
      },
    ]
  return (
    <div className="flex flex-col items-center lg:h-full h-[calc(100dvh)] justify-center">
      <div className="flex flex-col justify-center items-center p-3 rounded-t-xl space-y-6 bg-[#353840]">
        <div className="flex flex-row items-center space-x-3">
          <h1 className="text-primary text-3xl lg:text-6xl">Featured Pr</h1>
          <img className="lg:h-16 h-12" src="../placeholder.svg" />
          <h1 className="text-primary text-3xl lg:text-6xl">jects</h1>
        </div>
        <p className="text-body text-center">With 3 years of web development experience my skill level is currently junior to intermediate level as I balance my personal up-skilling with full-time work in IT support.</p>
      </div>
      <div className="carousel rounded-b-lg shadow-inner w-[100%]">
        {PROJECTS
          .map((p, i) => (
            <div id={`item${i}`} className="carousel-item w-full">
              <div className="bg-card flex flex-col space-y-6 p-10 justify-center items-center">
                <h1 className="text-body text-3xl lg:text-4xl">{p.jobName}</h1>
                <p className="text-body text-center">{p.desc}</p>
                <div className="flex flex-row space-x-3">
                  {p.tags.map((t) => (
                    <div className="text-body cursor-default hover:bg-[#565b68] transition-colors bg-[#55607B] rounded-lg p-2">{t}</div>
                  ))}
                </div>
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
      </div>
    </div>
  )
}