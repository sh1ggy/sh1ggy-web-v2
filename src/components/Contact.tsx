import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser"

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState(false);
  const sendEmail = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const ERR_DELAY = 3000;
    e.preventDefault();

    if (!name || !subject || !email || !msg) {
      setErr(true);
      let timer = setTimeout(() => { setErr(false) }, ERR_DELAY);
      return () => {
        clearTimeout(timer);
      }
    }

    emailjs.send("service_raoj4em", "template_eqxnygp", {
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
    <div className="flex flex-col relative lg:flex-col space-y-8 flex-wrap rounded-2xl p-10 lg:h-[calc(screen-24px)] justify-center items-center select-none mb-40">
      {/* TOAST */}
      <div className={`absolute mb-6 shadow-md rounded-lg p-6 lg:bottom-0 lg:right-0 bg-[#EB4C63] select-none toast transition-opacity duration-300 
      ${err ? 'opacity-100' : 'opacity-0'}`}>
          <span className="text-body">Please fill out all fields</span>
      </div>

      <h1 className="text-primary drop-shadow-lg text-3xl lg:text-6xl mr-3">Contact Me</h1>
      <form className="flex flex-col lg:space-y-5 space-y-4 w-full">
        <div className="flex flex-row bg-card rounded-lg shadow-lg">
          <div className="w-1/3 rounded-l-lg py-3 px-6 lg:p-6 bg-card text-primary">
            <strong>Name</strong>
          </div>
          <input
            onChange={(e) => { setName(e.target.value) }}
            className="w-2/3 rounded-lg py-3 px-6 lg:p-6 text-card focus:ring-4 focus:outline-none focus:ring-primary" />
        </div>
        <div className="flex flex-row bg-card rounded-lg shadow-lg">
          <div className="w-1/3 rounded-l-lg py-3 px-6 lg:p-6 bg-card text-primary">
            <strong>Subject</strong>
          </div>
          <input
            onChange={(e) => { setSubject(e.target.value) }}
            className="w-2/3 rounded-lg py-3 px-6 lg:p-6 text-card focus:ring-4 focus:outline-none focus:ring-primary" />
        </div>
        <div className="flex flex-row bg-card rounded-lg shadow-lg">
          <div className="w-1/3 rounded-l-lg py-3 px-6 lg:p-6 bg-card text-primary">
            <strong>Email</strong>
          </div>
          <input
            onChange={(e) => { setEmail(e.target.value) }}
            className="w-2/3 rounded-lg py-3 px-6 lg:p-6 text-card focus:ring-4 focus:outline-none focus:ring-primary" />
        </div>
        <div className="flex flex-col bg-card rounded-lg shadow-lg">
          <div className="w-1/3 flex flex-1 rounded-l-lg p-6 h-10 lg:h-52 bg-card text-primary">
            <strong>Message</strong>
          </div>
          <textarea
            onChange={(e) => { setMsg(e.target.value) }}
            className="w-full resize-none h-52 rounded-lg p-6 text-card focus:ring-4 focus:outline-none focus:ring-primary"></textarea>
        </div>
        <button
          onClick={(e) => sendEmail(e)}
          className="lg:w-full shadow-lg bg-accent text-card p-3 rounded-lg focus:ring-4 focus:outline-none focus:ring-[#f9ab5c]">
          Submit</button>
      </form>
    </div>
  )
}