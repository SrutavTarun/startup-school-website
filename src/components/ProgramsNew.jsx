import React from 'react'
import demo1 from '../assets/demo.png'
import demo2 from '../assets/demo2.webp'

export default function ProgramsNew() {


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
  return (
    <div className='flex flex-col h-  md:min-h-[80vh] justify-center my-20'>
    <div className='flex flex-col justify-between items-center md:min-h-[65vh]'>
        <div className="text-ttOrange uppercase font-semibold tracking-widest">Program Schedule</div>
        <div className="space-grotesk text-[45px] w-2/3 text-center font-bold mt-4 max-sm:text-3xl max-md:text-3xl max-lg:text-3xl">Are you budding founder? We have the perfect program for you.</div>
        <div className='flex w-3/4 md:w-2/4  justify-center mt-10'>
        

        <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
        <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Course name </h3>
        <div className='flex md:flex-row flex-col  h-full pb-5 justify-start '>
              <img className=' w-2/3 md:w-auto md:h-48 rounded-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-2/3  px-3'>
                <p className='text-md font-bold'>Accelerate your startup's journey in our 2-month program! From ideation to funding, our expert-led weekly sessions provide hands-on insights. Join us to ignite, build, and thrive. Check out the detailed schedule for a week-by-week breakdown!</p>
                <p className='text-xs font-light'> </p>
              </div>
            </div>
    </li>
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Course name </h3>
        <div className='flex md:flex-row flex-col  h-full pb-5 justify-start '>
              <img className=' w-2/3 md:w-auto md:h-48 rounded-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-2/3  px-3'>
                <p className='text-md font-bold'>Accelerate your startup's journey in our 2-month program! From ideation to funding, our expert-led weekly sessions provide hands-on insights. Join us to ignite, build, and thrive. Check out the detailed schedule for a week-by-week breakdown!</p>
                <p className='text-xs font-light'> </p>
              </div>
            </div>
    </li>
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Course name </h3>
        <div className='flex md:flex-row flex-col  h-full pb-5 justify-start '>
              <img className=' w-2/3 md:w-auto md:h-48 rounded-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-2/3  px-3'>
                <p className='text-md font-bold'>Accelerate your startup's journey in our 2-month program! From ideation to funding, our expert-led weekly sessions provide hands-on insights. Join us to ignite, build, and thrive. Check out the detailed schedule for a week-by-week breakdown!</p>
                <p className='text-xs font-light'> </p>
              </div>
            </div>
    </li>
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Course name </h3>
        <div className='flex md:flex-row flex-col  h-full pb-5 justify-start '>
              <img className=' w-2/3 md:w-auto md:h-48 rounded-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-2/3  px-3'>
                <p className='text-md font-bold'>Accelerate your startup's journey in our 2-month program! From ideation to funding, our expert-led weekly sessions provide hands-on insights. Join us to ignite, build, and thrive. Check out the detailed schedule for a week-by-week breakdown!</p>
                <p className='text-xs font-light'> </p>
              </div>
            </div>
    </li>
    <li class="mb-10 ms-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
            </svg>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Course name </h3>
        <div className='flex md:flex-row flex-col  h-full pb-5 justify-start '>
              <img className=' w-2/3 md:w-auto md:h-48 rounded-lg' src={demo1} alt="image" />
              <div className='flex  flex-col w-2/3  px-3'>
                <p className='text-md font-bold'>Accelerate your startup's journey in our 2-month program! From ideation to funding, our expert-led weekly sessions provide hands-on insights. Join us to ignite, build, and thrive. Check out the detailed schedule for a week-by-week breakdown!</p>
                <p className='text-xs font-light'> </p>
              </div>
            </div>
    </li>
</ol>



    </div>
    </div></div>
    
  )
}
