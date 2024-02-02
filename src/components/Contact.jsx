import React from 'react';

export default function Contact() {
  const bg = {
    paddingTop: '2rem',
    backgroundColor: '#2d2d2d',
    minHeight: '75vh',
  };

  const bg1 = {
    backgroundColor: '#4b4b4b',
  };
  const textOrange = {
    color: '#F56E0F'
  };

  const textWhite = {
    color: '#fff'
  };



  const bgbuttn = {
    backgroundColor: '#F56E0F',
    color: '#fff',
    marginBottom: '2rem',
  };

  return (
    
      <div style={bg} className="w-full flex flex-col items-center justify-center ">
        <p style={textOrange} className='my-4 helvetic-nue text-orange-500 text-2xl md:text-3xl tracking-wider text-center'>CONTACT</p>
        <p style={textWhite} className='mb-3 space-grotesk text-white font-bold text-3xl md:text-4xl lg:text-5xl text-center leading-8 lg:leading-10'>Any further queries ?</p>

        <form action="" method="">

          <div className="flex flex-col items-center justify-center space-y-5 mt-5">

            <div className="flex flex-col items-center justify-center space-y-4">

              <input style={bg1} className="helvetic-nue hover:outline-none hover:ring-2 hover:ring-gray-300 hover:border-transparent w-3/4 lg:w-full rounded peer block h-14 lg:h-16 border-0 bg-transparent py-2 lg:py-3 px-5 leading-6 lg:leading-7 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-white" type="text" placeholder="Name" />

              <input style={bg1} className="helvetic-nue hover:outline-none hover:ring-2 hover:ring-gray-300 hover:border-transparent w-3/4 lg:w-full rounded peer block h-14 lg:h-16 border-0 bg-transparent py-2 lg:py-3 px-5 leading-6 lg:leading-7 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-white" type="email" placeholder="Email" />

              <textarea style={bg1} className="helvetic-nue hover:outline-none hover:ring-2 hover:ring-gray-300 hover:border-transparent w-3/4 lg:w-full rounded peer block h-48 lg:h-60 border-0 bg-transparent py-4 lg:py-5 px-5 leading-6 lg:leading-7 outline-none transition-all duration-200 ease-linear placeholder:helvetic-nue focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-white resize-none" name="" id="" cols="90" rows="10" placeholder="Message"></textarea>

            </div>

            <button style={bgbuttn} className=" space-grotesk w-32 lg:w-40 h-14 lg:h-16 bg-orange-500 text-white font-bold text-lg lg:text-2xl tracking-wider">SEND</button>

          </div>
        </form>
      </div>
    
  )
}
