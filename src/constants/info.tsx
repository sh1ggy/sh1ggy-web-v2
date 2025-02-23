const ICON_SIZE = 17;

import { Badge } from "@/components/ui/badge";
import type { HardSkill, Job, Project, SoftSkill } from "@/types";
import { AiOutlineDotNet } from "react-icons/ai";
import { FaAndroid, FaBook, FaCss3, FaDatabase, FaDiscord, FaExchangeAlt, FaFigma, FaPen, FaProjectDiagram, FaReact, FaUnity, FaUsers } from "react-icons/fa";
import { MdDesignServices, MdOutlineAppShortcut } from "react-icons/md";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiArduino, SiDiagramsdotnet, SiFirebase, SiGodotengine, SiNextdotjs, SiRust, SiTauri, SiTypescript } from "react-icons/si";
import { TbBrandReactNative, TbBrandTypescript } from "react-icons/tb";

export const PROJECTS: Project[] = [
  {
    fullName: "PUGB",
    name: "Photo Battle Royale",
    type: "file",
    description:
      "Battle royale where you take other players out of the game by taking a photo of other contestants",
    tags: [
      <TbBrandReactNative size={ICON_SIZE} />,
      <SiRust size={ICON_SIZE} />,
      <Badge variant="outline">OAuth</Badge>,
    ],
    hackathonDetails: {
      event: "UQCS Hackathon",
      date: "25-08-2023",
      eventLink: "https://uqcs.org/competitions/hackathon-2023/",
    },
    images: ["/hackathons/pugb.png"],
    repo: "https://github.com/sh1ggy/pugb",
    colour: "#5462eb",
  },
  {
    fullName: "scribbly",
    name: "Google QuickDraw AI 1v1",
    type: "file",
    description: "1v1 Google QuickDraw clone w ML scoring",
    hackathonDetails: {
      event: "Code Network Hackathon",
      date: "16-07-2023",
      eventLink:
        "https://www.eventbrite.com.au/e/code-network-winter-hackathon-2023-tickets-656620267897",
    },
    repo: "https://github.com/sh1ggy/scribbly",
    tags: [
      <SiNextdotjs size={ICON_SIZE} />,
      <SiRust size={ICON_SIZE} />,
      <Badge variant="outline">Web Sockets</Badge>,
    ],
    images: ["/hackathons/scribbly.png"],
  },
  {
    name: "RFID Password Manager",
    fullName: "keyDOTboard",
    type: "file",
    description:
      "An RFID card password manager flashed onto ESP32 and interfaced with a Tauri web app.",
    hackathonDetails: {
      event: "Arduino Hackathon",
      date: "21-04-2023",
      eventLink:
        "https://www.eventbrite.com.au/e/code-network-winter-hackathon-2023-tickets-656620267897",
    },
    tags: [
      <SiTauri size={ICON_SIZE} />,
      <SiTypescript size={ICON_SIZE} />,
      <SiArduino size={ICON_SIZE} />,
      <SiRust size={ICON_SIZE} />,
    ],
    images: ["/hackathons/keydot.png"],
    repo: "https://github.com/sh1ggy/keyDOTboard",
    colour: "#a1adc5",
  },
  {
    name: "P2P Chat & File Transfer",
    fullName: "NAKL",
    type: "file",
    description: "P2P chat & file transfer app & website",
    hackathonDetails: {
      date: "26-08-2022",
      event: "UQCS Hackathon",
      eventLink: "https://uqcs.org/competitions/hackathon-2022/",
    },
    repo: "https://github.com/ProPablo/nakl",
    tags: [
      <FaReact size={ICON_SIZE} />,
      <TbBrandReactNative size={ICON_SIZE} />,
    ],
    images: ["/hackathons/nakl.png"],
  },
  {
    name: "Wildlife Management Sim",
    fullName: "simIO",
    type: "file",
    description: "Wildlife management sim and card game hybrid",
    hackathonDetails: {
      date: "15-07-2022",
      event: "Code Network Hackathon",
      eventLink:
        "https://www.eventbrite.com.au/e/winter-hackathon-2022-tickets-373983062407",
    },
    repo: "https://github.com/ProPablo/simio",
    tags: [<FaUnity size={ICON_SIZE} />],
    images: ["/hackathons/simio.png"],
  },
  {
    name: "Reminder Bot",
    fullName: "Forget me BOT",
    type: "file",
    hackathonDetails: {
      date: "08-04-2022",
      event: "Arduino Hackathon",
      eventLink:
        "https://www.eventbrite.com.au/e/arduino-hackathon-tickets-41459224657#",
    },
    description: "Reminder Arduino bot with companion app",
    repo: "https://github.com/sh1ggy/reminder-app",
    tags: [
      <TbBrandReactNative size={ICON_SIZE} />,
      <SiArduino size={ICON_SIZE} />,
    ],
    images: ["/hackathons/forget.png"],
  },
  {
    name: "Lockout Game Discord Bot",
    fullName: "Bingo Butler",
    type: "file",
    hackathonDetails: {
      date: "12-09-2021",
      event: "UQCS Hackathon",
      eventLink: "https://sh-ggy.itch.io/parity",
    },
    description: "Discord bot to generate a P2P speedrunning lockout game",
    repo: "https://github.com/ProPablo/parity-GMTK",
    tags: [<FaDiscord size={ICON_SIZE} />, <SiNextdotjs size={ICON_SIZE} />],
    images: ["/hackathons/bingo.png"],
  },
  {
    name: "Inventory Management Bullet Hell",
    fullName: "Parity",
    type: "file",
    hackathonDetails: {
      date: "14-06-2021",
      event: "GMTK Game Jam",
      eventLink: "https://sh-ggy.itch.io/parity",
    },
    description: "Bullet hell inventory management sim",
    repo: "https://github.com/ProPablo/parity-GMTK",
    tags: [
      <SiGodotengine size={ICON_SIZE} />,
      <Badge variant="outline">Asesprite</Badge>,
    ],
    images: ["/hackathons/parity.png"],
  },
  {
    name: "Idle-Rhythm Game Hybrid",
    fullName: "H34RT 4TT4CK",
    type: "file",
    description:
      "Cookie Clicker inspired idle game and rhythm game hybrid game built in the web browser",
    hackathonDetails: {
      date: "11-04-2020",
      event: "UCQS Hackathon",
      eventLink:
        "https://www.youtube.com/watch?v=g_abZ3xN0z0&t=2s&ab_channel=UQComputingSociety",
    },
    repo: "https://github.com/KieranMDolan/UQCS-Hackathon-2020",
    tags: [<FaReact size={ICON_SIZE} />, <SiFirebase size={ICON_SIZE} />],
    images: ["/hackathons/heart.png"],
  },
  {
    name: "COVID Toolkit",
    fullName: "COVID Toolkit",
    type: "file",
    description: "An app with COVID country stats, hand-washing timer & FAQ",
    hackathonDetails: {
      date: "18-10-2020",
      event: "Hack Quarantine",
      eventLink: "https://hackquarantine.devpost.com/",
    },
    repo: "https://github.com/sh1ggy/COVIDToolkit",
    tags: [<FaAndroid size={ICON_SIZE} />],
    images: ["/hackathons/hackq.png"],
  },
  {
    name: "Wage Calculator App",
    fullName: "Casual Earnings",
    type: "file",
    description:
      "Wage calculator & rostering application concept made in accordance to specifications made by a start-up",
    hackathonDetails: {
      date: "17-11-2019",
      event: "Mobile App Hackathon",
      eventLink:
        "https://www.eventbrite.com.au/e/brisbanes-mobile-app-hackathon-tickets-72067400535#",
    },
    repo: "https://github.com/sh1ggy/hackathon19-TDRJKM-android",
    tags: [
      <FaAndroid size={ICON_SIZE} />,
      <Badge variant="outline">Adobe XD</Badge>,
    ],
    images: ["/hackathons/casual.png"],
  },
];

