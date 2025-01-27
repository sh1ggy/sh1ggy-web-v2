import { useState } from "react";
import { HACKATHONS } from "./Hackathons";
import ImageRotator from "./ui/image-rotator";
import { Button } from "./ui/button";
import FontRotator from "./ui/font-rotator";
// import * from "three";

export default function About() {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className="flex flex-col select-none items-center lg:h-screen h-[calc(100dvh)] flex-grow justify-center">
      {/* TITLE */}
      {!showBio && (
        <>
          <div className="absolute top-20 flex flex-row gap-3">
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
          <div className="flex flex-col space-y-6 rounded-2xl p-10 justify-center">
            <div className="flex flex-row space-x-2 items-center">
              <h1 className="font-bold drop-shadow-lg text-primary text-3xl lg:text-8xl">
                sh
              </h1>
              <ImageRotator />
              <h1 className="font-bold drop-shadow-lg text-primary text-3xl lg:text-8xl">
                ggy
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="xl:text-lg text-center tracking-wider drop-shadow-md">
              programming / documentation / design
            </h1>
          </div>
        </>
      )}
      {/* BIO */}
      {showBio && (
        <>
          <div className="w-full max-w-3xl">
            <div className="flex-0 justify-start items-start">
              <FontRotator text={"Tyrone Nolasco"} />
              <br />
            </div>
            <div className="text-lg flex flex-col justify-center items-center">
              <p className="text-body text-center">
                is a{" "}
                <span className="bg-[#d4e6ff] rounded-sm p-1 mx-1">
                  full-time developer
                </span>
                with 3 years of IT industry experience and a Bachelor's degree
                in <strong>Computer Science @ QUT</strong>
              </p>
              <br />
              <p className="text-left">
                I'm characterised by my proficiency in{" "}
                <span className="bg-[#d4e6ff] rounded-sm p-1">
                  documentation and front-end design
                </span>
                , with a strong foundation in programming. I have a keen eye for
                detail and a passion for creating.
              </p>
              <br />
              <p className="text-body text-right">
                Hackathons have been my source of inspiration and challenge,
                having participated in {HACKATHONS.length} hackathons since
                2019.
              </p>
              <br />
            </div>
          </div>
          <Button
            onClick={() => setShowBio(!showBio)}
            className="absolute top-20"
            variant="link"
          >
            back
          </Button>
        </>
      )}
    </div>
  );
}
