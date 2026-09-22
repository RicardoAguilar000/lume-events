import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";
import Feature from './components/sections/Feature';
import Contact from './components/sections/Contact';
import Contact from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Gallery/>
      <Feature />
      <Contact/>   
      <footer/> 
    </div>
  );
}

export default App;