export const JOBS: Job[] = [
  {
    roleName: "Software Engineer",
    company: "Sonic IT",
    location: "Brisbane CBD",
    link: "sonichealthcare.com",
    date: "Nov 2023 - Current",
    bio: "Spearheaded the development of a Client administrative front-end built with React + Vite, TailwindCSS & React Router. Also led OAuth Azure integration.",
    tags: ["React", "TypeScript", ".NET", "TailwindCSS", "Azure"],
    colour: "#12316e",
    bgColour: "#4c6da9",
    imagePath: "../icons/sonic.svg",
  },
  {
    roleName: "Systems Support",
    company: "Sonic IT",
    location: "Brisbane CBD",
    link: "sonichealthcare.com",
    date: "May 2022 - Nov 2023",
    bio: "Responsible for troubleshooting medical software supported by Sonic IT via incident management thorough communication with users & internal teams",
    tags: ["MySQL", "Troubleshooting", "Documentation"],
    colour: "#12316e",
    bgColour: "#4c6da9",
    imagePath: "../icons/sonic.svg",
  },
  {
    roleName: "IT Supervisor & SM Designer",
    company: "Wings Education",
    location: "Fortitude Valley",
    link: "wingseducation.com.au",
    date: "Aug 2021 - May 2022",
    bio: "Led development of LMS using Moodle (PHP) & SQL, managed company social media platforms and composed key internal documentation used for training IT interns.",
    tags: ["MySQL", "PHP", "Design", "Training", "Documentation"],
    colour: "#ff5252",
    bgColour: "#f7a1a1",
    imagePath: "../icons/wings.svg",
  },
];

export const HARD_SKILLS: HardSkill[] = [
  { name: "React", time: 3, percent: 70, icon: <FaReact /> },
  {
    name: "RN",
    time: 2,
    percent: 50,
    icon: <TbBrandReactNative />,
  },
  { name: "TypeScript", time: 3, percent: 70, icon: <TbBrandTypescript /> },
  { name: "Tailwind", time: 2, percent: 80, icon: <RiTailwindCssLine /> },
  { name: ".NET", time: 1, percent: 30, icon: <AiOutlineDotNet /> },
  { name: "CSS", time: 4, percent: 75, icon: <FaCss3 /> },
  { name: "SQL", time: 3, percent: 60, icon: <FaDatabase /> },
  { name: "Figma", time: 1, percent: 50, icon: <FaFigma /> },
];

export const SOFT_SKILLS: SoftSkill[] = [
  { name: "Written Communication", icon: <FaPen /> },
  { name: "Project Management", icon: <FaProjectDiagram /> },
  { name: "Incident Management", icon: <FaUsers /> },
  { name: "Change Management", icon: <FaExchangeAlt /> },
  { name: "Solution Design", icon: <SiDiagramsdotnet /> },
  { name: "Technical Documentation", icon: <FaBook /> },
  { name: "Wireframing", icon: <MdOutlineAppShortcut /> },
  { name: "Design", icon: <MdDesignServices /> },
];
