import React from 'react'
import demo1 from '../assets/demo.png'
import demo2 from '../assets/demo2.webp'
//react slick carousel css import 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const data = [
  {
    image: demo2,
    course: "Course",
    details: "Course details, mentors, and others"
  },
  {
    image: demo1,
    course: "Course",
    details: "Course details, mentors, and others"
  },
  {
    image: demo2,
    course: "Course",
    details: "Course details, mentors, and others"
  },
]


export default function Programs() {

  return (
    <>
      <section className="h-screen w-full flex flex-col items-center mt-28 px-20 bg-[#fafafa]">
        <div className="text-ttOrange uppercase font-semibold tracking-widest">Programs</div>
        <div className="space-grotesk text-4xl font-bold mt-4">A budding founder? We have the</div>
        <div className="space-grotesk text-4xl font-bold mt-1">perfect program for you.</div>
        <div className='flex flex-row gap-10 w-full mt-8 items-center justify-center'>
          {data.map((data) => (
            <div className='w-56 h-72 drop-shadow-lg bg-[#fff]'>
              <div className='h-44 flex'>
                <img src={data.image} alt={data.course}/>
              </div>
              <div className='space-grotesk mt-2 pl-3'>
                <p className='text-base font-extrabold'>{data.course}</p>
                <p className='text-xs opacity-70'>{data.details}</p>
                <p className='text-xs opacity-70'>{data.details}</p>
              </div>
            </div>
          ) )}
        </div>
      </section>
    </>
  )
}

