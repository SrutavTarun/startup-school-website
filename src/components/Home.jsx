import React from "react";
import "./styles/home.css";

import backgroundImage from "../assets/home1.png";

export default function Home() {
  return (
    <>
      <div
        className="home w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <div className="text-black text-center font-SpaceGrotesk font-bold text-4xl">
          From Beginner to Founder: Join Startup School for a transformative journey.
          </div>
        </div>
      </div>
    </>
  );
}
