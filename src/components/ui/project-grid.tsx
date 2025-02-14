"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ExternalLink, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaReact, FaUnity, FaDiscord, FaAndroid } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFlutter,
  SiDart,
  SiRust,
  SiTauri,
  SiArduino,
  SiGodotengine,
  SiFirebase,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Badge } from "./badge";

const ICON_SIZE = 17;

interface Project {
  name: string;
  fullName?: string;
  type: "file" | "folder";
  description: string;
  tags: (string | JSX.Element)[];
  images?: string[];
  repo: string;
  colour?: string;
  hackathonDetails?: {
    event: string;
    date: string;
    eventLink: string;
  };
}

export const projects: Project[] = [
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
    repo: "https://github.com/ProPablo/naklw",
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

const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<any | null>(
    null
  );

  const ProjectView: React.FC<{ project: Project }> = ({ project }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl mx-auto p-8 border-4 rounded-lg shadow-lg relative overflow-hidden"
        style={{ minHeight: "400px" }}
      >
        <Button
          variant="ghost"
          onClick={() => setSelectedProject(null)}
          className="absolute top-2 left-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <h2 className="text-3xl font-bold mb-4 text-center">{project.name}</h2>
        <p className="text-lg mb-6 text-center">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {project.images?.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, rotate: Math.random() * 10 - 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-md" />
              <img
                src={image || "/placeholder.svg"}
                alt={`${project.name} preview ${index + 1}`}
                className="rounded shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300"
                style={{ maxWidth: "200px", maxHeight: "200px" }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      {selectedProject ? (
        <ProjectView key="project" project={selectedProject} />
      ) : (
        <motion.div
          key="grid"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto p-4"
        >
          <div className="w-full mb-6 justify-center items-center flex flex-col gap-3">
            <h1 className="text-3xl font-bold">hackathons</h1>
            <Badge className="font-gluten py-2 px-3">
              Count: {projects.length}
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
              >
                <Card className="h-full flex flex-col">
                  <div className="relative w-full pt-[56.25%]">
                    <img
                      src={
                        project?.images[0] ||
                        "https://via.placeholder.com/400x300"
                      }
                      className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="bg-[white] border-x border-b shadow-inset shadow-xl py-2 z-50 absolute top-0 left-1/2 transform -translate-x-1/2 px-3 rounded-b-lg">
                      <div className="flex ml-auto gap-3 items-center">
                        {project.tags.map((tag) => tag)}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="px-3 mt-3">
                    <a
                      href={project.repo}
                      className="flex items-center gap-1 hover:text-link transition-colors duration-150"
                    >
                      <CardTitle className="flex w-full gap-1 items-center">
                        <Link size={15} />
                        <p>
                          <strong>{project.fullName}</strong> - {project.name}
                        </p>
                      </CardTitle>
                    </a>
                    {project.hackathonDetails && (
                      <CardDescription>
                         <div className="flex ml-auto">
                          {project.hackathonDetails?.date}
                        </div>
                      </CardDescription>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow p-3">
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-2 flex-row lg:flex-col px-3 pb-3">
                    <div className="flex gap-1 justify-start md:justify-center">
                      <Badge
                        variant="secondary"
                        className="ml-auto hover:text-link"
                      >
                        <a
                          href={project.hackathonDetails?.eventLink}
                          className="flex items-center gap-1"
                        >
                          <ExternalLink size={15} />
                          {project.hackathonDetails?.event}
                        </a>
                      </Badge>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectGrid;
