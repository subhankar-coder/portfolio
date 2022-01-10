import About from "./components/About";
import { Contact } from "./components/Contact";
import Projects from "./components/Projects";
import { Skills } from "./components/Skills";
import { Form } from "./components/Form";
function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <About />
      <Projects />
      <Skills />
      <Form />
      <Contact />
    </main>
  )}

export default App;
