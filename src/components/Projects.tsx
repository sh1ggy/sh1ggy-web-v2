import React, { useState } from "react";

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
        desc: "A serverless peer to peer transfer platform to quickly transfer text and files between two parties seamlessly with a focus on anonymity, speed and privacy. This project is ongoing and is currently a work in progress.",
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
        desc: "An RFID card password manager with auto-login functionality using an ESP32 and a RFID card reader to detect and input the passwords based on the cards that you set up in the program.",
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
    <div className="flex flex-col items-center justify-center p-10 h-full lg:mx-14">
      <div className="flex flex-col justify-center items-center p-3 rounded-t-xl space-y-8 py-6 w-full bg-[#353840] shadow-lg">
        <h1 className="text-primary text-3xl lg:text-6xl px-3 text-center">Featured Projects</h1>
        <p className="text-body text-center px-3">These are my most significant projects indicative of my web development experience level. I balance personal up-skilling with full-time work in IT support.</p>
      </div>
      <div className="carousel rounded-b-lg shadow-inner w-full bg-card">
        {PROJECTS
          .map((p, i) => {
            return (
              // Slide tracks currently viewed project 
              <div key={i} id={`slide${i + 1}`} className="carousel-item relative w-full items-center justify-center">
                <div className="bg-card flex flex-col space-y-6 py-10 lg:px-20 px-5 justify-center items-center">
                  <h1 style={{ color: `${p.color}` }} className="text-3xl lg:text-4xl">{p.name}</h1>
                  <p className="text-body text-center">{p.desc}</p>
                  <div className="flex flex-row space-x-3">
                    {p.tags.map((t, i) => (
                      <div key={i}
                        className="lg:text-md text-xs text-body flex items-center justify-center text-center cursor-default hover:bg-[#565b68] transition-colors bg-[#55607B] rounded-lg p-2">{t}</div>
                    ))}
                  </div>
                  <a href={p.repo} className="opacity-70 hover:opacity-90 transition-opacity relative z-0 group">
                    <div className="group absolute inset-0 flex justify-center items-center z-10 opacity-50 rounded-3xl">
                      <img className="h-10 w-10 hover:visible" src="../link.svg" />
                    </div>
                    <img src={p.imagePath} />
                  </a>
                  {/* Conditionally render the buttons based on if the index is a valid slide */}
                  <div className="lg:absolute flex justify-between transform-translate-y-1/2 lg:left-5 lg:right-5">
                    <a href={`#slide${i}`} className={`${(i - 1 < 0) && "pointer-events-none cursor-not-allowed btn-disabled"} btn btn-ghost`}>❮</a>
                    <a href={`#slide${i + 2}`} className={`${(i + 1 == PROJECTS.length) && "pointer-events-none cursor-not-allowed btn-disabled"} btn btn-ghost`}>❯</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}