import React from "react";
import "./styles/highlights.css";

export default function Highlights() {
  return (
    <>
      <div id="highlights">
        <div className="high-title">HIGHLIGHTS</div>
        <div className="high-sub">Why Choose US?</div>
        <div className="high-container">
          <div className="high-box">
            <div className="high-head">Experined Faculty</div>
            <div className="high-text">
              Learn from industry experts and successful entrepreneurs who bring
              real-world insights to the classroom.
            </div>
          </div>
          <div className="high-box">
            <div className="high-head">Hands-On Experience</div>
            <div className="high-text">
              Our curriculum is crafted to provide practical, hands-on
              experience, ensuring you're ready to tackle the challenges of the
              startup world.
            </div>
          </div>
          <div className="high-box">
            <div className="high-head">Networking</div>
            <div className="high-text">
              Connect with a vibrant community of like-minded individuals,
              mentors, and potential collaborators to enrich your
              entrepreneurial network.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
