import React, { useEffect, useState, useRef } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    id: 1,
    name: "John Doe",
    designation: "Engineer",
    position: "Head and ceo ceo ceo of Engineering",
    company: "Tata",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    designation: "Engineer",
    position: "Head",
    company: "Tata",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    designation: "Engineer",
    position: "Head",
    company: "Tata",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg",
  },
  {
    id: 4,
    name: "John Doe",
    designation: "Engineer",
    position: "Head",
    company: "Tata",
    image:
      "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
  },
  {
    id: 5,
    name: "John Doe",
    designation: "Engineer",
    position: "Head",
    company: "Tata",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg",
  },
  {
    id: 6,
    name: "John Doe",
    designation: "Engineer",
    position: "Head",
    company: "Tata",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg",
  },
];

// eslint-disable-next-line react/prop-types
const Card = ({ item, onClose }) => (
  <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg rounded-md z-50 w-full max-w-2xl overflow-y: auto">
    <div className="bg-neutral-800 w-full h-10 flex flex-row justify-between">
      <div className="m-2 text-center text-neutral-400 text-2xl font-medium font-['Helvetica Neue']">
        Mentor
      </div>
      <button
        onClick={onClose}
        className="m-2 text-center text-red-400 text-sm font-medium font-['Helvetica Neue']"
      >
        Close
      </button>
    </div>

    <div className="flex w-full flex-row">
      <div className="w-2/5 mt-12 md:w-2/5 pr-4">
        <img className="md:h-48 rounded-t-lg" src={item.image} alt="image" />
        <div className="flex flex-col justify-center items-center w-full p-3 text-center">
          <p className="text-sm md:text-center text-black text-2xl font-medium font-['Helvetica Neue']">
            {item.name}
          </p>
          <p className="text-sm md:text-center text-neutral-400 text-md font-medium font-['Helvetica Neue']">
            {item.position}
          </p>
          <p className="text-sm md:text-center text-neutral-400 text-md font-medium font-['Helvetica Neue']">
            {item.designation}
          </p>
          <p className="text-sm md:text-center text-neutral-400 text-md font-medium font-['Helvetica Neue']">
            {item.company}
          </p>
        </div>
      </div>


      <div className="w-4/5 md:w-3/4 mt-12 pl-4">
        <span className="text-xs sm:text-mtext-zinc-600 md:text-xs lg:text-mtext-zinc-600 xl:text-xl font-['Helvetica Neue']">
          At{" "}
        </span>
        <span className="text-orange-500 text-xl font-medium font-['Helvetica Neue']">
          Startup School{" "}
        </span>
        <span className="text-xs text-mtext-zinc-600 md:text-xl font-['Helvetica Neue']">
          We believe in the power of every idea and the potential within every
          individual. Our mission is to bridge the gap between aspiring
          entrepreneurs and their dreams. With a focus on mentorship and
          practical learning, we are here to guide beginners on a transformative
          journey to becoming successful founders.
        </span>
      </div>
    </div>
  </div>
);

export default function MentorsNew() {
  
  // Conditionally apply classes to body based on card state


 
  const [isCardOpen, setCardOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const targetRef = useRef(null);

  const handleDivClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;

    setPosition({ top, left });
    setCardOpen(!isCardOpen);
  };

  const closeCard = () => {
    setCardOpen(false);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [noSlides, setNoSlides] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 800) {
        setNoSlides(1);
      } else if (width >= 800 && width <= 1250) {
        setNoSlides(2);
      } else {
        setNoSlides(4);
      }

      setWindowWidth(width);
    };

    handleResize(); // Initial setup

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="h-screen w-full flex flex-col items-center mt-20">
        <div className="text-center text-orange-500 text-[25px] font-medium font-['Helvetica Neue'] tracking-[2.50px]">
          Mentors
        </div>
        <div className="text-center  text-black md:text-[52px] font-bold font-['Space Grotesk']">
          Meet Our Experts
        </div>

        <div className="flex flex-row h-92 mt-10 w-2/3 justify-center  ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={noSlides}
            spaceBetween={10}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="flex items-center max-sm:ml-12 max-md:ml-32"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div
                  onClick={handleDivClick}
                  ref={targetRef}
                  className="m-0 mb-10  sm:flex flex-col w-56 h-full "
                >
                  <img
  className="h-48  md:ml-4 w-48 mt-8 rounded-full"
  src={item.image}
  alt="image"
/>

                  <div className="flex flex-col justify-center items-center w-full p-3 text-center">
                    <p className="text-md text-ne font-bold">{item.name}</p>
                    <p className="text-xs text-neutral-500 font-medium">{item.position}</p>
                 
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {isCardOpen && (
            <Card item={data[0]} onClose={closeCard} position={position} />
          )}
        </div>
      </section>
    </>
  );
}
