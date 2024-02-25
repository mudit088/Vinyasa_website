import { useState } from 'react'
import './App.css'
import Front from './Components/Front'
import About from './Components/About'
import Timeline from './Components/Timeline'
import Team from './Components/Team'
import Footer from './Components/Footer'
import Eventt from './Components/Eventt'

// import Particle from './Components/Particle'




function App() {
  

  return (
    <div>
     {/* <Particle/> */}
      <Front/>
      <About/>
      <Eventt/>
      <Timeline/>
      <Team/>
      <Footer/>
    </div>
  )
}

export default App
