import About from "./components/About";
import { Contact } from "./components/Contact";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import { Form } from "./components/Form";
import { NavBar } from "./components/NavBar";
import {useEffect,useState} from "react";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Scroll from "./components/Scroll";
function App() {
    useEffect(()=>{
      document.title="Subhankar's PortFolio 🌎"

    },[]);
  return (
  
      <main className="text-gray-400 bg-gray-900 body-font">
        <NavBar />
        <About />
        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
        <Form />
        <Contact />
        <Scroll />
        
      </main>
  )}

export default App;
