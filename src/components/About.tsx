import { useState } from "react"
// import * from "three";

export default function About() {
  const [showBio, setShowBio] = useState(false);
  return (
    <div className="flex flex-col items-center lg:h-screen h-[calc(100dvh)] flex-grow justify-center">
      {/* TITLE */}
      {!showBio &&
        <div className="flex flex-col space-y-6 rounded-2xl p-10 justify-center select-none">
          <div className="flex flex-row space-x-6 bg-page">
            <h1 className="font-bold drop-shadow-lg text-primary text-3xl lg:text-8xl">sh</h1>
            <img className="lg:h-24 h-12 drop-shadow-lg" src="../placeholder.svg" />
            <h1 className="drop-shadow-lg font-bold text-primary text-3xl lg:text-8xl">ggy</h1>
          </div>
          <h2 className="text-[#AAC6BA] text-2xl drop-shadow-md ">Tyrone Nolasco</h2>
          <h3 className="text-[#D9EAD8] text-sm tracking-wider drop-shadow-md">programming / documentation / design</h3>
          <div className="flex flex-row space-x-5">
            <button
              onClick={() => setShowBio(!showBio)}
              className="w-2/3 bg-accent text-card text-xs rounded-3xl px-3 py-2 hover:scale-110 transition-transform duration-500"
            >about me</button>
            <button
              className="w-1/3 bg-card text-link text-xs rounded-3xl px-3 py-2 hover:scale-110 transition-transform duration-500"
              onClick={() => window.open('../resume.pdf')}
            >resume.pdf</button>
          </div>
          <a
            href="/blog"
            className="w-full text-center bg-card text-body text-xs rounded-3xl px-3 py-2 hover:scale-110 transition-transform duration-500"
          >blog</a>
        </div>
      }

      {/* BIO */}
      {showBio &&
        <div className="bg-card flex flex-col space-y-6 rounded-2xl p-10 transition-all justify-center shadow-xl lg:mx-24">
          <div className="flex flex-row w-full">
            <div className="flex-0 justify-start items-start">
              <p className="text-sm text-primary">Hi! My name is...</p>
              <h1 className="text-primary text-5xl">Tyrone Nolasco</h1><br />
            </div>
            <a href="/toolkit" className="ml-auto hover:scale-110 transition-transform duration-500">
              <img className="h-20" src="../gato.png" />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-body">I started my journey in high school, having graduated recently last January with a Bachelors in Computer Science from QUT. Currently, I am an aspiring web developer working in <strong>IT Support @ Sonic IT</strong> trying to balance my upskilling in programming with full time work. I have a particular keenness for documentation, front-end design and diagramming.
            </p><br />
            <p className="text-body text-right">The best way I've found to fast-track my improvement as a programmer is participating in hackathons when I can and challenging myself to learn a new skill or technology with every event that I am a part of. Apart from hackathons, I like to spend my spare time playing rhythm games.
            </p><br />
            <p className="text-accent text-center">I am open to new opportunities at the moment.</p>
          </div>
          <button
            onClick={() => setShowBio(!showBio)}
            className="bg-page text-body text-xs rounded-3xl px-3 py-2 hover:bg-[#565b68] duration-500 ease-in-out transition-colors">back
          </button>
        </div>
      }
    </div>
  )
}
