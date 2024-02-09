import React from 'react';
import Logo from "../assets/startupschoolwhitelogo.svg"

export default function Footer() {
  const bg = {
    backgroundColor: '#262626',
  };

  const textCol = {
    color: '#727271',
    cursor: 'pointer',
  };

  const foot = {
    val : {
      display: 'flex',
      top: '0rem',

    },
    container: {
      display: 'flex',
      // other common styles
  
      // Media query for screens with a maximum width of 768px
      '@media (max-width: 768px)': {
        flexDirection: 'column',
      },
  
      // Media query for screens with a minimum width of 768px
      '@media (min-width: 768px)': {
        flexDirection: 'row',
      },
    },
  };

  return (
    <>
      <div style={bg} className="">
        <div className="flex flex-col lg:flex-row px-4 lg:px-10 py-5 lg:py-10 mx-4 lg:mx-20 justify-between items-center">
          <div className="mb-5 lg:mb-0 lg:mr-10">
            <img src={Logo} alt="logo" />
          </div>
          <div style={foot.container} className="justify-center items-center">
            <div style={foot.val} className="flex flex-col px-4 lg:px-10 mb-5 lg:mb-0">
              <a style={textCol} className='hover:underline lg:mr-5' href="#about">About us</a>
              <a style={textCol} className='hover:underline lg:mr-5' href="#programs">Programs</a>
              <a style={textCol} className='hover:underline lg:mr-5' href="#highlights">Highlights</a>
              <a style={textCol} className='hover:underline lg:mr-5' href="#faq">FAQ</a>
              {/* <a style={textCol} className='hover:underline' href="#">Contact</a> */}
            </div>
            <div style={foot.val} className="flex flex-col px-4 lg:px-10 ">
              <a style={textCol} className='hover:underline lg:mr-5' href="#">LinkedIn</a>
              <a style={textCol} className='hover:underline lg:mr-5' href="#">Instagram</a>
              <a style={textCol} className='hover:underline lg:mr-5' href="#">Twitter</a>
              <a style={textCol} className='hover:underline' href="#">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
