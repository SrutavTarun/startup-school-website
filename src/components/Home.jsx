import React from "react";
import "./styles/home.css";

export default function Home() {
  return (
    <>
      <div className="home w-full h-full bg-cover bg-center" id="home">
        <div className="home-white-box">
          <div className="home-text-1">
            From Beginner to Founder: Join{" "}
            <span className="home-Startup-School">Startup School</span> for a
            transformative journey.
          </div>
          <div className="home-text-2">
            We welcome you with open arms, providing mentorship every step of
            the way. Turn your ideas into reality - let's build your startup
            together!
          </div>
          <a href="https://forms.gle/mgSejibwVNzxDU818" target="_blank">
            <div className="home-button">REGISTER NOW</div>
          </a>
          
        </div>
      </div>
    </>
  );
}
