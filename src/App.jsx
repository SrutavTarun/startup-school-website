import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import About from './components/About'
import Programs from './components/Programs'
import MentorsNew from './components/MentorsNew'
import ProgramsNew from "./components/ProgramsNew";
import ProgramsNew2 from "./components/ProgramsNew2";
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Highlights from './components/Highlights'

import './App.css'



function App() {

  return (
    <>
    <div className='flex flex-col w-screen'>
      <Navbar/>
      <Home/>
      <About/>
      <ProgramsNew2/>
      <Highlights/>
      <MentorsNew />
      <Faq/>
      {/* <Contact/> */}
      <Footer/>
    </div>
      
    </>
  )
}

export default App
