import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Education from "./components/sections/Education";
import OpenSource from "./components/sections/OpenSource";




function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About/>
        <Skills />
        <Projects />
        <Education />
        <OpenSource />
        {/* Upcoming portfolio sections will go here */}
      </main>
    </>
  );
}

export default App;