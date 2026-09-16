import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Doctors from "../components/Doctors";
import WhyChooseUs from "../components/WhyChooseUs";
import Facilities from "../components/Facilities";
import Appointment from "../components/Appointment";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

function Home({ isDarkMode, onThemeToggle }) {
  return (
    <>
      <Navbar isDarkMode={isDarkMode} onThemeToggle={onThemeToggle} />

      <Hero />

      <About /> 
      <Services />

      <WhyChooseUs />

      <Doctors />

      <Facilities />
      <Gallery />

      <Appointment />

      <Contact />

      <Footer />
    </>
  );
}

export default Home;