import React from "react";

export default function Projects() {
  return (
    <div className="flex flex-col items-center lg:h-screen h-[calc(100dvh)] flex-grow justify-center">
      <div className="bg-card flex flex-col space-y-6 rounded-2xl p-10 justify-center items-center">
        <div className="flex flex-row items-center space-x-3">
          <h1 className="text-primary text-3xl lg:text-6xl">Pr</h1>
          <img className="lg:h-16 h-12" src="../placeholder.svg" />
          <h1 className="text-primary text-3xl lg:text-6xl">jects</h1>
        </div>
        <h2 className="text-accent text-md lg:text-lg"><strong>front-end / hackathons</strong></h2>
        <p className="text-body text-center">With 3 years of web development experience my skill level is currently junior to intermediate level as I balance my personal up-skilling with full-time work in IT support.</p>
      </div>
      <div className="flex flex-row space-x-4 my-3  w-full text-center">
        <div className="w-1/3 bg-primary p-3 rounded-2xl cursor-pointer hover:bg-[#bfe8bd] transition-colors">
          <p className="text-card">Redland Museum</p>
        </div>
        <div className="w-1/3 bg-primary p-3 rounded-2xl cursor-pointer hover:bg-[#bfe8bd] transition-colors">
          <p className="text-card">NAKL</p>
        </div>
        <div className="w-1/3 bg-primary p-3 rounded-2xl cursor-pointer hover:bg-[#bfe8bd] transition-colors">
          <p className="text-card">Hackathons</p>
        </div>
      </div>
    </div>
  )
}