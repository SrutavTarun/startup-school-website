import { useContext, useEffect } from "react";
import Home from './components/Home'
import About from './components/About'
import Programs from './components/Programs'
import Highlights from './components/Highlights'
import Mentors from './components/Mentors'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {client} from './client'
import {DataContext} from './context'
import './App.css'

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
      <Home/>
      <About/>
      <Programs/>
      <Highlights/>
      <Mentors/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
      
    </>
  )
}

export default App
