import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About/>
        <Skills />

        {/* Upcoming portfolio sections will go here */}
      </main>
    </>
  );
}

export default App;