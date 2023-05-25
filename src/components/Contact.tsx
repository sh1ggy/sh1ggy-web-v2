import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    emailjs.send ("service_raoj4em", "template_eqxnygp", {
      from_email: email,
      subject: subject,
      message: msg,
      from_name: name,
      }, "KU2I_ctOw4SwfuTKU");

    // Reset fields
    setName('');
    setSubject('');
    setEmail('');
    setMsg('');
  }
  return (
    <div className="flex flex-col lg:flex-col space-y-12 flex-wrap rounded-2xl p-10 h-full justify-center items-center select-none">
      <h1 className="text-primary text-3xl lg:text-6xl mr-3">Contact Me</h1>
      <p className="text-body text-center">Feel free to reach out to me directly if you're interested in connecting, collaborating, or discussing potential opportunities</p>

      <form className="flex flex-col space-y-6 w-full">
        <div className="flex flex-row bg-card rounded-lg">
          <div className="w-1/3 rounded-l-lg p-6 bg-card text-primary">
            <strong>Name</strong>
          </div>
          <input
            onChange={(e) => { setName(e.target.value) }}
            className="w-2/3 rounded-lg p-6 text-card focus:ring-4 focus:outline-none focus:ring-primary" />
        </div>
        <div className="flex flex-row bg-card rounded-lg">
          <div className="w-1/3 rounded-l-lg p-6 bg-card text-primary">
            <strong>Subject</strong>
          </div>
          <input
            onChange={(e) => { setSubject(e.target.value) }}
            className="w-2/3 rounded-lg p-6 text-card focus:ring-4 focus:outline-none focus:ring-primary" />
        </div>
        <div className="flex flex-row bg-card rounded-lg">
          <div className="w-1/3 rounded-l-lg p-6 bg-card text-primary">
            <strong>Email</strong>
          </div>
          <input
            onChange={(e) => { setEmail(e.target.value) }}
            className="w-2/3 rounded-lg p-6 text-card focus:ring-4 focus:outline-none focus:ring-primary" />
        </div>
        <div className="flex flex-row bg-card rounded-lg">
          <div className="w-1/3 flex flex-1 rounded-l-lg p-6 h-30 lg:h-52 bg-card text-primary">
            <strong>Message</strong>
          </div>
          <textarea 
            onChange={(e) => {setMsg(e.target.value)}}
            className="w-2/3 resize-none rounded-lg p-6 text-card focus:ring-4 focus:outline-none focus:ring-primary"></textarea>
        </div>
        <button
          onClick={(e) => sendEmail(e)}
          className="lg: w-full bg-accent text-card p-3 rounded-lg focus:ring-4 focus:outline-none focus:ring-[#f9ab5c]">
          Submit</button>
      </form>
    </div>
  )
}