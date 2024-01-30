import React from 'react'
import demo1 from '../assets/demo.png'
import demo2 from '../assets/demo2.webp'

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
      <section className="h-screen w-full flex flex-col items-center mt-20 px-20">
        <div className="text-ttOrange uppercase font-semibold tracking-widest">Programs</div>
        <div className="space-grotesk text-[45px] font-bold mt-4">A budding founder? We have the</div>
        <div className="space-grotesk text-[45px] font-bold -mt-3">perfect program for you.</div>
        
      </section>
    </>
  )
}

