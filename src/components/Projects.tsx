import {
  SiArduino,
  SiDart,
  SiFlutter,
  SiNextdotjs,
  SiRust,
  SiTauri,
  SiTypescript,
} from "react-icons/si";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import FolderStructure from "./ui/folder-structure";
import ProjectGrid from "./ui/project-grid";

const ICON_SIZE = 20;

interface Project {
  name: string;
  desc: string;
  tags: (string | JSX.Element)[];
  imagePath: string;
  repo: string;
  colour: string;
}

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
    <div className="flex flex-col items-center justify-center p-10 gap-12 lg:mx-14">
      <FolderStructure />

       {/* <Carousel opts={{ align: "center" }} className="max-w-full w-full">
        <CarouselContent>
          {PROJECTS.map((proj, i) => (
            <CarouselItem key={i} className="w-full">
              <div className="p-1">
                <Card className="p-12 gap-4 flex flex-col">
                  <CardHeader className="flex flex-col text-center">
                    <CardTitle>
                      <a
                        href={proj.repo}
                        className="hover:scale-110 transition-transform duration-200"
                      >
                        <h1
                          style={{ color: proj.colour }}
                          className="text-4xl hover:scale-110 transition-transform duration-200"
                        >
                          {proj.name}
                        </h1>
                      </a>
                    </CardTitle>
                    <CardDescription className="flex flex-col gap-4">
                      <p>{proj.desc}</p>
                      <div className="flex items-center justify-center gap-3">
                        {proj.tags.map((tag) => tag)}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-center p-6">
                    <img src={proj.imagePath} />
                  </CardContent>
                </Card>
              </div>
            )
          })
        }
      </div> */}
    </div> 
  )
}
