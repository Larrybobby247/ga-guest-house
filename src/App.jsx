import { useAOS } from './hooks/useAOS';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Listings from './sections/Listings';
import ParallaxCTA from './sections/ParallaxCTA';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  useAOS();

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Listings />
        <ParallaxCTA />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
