import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Testimonials from './Components/Testimonials/Testimonials'
import Videoplayer from './Components/VideoPlayer/Videoplayer'
import Heatmapn from './Components/heatmap/Heatmapn'
import Research from './Components/Research/Research'

function App() {
  const [playstate, setplaystate] = useState(false);
  return (
    <>
      <Navbar />
      <Hero />
      <div className="containe">
        <Programs />
        <About setplaystate={setplaystate} />
        <Campus />
         <Heatmapn />
           <Research/>
        <Testimonials />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playstate={playstate} setplaystate={setplaystate} />
    </>
  )
}

export default App
