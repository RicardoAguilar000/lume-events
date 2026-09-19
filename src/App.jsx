import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/hero";
import Services from "./components/sections/Services";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
