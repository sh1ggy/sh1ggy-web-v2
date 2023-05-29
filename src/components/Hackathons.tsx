import { useState } from "react"

export default function Hackathons() {
  const HACKATHONS =
    [
      {
        hack: "Bingo Butler",
        date: "12-09-2021",
        event: "UQCS 2021 Hackathon",
        desc: "Discord bot to generate a P2P speedrunning lockout game",
        eventLink: "https://sh-ggy.itch.io/parity",
        repo: "https://github.com/ProPablo/parity-GMTK",
        tags:
          [
            "DiscordJS",
            "NextJS",
          ],
      },
      {
        hack: "Parity",
        date: "14-06-2021",
        event: "GMTK 2021 Game Jam",
        desc: "Bullet hell inventory management sim",
        eventLink: "https://sh-ggy.itch.io/parity",
        repo: "https://github.com/ProPablo/parity-GMTK",
        tags:
          [
            "Godot",
            "Asesprite",
          ],
      },
      {
        hack: "H34RT 4TT4CK",
        date: "11-04-2020",
        event: "UCQS 2020 Hackathon",
        desc: "Cookie Clicker inspired idle game and rhythm game hybrid",
        eventLink: "https://www.youtube.com/watch?v=g_abZ3xN0z0&t=2s&ab_channel=UQComputingSociety",
        repo: "https://github.com/KieranMDolan/UQCS-Hackathon-2020",
        tags:
          [
            "React",
            "Firebase",
          ],
      },
      {
        hack: "COVID Toolkit",
        date: "18-10-2020",
        event: "Hack Quarantine",
        desc: "An app with COVID country stats, hand-washing timer & FAQ",
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
        event: "Mobile App Hackathon",
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
    <div className="flex flex-col space-y-6 items-center justify-center p-10">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex space-x-3">
          <h1 className="text-primary text-3xl lg:text-6xl">Other Pr</h1>
          <img className="lg:h-16 h-12" src="../placeholder.svg" />
          <h1 className="text-primary text-3xl lg:text-6xl">jects</h1>
        </div>
        <div className="text-accent cursor-default hover:bg-[#565b68] transition-colors bg-card rounded-lg p-2">Count: {HACKATHONS.length}</div>
        <p className="text-body text-center">Whenever I get the chance to, I love participating in hackathons and it's definitely contributed a lot to my passion for programming and built my desire to continue working on projects I am passionate about.</p>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-3 sm:flex sm:flex-col rounded-2xl relative">
        {HACKATHONS
          .map((h) => (
            <div className="bg-card shadow-md p-6 rounded-md justify-center items-end hover:scale-95 transition-transform">
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <a href={h.eventLink} className="flex hover:text-link transition-colors items-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{h.event}</h3>
                    {/* <img src="../link.svg" className="h-10 w-10"/> */}
                  </a>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{h.date}</time>
                </div>
                <a href={h.repo} className="hover:text-link hover:scale-110 transition-transform">
                  <img src="../github.svg" className="h-10 w-10 ml-auto"/>
                </a>
              </div>
              <p className="text-md font-semibold text-gray-900 dark:text-white"><strong>{h.hack}</strong></p>
              <p className="text-body mb-2 font-normal text-gray-500 dark:text-gray-400 break-words">{h.desc}</p>
              <div className="flex flex-row flex-0 space-x-3 justify-end">
                {h.tags.map((t) => (
                  <div className="text-body cursor-default items-center justify-center flex bg-[#565b68] transition-colors hover:bg-[#777d8e] rounded-lg p-2">{t}</div>
                ))}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
