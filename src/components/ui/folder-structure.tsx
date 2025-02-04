import { ChevronRight, Folder, File, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import {
  SiTypescript,
  SiFlutter,
  SiDart,
  SiNextdotjs,
  SiTauri,
  SiArduino,
  SiRust,
  SiGodotengine,
  SiFirebase,
} from "react-icons/si";
import { TbBrandOauth, TbBrandReactNative } from "react-icons/tb";
import { Card } from "./card";
import {
  FaAndroid,
  FaArrowLeft,
  FaDiscord,
  FaReact,
  FaUnity,
} from "react-icons/fa";
import { Badge } from "./badge";

type HackathonDetails = {
  event?: string;
  eventLink?: string;
  date?: string;
};

type Item = {
  fullName?: string;
  name: string;
  type: "folder" | "file";
  children?: Item[];
  description?: string;
  tags?: (string | JSX.Element)[];
  images?: string[];
  colour?: string;
  bgColour?: string;
  repo?: string;
  hackathonDetails?: HackathonDetails;
};

const ICON_SIZE = 20;

const projectData: Item[] = [
  {
    name: "Full Stack Projects",
    type: "folder",
    children: [
      {
        name: "Musuem Guidance System",
        fullName: "RM DIGS",
        type: "file",
        description:
          "An onsite, fully deployed museum navigation system purpose-built for Redland Museum that encompasses a mobile navigation app, BLE beacons, a custom API and a staff-facing admin portal to deliver a unique touring experience catered to visitors.",
        tags: [
          <SiTypescript size={ICON_SIZE} />,
          <TbBrandReactNative size={ICON_SIZE} />,
          <img
            src="../icons/react-admin.svg"
            width={ICON_SIZE}
            height={ICON_SIZE}
          />,
        ],
        images: ["/projects/rmdigs-1.png", "/projects/rmdigs-2.png"],
        colour: "#7c1c1f",
        bgColour: "#f6ead8",
      },
      {
        name: "P2P Transfer Platform",
        fullName: "Not a Key Logger",
        type: "file",
        description:
          "A serverless P2P transfer platform to exchange text and files between two parties with anonymity, speed and privacy.",
        tags: [
          <SiTypescript size={ICON_SIZE} />,
          <SiNextdotjs size={ICON_SIZE} />,
        ],
        images: ["/projects/nakl-1.png", "/projects/nakl-2.png"],
        colour: "#534b86",
        bgColour: "#bbb7cd",
      },
    ],
  },
  {
    name: "Mobile Apps",
    type: "folder",
    children: [
      {
        fullName: "DDR Toolkit",
        name: "DDR MD",
        type: "file",
        description:
          "A community driven and collaborated cross-platform mobile app project built for my niche Dance Dance Revolution community use-cases",
        tags: [<SiFlutter size={ICON_SIZE} />, <SiDart size={ICON_SIZE} />],
        images: ["/projects/ddrmd-1.gif", "/projects/ddrmd-2.gif"],
        colour: "#3c82f6",
        bgColour: "#eae8e9",
      },
    ],
  },
];

const TreeItem: React.FC<{
  item: Item;
  expandedFolders: Set<string>;
  toggleFolder: (name: string) => void;
  setSelectedProject: (project: Item) => void;
}> = ({ item, expandedFolders, toggleFolder, setSelectedProject }) => {
  const isOpen = expandedFolders.has(item.name);

  if (item.type === "folder") {
    return (
      <li>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => toggleFolder(item.name)}
        >
          <ChevronRight
            className={`mr-2 h-4 w-4 transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          />
          <Folder className="mr-2 h-4 w-4" />
          {item.name}
        </Button>
        <AnimatePresence>
          {isOpen && item.children && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="ml-4 mt-1 space-y-1 overflow-hidden"
            >
              {item.children.map((child, index) => (
                <TreeItem
                  key={index}
                  item={child}
                  expandedFolders={expandedFolders}
                  toggleFolder={toggleFolder}
                  setSelectedProject={setSelectedProject}
                />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li>
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => setSelectedProject(item)}
      >
        <File className="mr-2 h-4 w-4" />
        {item.name}
      </Button>
    </li>
  );
};

const TreeView: React.FC<{
  items: Item[];
  expandedFolders: Set<string>;
  toggleFolder: (name: string) => void;
  setSelectedProject: (project: Item) => void;
}> = ({ items, expandedFolders, toggleFolder, setSelectedProject }) => {
  return (
    <ul className="space-y-2">
      {items.map((item, index) => (
        <TreeItem
          key={index}
          item={item}
          expandedFolders={expandedFolders}
          toggleFolder={toggleFolder}
          setSelectedProject={setSelectedProject}
        />
      ))}
    </ul>
  );
};

const FolderStructure: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Item | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set()
  );

  const toggleFolder = useCallback((folderName: string) => {
    setExpandedFolders((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(folderName)) {
        newSet.delete(folderName);
      } else {
        newSet.add(folderName);
      }
      return newSet;
    });
  }, []);

  const ProjectView: React.FC<{ project: Item }> = ({ project }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-3xl rounded-lg relative overflow-hidden"
      >
        <Button
          variant="outline"
          onClick={() => setSelectedProject(null)}
          className="mb-4 w-min ml-auto mr-auto"
        >
          <FaArrowLeft />
          Back
        </Button>
        <div
          className="flex flex-col rounded-lg shadow-lg p-8"
          style={{
            minHeight: "400px",
            backgroundColor: project?.bgColour ?? "white",
          }}
        >
          <div className="flex flex-col gap-3">
            <h1
              style={{ color: project?.colour }}
              className="text-3xl font-bold text-center"
            >
              {project?.fullName}
            </h1>
            <div className="flex items-center justify-center gap-3">
              {project.tags && project.tags.map((tag) => tag)}
            </div>
            <p className="text-lg mb-6 text-center">{project.description}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {project.images?.map((image, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                  rotate: project.hackathonDetails && Math.random() * 10 - 5,
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.name} preview ${index + 1}`}
                  className="rounded shadow-xl mx-4 transform rotate-3 hover:rotate-0 transition-transform duration-300"
                  style={{ maxWidth: "300px", maxHeight: "300px" }}
                />
              </motion.div>
            ))}
          </div>
          {project.hackathonDetails && (
            <div className="flex gap-3 mt-auto pt-12 items-center justify-center">
              <Badge variant="secondary">
                Participated: {project.hackathonDetails.date}
              </Badge>
              <Badge variant="secondary" className="hover:text-link">
                <a href={project.hackathonDetails.eventLink}>
                  {project.hackathonDetails.event}
                </a>
              </Badge>
            </div>
          )}
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
          key="explorer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md p-4 bg-background border rounded-lg shadow"
        >
          <h2 className="text-2xl font-bold mb-4">Project Explorer</h2>
          <TreeView
            items={projectData}
            expandedFolders={expandedFolders}
            toggleFolder={toggleFolder}
            setSelectedProject={setSelectedProject}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FolderStructure;
