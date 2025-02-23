"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Link } from "lucide-react";
import * as React from "react";
import { FaAndroid, FaDiscord, FaReact, FaUnity } from "react-icons/fa";
import {
  SiArduino,
  SiFirebase,
  SiGodotengine,
  SiNextdotjs,
  SiRust,
  SiTauri,
  SiTypescript
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { Badge } from "./badge";
import { PROJECTS } from "@/constants/info";

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

const ProjectGrid: React.FC = () => {
  return (
    <AnimatePresence mode="wait">
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
            Count: {PROJECTS.length}
          </Badge>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card key={project.name} className="h-full flex flex-col">
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
                      {project.tags.map((tag) => (
                        <React.Fragment key={tag.toString()}>
                          {tag}
                        </React.Fragment>
                      ))}
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
    </AnimatePresence>
  );
};

export default ProjectGrid;
