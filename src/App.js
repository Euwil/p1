import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/about-us/AboutUs";
import Services from "./components/services/Services";
import OurTeam from "./components/our-team/OurTeam";
import Partners from "./components/partners/Partners";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Hero />
      <AboutUs />
      <Services />
      <OurTeam />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
