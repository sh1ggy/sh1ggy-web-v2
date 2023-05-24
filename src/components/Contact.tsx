import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-col space-y-12 flex-wrap rounded-2xl p-10 h-full justify-center items-center select-none">
      <h1 className="text-primary text-3xl lg:text-6xl mr-3">Contact Me</h1>
      <p className="text-body text-center">Feel free to reach out to me directly if you're interested in connecting, collaborating, or discussing potential opportunities</p>
      <div className="flex flex-col space-y-6 w-full">
        <div className="flex flex-row bg-card rounded-lg">
          <div className="w-1/3 rounded-l-lg p-6 bg-card text-primary">
            <strong>Name</strong>
          </div>
          <input className="w-2/3 rounded-lg p-6 text-card" />
        </div>
        <div className="flex flex-row bg-card rounded-lg">
          <div className="w-1/3 rounded-l-lg p-6 bg-card text-primary">
            <strong>Subject</strong>
          </div>
          <input className="w-2/3 rounded-lg p-6 text-card" />
        </div>
        <div className="flex flex-row bg-card rounded-lg">
          <div className="w-1/3 rounded-l-lg p-6 bg-card text-primary">
            <strong>Email</strong>
          </div>
          <input className="w-2/3 rounded-lg p-6 text-card" />
        </div>
        <div className="flex flex-row bg-card rounded-lg">
          <div className="w-1/3 flex flex-1 rounded-l-lg p-6 h-60 bg-card text-primary">
            <strong>Message</strong>
          </div>
          <textarea className="w-2/3 resize-none rounded-lg p-6 text-card"></textarea>
        </div>
      </div>
    </div>
  )
}