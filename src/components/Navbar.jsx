import React from "react"
import "./styles/navbar.css";
import Logo from "../assets/startupschoolwhitelogo.svg"

export default function Navbar() {
  return (
    <>
      <div class="navbar">
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
            <li>
              <a href="#mentors">Mentors</a>
            </li>
            <li>
              <a href="#contact" class="contact-btn">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
