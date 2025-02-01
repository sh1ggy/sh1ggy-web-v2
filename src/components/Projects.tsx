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
  const PROJECTS: Project[] = [
    {
      name: "RM DIGS",
      desc: "An onsite, fully deployed museum navigation system purpose-built for Redland Museum that encompasses a mobile navigation app, BLE beacons, a custom API and a staff-facing admin portal to deliver a unique touring experience catered to visitors.",
      tags: [
        <SiTypescript size={ICON_SIZE} />,
        <TbBrandReactNative size={ICON_SIZE} />,
        <img
          src="../icons/react-admin.svg"
          width={ICON_SIZE}
          height={ICON_SIZE}
        />,
      ],
      imagePath: "../rm.png",
      repo: "https://github.com/ProPablo/rm_dashboard",
      colour: "#F3E1C7",
    },
    {
      name: "DDR-MD",
      desc: "A community driven and collaborated cross-platform mobile app project built for my niche Dance Dance Revolution community use-cases",
      tags: [<SiFlutter size={ICON_SIZE} />, <SiDart size={ICON_SIZE} />],
      imagePath: "",
      repo: "https://github.com/sh1ggy/ddr-md",
      colour: "#3c82f6",
    },
    {
      name: "NAKL",
      desc: "A serverless P2P transfer platform to exchange text and files between two parties with anonymity, speed and privacy.",
      tags: [
        <SiTypescript size={ICON_SIZE} />,
        <SiNextdotjs size={ICON_SIZE} />,
      ],
      imagePath: "../nakl.png",
      repo: "https://github.com/ProPablo/nakl",
      colour: "#BBB7CB",
    },
    {
      name: "key.board",
      desc: "An RFID card password manager flashed onto ESP32 and interfaced with a Tauri web app.",
      tags: [
        <SiTauri size={ICON_SIZE} />,
        <SiTypescript size={ICON_SIZE} />,
        <SiArduino size={ICON_SIZE} />,
        <SiRust size={ICON_SIZE} />,
      ],
      imagePath: "../keydot.png",
      repo: "https://github.com/sh1ggy/keyDOTboard",
      colour: "#a1adc5",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center p-10 lg:mx-14">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </div>
  );
}
