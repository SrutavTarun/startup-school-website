import React, { useEffect, useState, useRef } from "react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import {client} from '../client'
import imageUrlBuilder from "@sanity/image-url";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  // console.log(builder.image(source).url());
  return builder.image(source);
};



// eslint-disable-next-line react/prop-types
const Card = ({ item, onClose }) => (
  <div className="absolute bg-[#ffffff] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg rounded-md z-50 w-[350px] md:w-full md:max-w-5xl overflow-y: auto">
    <div className="bg-neutral-800 w-full h-10 flex flex-row justify-between">
      <div className="m-2 text-center text-neutral-400 text-2xl font-medium font-['Helvetica Neue']">
        {item.name}
      </div>
      <button
        onClick={onClose}
        className="m-2 text-center text-red-400 text-sm font-medium font-['Helvetica Neue']"
      >
        Close
      </button>
    </div>

    <div className="flex w-full flex-row">
      

      <div className="w-4/5 md:w-3/4 mt-12 pl-4">
        
        <span className="text-xs text-mtext-zinc-600 md:text-xl font-['Helvetica Neue']">
          {item.about}
        </span>
      </div>
    </div>
  </div>
);

export default function MentorsNew() {
  // Conditionally apply classes to body based on card state
  const [mentordata, setMentorata] = useState([])
  const [popupdata, setPopupdata] = useState(null)
  const [isCardOpen, setCardOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const targetRef = useRef(null);

  const handleDivClick = (event,data) => {
    const rect = event.target.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    const left = rect.left + window.scrollX;

    setPosition({ top, left });
    setPopupdata(data);
    setCardOpen(!isCardOpen);
  };

  const closeCard = () => {
    setCardOpen(false);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [noSlides, setNoSlides] = useState(1);

  useEffect(() => {
      
    const fetchData = async () => {

      //mentors
      await client
        .fetch(`*[_type == "mentors"] | order(_createdAt asc)`)
        .then((data) => {
          // console.log(data);
          setMentorata(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

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

        <div className="relative mr-12 md:flex flex-row h-92  w-2/3 justify-center  ">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={noSlides}
            spaceBetween={10}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="flex items-center max-sm:ml-12 max-md:ml-32"
          >
            {mentordata.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <div
                  onClick={(event) =>  handleDivClick(event,item)}
                  ref={targetRef}
                  className="m-0 mb-10  sm:flex flex-col items-center w-48 h-full "
                >
                  <img
                    className="h-44 md:ml-4 w-44 mt-8 rounded-full ring-2 ring-gray-400 ring-offset-4"
                    src={urlFor(item.photo)}
                    alt="image"
                  />

                  <div className="flex flex-col justify-center items-center w-full p-3 text-center">
                    <p className="text-md text-ne font-bold">{item.name}</p>
                    <p className="text-xs text-neutral-500 font-medium">
                      {item.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {isCardOpen && (
            <Card item={popupdata} onClose={closeCard} position={position} />
          )}
        </div>
      </section>
    </>
  );
}
