
import Home from './components/Home'
import About from './components/About'
import Programs from './components/Programs'
import Highlights from './components/Highlights'
import Mentors from './components/Mentors'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

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
