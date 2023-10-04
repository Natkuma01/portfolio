import styles from './App.module.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Intro } from "./components/Intro/Intro";
import { About } from "./components/About/About";
import { Project } from "./components/Project/Project";
import { Skill } from "./components/Skill/Skill";




function App() {

  return (
    <div className={styles.App}>
      <Navbar /> 
      <Intro />
      <About />
      <Project />
      <Skill />
    </div>
   
  )
}

export default App
