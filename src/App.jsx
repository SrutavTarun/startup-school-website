import { useContext, useEffect } from "react";
import Home from './components/Home'
import About from './components/About'
import Programs from './components/Programs'
import MentorsNew from './components/MentorsNew'
import ProgramsNew from "./components/ProgramsNew";

import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import Highlights from './components/Highlights'



function App() {

  return (
    <>
    <div className='flex flex-col w-screen'>
    {/* <h1>hello</h1>
      <Home/>
      <About/> */}
      <ProgramsNew/>
      <Highlights/>
      <MentorsNew />
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
      
    </>
  )
}

export default App
