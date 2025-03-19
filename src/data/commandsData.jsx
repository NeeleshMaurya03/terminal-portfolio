import React from "react";
import Help from "../components/Help";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Resume from "../components/Resume";

export const commandsData = [
  { command: "help", response: <Help /> },
  { command: "aboutme", response: <About /> },
  { command: "education", response: <Education /> },
  { command: "experience", response: <Experience /> },
  { command: "resume", response: <Resume /> },
  { command: "contactme", response: <Contact /> },
  { command: "clear", response: "Clears up the terminal." },
  { command: "init", response: "Resets the terminal." },
];
