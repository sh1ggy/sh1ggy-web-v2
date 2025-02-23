import type { ReactNode } from "react";

export interface Project {
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

export interface Job {
  roleName: string;
  company: string;
  location: string;
  link: string;
  date: string;
  bio: string;
  tags: string[];
  colour: string;
  bgColour: string;
  imagePath: string;
}

export interface HardSkill {
  name: string;
  time: number;
  percent: number;
  icon: ReactNode;
}

export interface SoftSkill {
  name: string;
  icon: ReactNode;
}
