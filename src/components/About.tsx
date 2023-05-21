import { useState } from "react"
import '../styles.css'

export default function About() {
  const [showBio, setShowBio] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center">

      {/* TITLE */}
      {!showBio &&
        <div className="flex flex-col space-y-6 rounded-2xl p-10 h-4/6 justify-center mx-36">
          <div className="flex flex-row space-x-6">
            <h1 className="text-primary text-9xl">sh</h1>
            <img className="h-32" src="../placeholder.svg" />
            <h1 className="text-primary text-9xl">ggy</h1>
          </div>
          <h2 className="text-[#AAC6BA] text-2xl">Tyrone Nolasco</h2>
          <h3 className="text-[#D9EAD8] text-sm">programming / documentation / design</h3>
          <div className="flex flex-row space-x-3">
            <button
              onClick={() => setShowBio(!showBio)}
              className="w-2/3 bg-accent text-card text-xs rounded-3xl px-3 py-2"
            >about me</button>
            <button className="w-1/3 bg-card text-link text-xs rounded-3xl px-3 py-2">resume.pdf</button>
          </div>
        </div>
      }

      {/* BIO */}
      {showBio &&
        <div className="bg-card flex flex-col space-y-6 rounded-2xl p-10 h-full justify-center mx-36">
          <div className="flex-0 justify-start items-start">
            <p className="text-sm text-primary">Hi! My name is...</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-primary text-5xl">Tyrone Nolasco</h1><br />
            <p className="text-body">I am an aspiring web developer currently working in <strong>IT Support @ Sonic IT</strong>. I started my journey in high school learning HTML & CSS and now I have a Bachelors in Computer Science from QUT.
            </p><br />
            <p className="text-body text-right">I've had the pleasure of participating in several hackathons and being a part of a handful of long-term projects with a particular interest in <strong>React</strong> using <strong>TypeScript</strong> as my language of choice.
            </p><br />
            <p className="text-accent text-center">I am open to new opportunities at the moment.</p>
          </div>
          <button 
            onClick={() => setShowBio(!showBio)}
            className="bg-page text-body text-xs rounded-3xl px-3 py-2">back
          </button>
        </div>
      }
    </div>
  )
}
