import React, { useState, useRef } from "react";
import "../styles/mentors.css";

export default function Mentors() {
  const [isComponentOpen, setComponentOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const targetRef = useRef(null);

  const handleDivClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;

    setPosition({ top, left });
    setComponentOpen(!isComponentOpen);
  };

  const closeClick = ()=>{
    setComponentOpen(false);
  }

  return (
    <div>
      <div className="desktop-4">
        <div className="mentors">MENTORS </div>
        <div className="meet-our-experts">Meet Our Experts </div>
        <div className="frame-5">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              className="group-12"
              onClick={handleDivClick}
              key={index}
              ref={targetRef}
            >
              <div className="rectangle-18"></div>
              <img
                className="ellipse-2"
                src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
                alt={`User ${index + 1}`}
              />
              <div className="ellipse-3"></div>
              <div className="full-name">Full Name </div>
              <div className="designation-position-company">
                Designation, Position, Company{" "}
              </div>
            </div>
          ))}
        </div>
        {isComponentOpen && (
          <div className="rectangle-19">
            <div className="top-bar">
              <div className="rectangle-20">
                <div className="mentor">Mentor </div>
                <svg
                  className="carbon-close-filled"
                  onClick={closeClick}
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2C8.2 2 2 8.2 2 16C2 23.8 8.2 30 16 30C23.8 30 30 23.8 30 16C30 8.2 23.8 2 16 2ZM21.4 23L16 17.6L10.6 23L9 21.4L14.4 16L9 10.6L10.6 9L16 14.4L21.4 9L23 10.6L17.6 16L23 21.4L21.4 23Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className="bottom-section">
              <div className="photo-div">
                <img
                  className="ellipse-new"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                  alt="User"
                />
                <div className="info-div">
                  <div className="full-name">Full Name </div>
                  <div className="designation-position-company">
                    Designation, Position, Company{" "}
                  </div>
                </div>
              </div>

              <div className="text-div">
                <div className="at-startup-school-we-believe-in-the-power-of-every-idea-and-the-potential-within-every-individual-our-mission-is-to-bridge-the-gap-between-aspiring-entrepreneurs-and-their-dreams-with-a-focus-on-mentorship-and-practical-learning-we-are-here-to-guide-beginners-on-a-transformative-journey-to-becoming-successful-founders">
                  <span>
                    <span className="at-startup-school-we-believe-in-the-power-of-every-idea-and-the-potential-within-every-individual-our-mission-is-to-bridge-the-gap-between-aspiring-entrepreneurs-and-their-dreams-with-a-focus-on-mentorship-and-practical-learning-we-are-here-to-guide-beginners-on-a-transformative-journey-to-becoming-successful-founders-span">
                      At{" "}
                    </span>
                    <span className="at-startup-school-we-believe-in-the-power-of-every-idea-and-the-potential-within-every-individual-our-mission-is-to-bridge-the-gap-between-aspiring-entrepreneurs-and-their-dreams-with-a-focus-on-mentorship-and-practical-learning-we-are-here-to-guide-beginners-on-a-transformative-journey-to-becoming-successful-founders-span2">
                      Startup School
                    </span>
                    <span className="at-startup-school-we-believe-in-the-power-of-every-idea-and-the-potential-within-every-individual-our-mission-is-to-bridge-the-gap-between-aspiring-entrepreneurs-and-their-dreams-with-a-focus-on-mentorship-and-practical-learning-we-are-here-to-guide-beginners-on-a-transformative-journey-to-becoming-successful-founders-span3">
                      , we believe in the power of every idea and the potential
                      within every individual. Our mission is to bridge the gap
                      between aspiring entrepreneurs and their dreams. With a
                      focus on mentorship and practical learning, we are here to
                      guide beginners on a transformative journey to becoming
                      successful founders.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
