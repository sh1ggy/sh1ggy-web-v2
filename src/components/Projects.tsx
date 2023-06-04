import React from "react";

export default function Projects() {
  const PROJECTS =
    [
      {
        name: "RM DIGS",
        desc: "A fully deployed museum navigation system with a staff-facing admin portal to populate & structure data for the user-facing navigation app made for Redland Museum.",
        tags:
          [
            "TypeScript",
            "React Admin",
            "React Native"
          ],
        imagePath: "../rm.png",
        repo: "https://github.com/ProPablo/rm_dashboard",
        color: "#F3E1C7",
      },
      {
        name: "NAKL",
        desc: "A serverless peer to peer transfer platform to quickly transfer text and files between two parties seamlessly. This project is ongoing and is currently a work in progress.",
        tags:
          [
            "TypeScript",
            "NextJS",
          ],
        imagePath: "../nakl.png",
        repo: "https://github.com/ProPablo/nakl",
        color: "#BBB7CB",
      },
      {
        name: "keyDOTboard",
        desc: "An RFID card password manager with auto-login functionality using an ESP32 and a RFID card reader to detect and input the cards that you set up in the program.",
        tags:
          [
            "Tauri",
            "TypeScript",
            "Arduino"
          ],
        imagePath: "../keydot.png",
        repo: "https://github.com/sh1ggy/keyDOTboard",
        color: "#a1adc5",
      },
    ]
  return (
    <div className="flex flex-col items-center lg:h-full h-[calc(100dvh)] justify-center rounded-xl">
      <div className="flex flex-col justify-center items-center p-3 rounded-t-xl space-y-6 w-full bg-[#353840] shadow-lg">
        <h1 className="text-primary text-3xl lg:text-6xl px-3">Featured Projects</h1>
        <p className="text-body text-center px-3">With 3 years of web development experience my skill level is currently junior level as I balance my personal up-skilling in web development and project work with full-time work in IT support.</p>
      </div>
      <div className="carousel rounded-b-lg shadow-inner w-full">
        {PROJECTS
          .map((p, i) => (
            <div key={i} id={`item${i}`} className="carousel-item relative w-full">
              <div className="bg-card flex flex-col space-y-6 p-10 justify-center items-center">
                <h1 className={`text-3xl ${"text-[" + p.color + "]"} lg:text-4xl`}>{p.name}</h1>
                <p className="text-body text-center">{p.desc}</p>
                <div className="flex flex-row space-x-3">
                  {p.tags.map((t, i) => (
                    <div key={i} 
                    className="text-body flex items-center justify-center text-center cursor-default hover:bg-[#565b68] transition-colors bg-[#55607B] rounded-lg p-2">{t}</div>
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