import { useState } from "react"

type Project = {
  hack: string,
  date: string,
  event: string,
  desc: string,
  eventLink: string,
  repo: string,
  tags: string[],
  imagePath?: string,
}

export default function Hackathons() {
  const HACKATHONS: Project[] =
    [
      {
        hack: "scribbly",
        date: "16-07-2023",
        event: "Code Network 2023 Hackathon",
        desc: "1v1 Google QuickDraw clone w ML scoring",
        eventLink: "https://www.eventbrite.com.au/e/code-network-winter-hackathon-2023-tickets-656620267897",
        repo: "https://github.com/sh1ggy/scribbly",
        tags:
          [
            "NextJS13",
            "Rust",
            "WS",
          ],
      },
      {
        hack: "keyDOTboard",
        date: "22-04-2023",
        event: "Arduino 2023 Hackathon",
        desc: "RFID card password manager with auto-login",
        eventLink: "https://events.humanitix.com/arduino-hackathon-2023",
        repo: "https://github.com/sh1ggy/keyDOTboard",
        tags:
          [
            "Tauri",
            "NextJS",
            "ESP32",
          ],
        imagePath: "../keydot.png",
      },
      {
        hack: "NAKL",
        date: "26-08-2022",
        event: "UQCS 2022 Hackathon",
        desc: "P2P chat & file transfer app & website",
        eventLink: "https://uqcs.org/competitions/hackathon-2022/",
        repo: "https://github.com/ProPablo/naklw",
        tags:
          [
            "React",
            "React Native",
          ],
        imagePath: "../key.png",
      },
      {
        hack: "simIO",
        date: "15-07-2022",
        event: "CN 2022 Hackathon",
        desc: "Wildlife management sim and card game hybrid",
        eventLink: "https://www.eventbrite.com.au/e/winter-hackathon-2022-tickets-373983062407",
        repo: "https://github.com/ProPablo/simio",
        tags:
          [
            "Unity",
          ],
        imagePath: "../key.png",
      },
      {
        hack: "Forget me BOT",
        date: "08-04-2022",
        event: "Arduino 2022 Hackathon",
        desc: "Reminder Arduino bot with companion app",
        eventLink: "https://www.eventbrite.com.au/e/arduino-hackathon-tickets-41459224657#",
        repo: "https://github.com/sh1ggy/reminder-app",
        tags:
          [
            "React Native",
            "Arduino",
          ],
        imagePath: "../key.png",
      },
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
        imagePath: "../key.png",
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
        imagePath: "../key.png",
      },
      {
        hack: "H34RT 4TT4CK",
        date: "11-04-2020",
        event: "UCQS 2020 Hackathon",
        desc: "Cookie Clicker inspired idle game and rhythm game hybrid game built in the web browser",
        eventLink: "https://www.youtube.com/watch?v=g_abZ3xN0z0&t=2s&ab_channel=UQComputingSociety",
        repo: "https://github.com/KieranMDolan/UQCS-Hackathon-2020",
        tags:
          [
            "React",
            "Firebase",
          ],
        imagePath: "../key.png",
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
        imagePath: "../key.png",
      },
      {
        hack: "Casual Earnings",
        date: "17-11-2019",
        event: "Mobile App Hackathon",
        desc: "Wage calculator & rostering application concept made in accordance to specifications made by a start-up",
        eventLink: "https://www.eventbrite.com.au/e/brisbanes-mobile-app-hackathon-tickets-72067400535#",
        repo: "https://github.com/sh1ggy/hackathon19-TDRJKM-android",
        tags:
          [
            "Android Studio",
            "Adobe XD",
          ],
        imagePath: "../key.png",
      },
    ]
  return (
    <div className="flex flex-col space-y-6 p-10 lg:pb-96 lg:mx-14">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-primary drop-shadow-lg text-3xl lg:text-6xl">Other Projects</h1>
        <p className="text-body drop-shadow-md text-center">Whenever I get the chance to, I love participating in hackathons and it's definitely contributed a lot to my passion for programming and built my desire to continue working on projects I am passionate about.</p>
        <div className="text-accent cursor-default hover:bg-[#565b68] transition-colors bg-card rounded-lg p-2">Count: {HACKATHONS.length}</div>
      </div>
      <div className="lg:grid lg:grid-cols-3 gap-3 lg:space-y-0 space-y-3 flex flex-col rounded-2xl relative sm:mb-96">
        {HACKATHONS
          .map((h, i) => (
            <div key={i} className="flex flex-col bg-card shadow-md p-6 rounded-md justify-start hover:scale-95 transition-transform space-y-3">
              <div className="flex flex-row">
                <div className="flex flex-col w-full">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white"><strong>{h.hack}</strong></h3>
                  <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{h.date}</time>
                </div>
                <a href={h.repo} className="hover:text-link hover:scale-110 transition-transform">
                  <img src="../github.svg" className="h-10 w-10 ml-auto" />
                </a>
              </div>
              {/* <img src={h.imagePath} className="w-full" /> */}
              <div className="flex flex-col h-full">
                <a href={h.eventLink} className="flex mb-3 hover:text-link space-x-1 transition-colors items-center">
                  <img src="../bluelink.svg" className="h-5 w-5" />
                  <p className="text-md font-semibold text-gray-900 dark:text-white">{h.event}</p>
                </a>
                <p className="text-body font-normal mb-3 text-gray-500 dark:text-gray-400 break-words">{h.desc}</p>
                <div className="flex space-x-3 mt-auto">
                  {h.tags.map((t, i) => (
                    <div key={i}
                      className="text-body cursor-default items-center justify-center flex bg-[#565b68] transition-colors hover:bg-[#777d8e] rounded-lg p-2">{t}</div>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
