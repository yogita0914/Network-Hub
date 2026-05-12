import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Review from "./components/Review";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Review />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
