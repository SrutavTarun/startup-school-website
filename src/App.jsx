import { useContext, useEffect } from "react";
import Home from './components/Home'
import About from './components/About'
import Programs from './components/Programs'
import MentorsNew from './components/MentorsNew'

import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {client} from './client'
import {DataContext} from './context'
import './App.css'
import Highlights from './components/Highlights'



function App() {
  const { mentors, setMentorData } =
    useContext(DataContext);

    useEffect(() => {
      
      const fetchData = async () => {
  
        //mentors
        await client
          .fetch(`*[_type == "mentors"] | order(_createdAt desc)`)
          .then((data) => {
            // console.log(data);
            setMentorData(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      fetchData();
    }, []);

  return (
    <>
    <div className='flex flex-col w-screen'>
    {/* <h1>hello</h1>
      <Home/>
      <About/> */}
      <Programs/>
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
