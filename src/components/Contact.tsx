import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col space-y-12 flex-wrap rounded-2xl p-10 h-screen justify-center items-center select-none">
      <h1 className="text-primary text-md lg:text-6xl mr-3">Contact Me</h1>
      <div className="flex flex-col space-y-6 w-full">
        <div className="flex flex-row bg-card rounded-lg">
          <div className="rounded-l-lg p-6 w-32 bg-card text-primary">
          <strong>Name</strong>
          </div>
          <input className="rounded-lg p-6 w-full text-card" />
        </div>
        <div className="flex flex-row bg-card rounded-lg">
          <div className="rounded-l-lg p-6 w-32 bg-card text-primary">
          <strong>Subject</strong>
          </div>
          <input className="rounded-lg p-6 w-full text-card" />
        </div>
        <div className="flex flex-row bg-card rounded-lg">
          <div className="rounded-l-lg p-6 w-32 bg-card text-primary">
          <strong>Email</strong>
          </div>
          <input className="rounded-lg p-6 w-full text-card" />
        </div>
        <div className="flex flex-row bg-card rounded-lg">
          <div className="flex flex-1 rounded-l-lg p-6 h-60 bg-card text-primary">
            <strong>Message</strong>
          </div>
          <textarea className="resize-none rounded-lg w-full p-6 text-card"></textarea>
        </div>
      </div>
    </div>
  )
}