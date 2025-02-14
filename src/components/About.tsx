import { Button } from "@/components/ui/button";
import FontRotator from "@/components/ui/font-rotator";
import ImageRotator from "@/components/ui/image-rotator";
import { projects } from "@/components/ui/project-grid";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  const [showBio, setShowBio] = useState(false);

  return (
    <>
      <div className="mt-6 absolute top-0 right-1/2 left-1/2 gap-3">
        <div className="flex flex-row gap-3 w-full items-center justify-center">
          <a
            href="https://www.github.com/sh1ggy"
            className="hover:scale-90 hover:text-link duration-150 transition-all focus:outline-none drop-shadow-xl"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/tyrone-nolasco/"
            className="hover:scale-90 hover:text-link duration-150 transition-all focus:outline-none drop-shadow-xl"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
      <div className="flex flex-col select-none items-center lg:h-screen h-[calc(100dvh)] flex-grow justify-center">
        {!showBio && (
          <>
            <div className="absolute top-20 flex flex-col gap-12 right-1/2 left-1/2">
              <div className="flex w-full justify-center gap-3">
                <Button onClick={() => setShowBio(!showBio)} variant="link">
                  about me
                </Button>
                <Button variant="link" onClick={() => window.open("/blog")}>
                  blog
                </Button>
                <Button
                  onClick={() => window.open("../resume.pdf")}
                  variant="link"
                  className="text-link"
                >
                  resume.pdf
                </Button>
              </div>
            </div>
            <div className="flex flex-col space-y-6 rounded-2xl p-10 justify-center">
              <div className="flex flex-row space-x-2 items-center">
                <h1 className="font-bold drop-shadow-lg text-primary text-6xl lg:text-8xl">
                  sh
                </h1>
                <ImageRotator />
                <h1 className="font-bold drop-shadow-lg text-primary text-6xl lg:text-8xl">
                  ggy
                </h1>
              </div>
            </div>

            <div className="flex-col items-center gap-4 hidden lg:flex">
              <h1 className="xl:text-lg text-center tracking-wider drop-shadow-md">
                programming / documentation / design
              </h1>
            </div>
          </>
        )}
        {/* BIO */}
        {showBio && (
          <>
            <div className="absolute top-20 flex flex-col gap-12 right-1/2 left-1/2">
              <div className="flex w-full justify-center gap-3">
                <Button onClick={() => setShowBio(!showBio)} variant="link">
                  back
                </Button>
              </div>
            </div>

            <div className="w-full max-w-3xl px-12">
              <div className="mt-36 lg:mt-0">
                <FontRotator text={"Tyrone Nolasco"} />
                <br />
              </div>
              <div className="text-md flex flex-col justify-center items-center gap-3">
                <p className="text-body text-center">
                  <span className="bg-[#d4e6ff] rounded-sm p-1 mx-1">
                    full-time developer
                  </span>
                  with 3 years of IT industry experience and a Bachelor's degree
                  in <strong>Computer Science @ QUT</strong>
                </p>
                <br />
                <p className="text-left">
                  lover of{" "}
                  <span className="bg-[#d4e6ff] rounded-sm p-1">
                    documentation and front-end design
                  </span>{" "}
                  with a keen eye for detail and a passion for creating.
                </p>
                <br />
                <p className="text-body text-right">
                  Hackathons are my source of inspiration and challenge,
                  participating in
                  <span className="bg-[#d4e6ff] rounded-sm p-1">
                    {projects.length} hackathons since 2019
                  </span>{" "}
                  and being the proud winner of <strong>Code Network's 2023 Hackathon</strong>
                </p>
                <br />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
