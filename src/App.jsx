import { Navbar } from "./components/Navbar/Navbar";
import Intro  from "./components/Intro/Intro";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Skill from "./components/Skill/Skill";
import MiniProject from "./components/miniProject/miniProject"
import { Routes, Route } from "react-router-dom"
import "./App.css"




function App() {

  return (
  <Routes>  
       
    <Route path="/portfolio" element={<>
    <Navbar />
    <Intro />
    <About />
    <Project />
    <Skill />
    </>} />
    <Route path="/portfolio/miniProject" element={<MiniProject />} />
    </Routes>
  )
}

export default App
