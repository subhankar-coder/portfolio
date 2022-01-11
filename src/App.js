import About from "./components/About";
import { Contact } from "./components/Contact";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import { Form } from "./components/Form";
import { NavBar } from "./components/NavBar";
import {useEffect} from "react";
function App() {
  useEffect(() => {
    document.title="Subhankar's Portfolio"
  }, []);
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Form />
      <Contact />
    </main>
  )}

export default App;
