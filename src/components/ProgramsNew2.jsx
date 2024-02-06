import React from "react";
import demo1 from "../assets/demo.png";
import demo2 from "../assets/demo2.webp";
import "./styles/ProgramsNew2.css";

export default function ProgramsNew() {
  const sessions = [
    {
      image: demo2,
      name: "Course",
      handler: "Handler",
      date: "1/1/2024",
      details: "Course details, mentors, and others",
    },
    {
      image: demo1,
      name: "Course",
      handler: "Handler",
      date: "1/1/2024",
      details: "Course details, mentors, and others",
    },
    {
      image: demo2,
      name: "Course",
      handler: "Handler",
      date: "1/1/2024",
      details: "Course details, mentors, and others",
    },
  ];
  return (
    <div className="ProgramsNew2" id="programs">
      <div className="program-schedule text-xl md:text-3xl text-[#F56E0F]">Program Schedule</div>
      <div className="timeline">
        {sessions.map((session, index) => (
          <div className={`session ${index % 2 === 0 ? "left" : "right"}`}>
            <img className="session-image" src={session.image} alt="image" />
            <div className="session-details">
              <h3 className="session-name">{session.name}</h3>
              <p className="session-description">{session.handler}</p>
              <p className="session-description">{session.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
