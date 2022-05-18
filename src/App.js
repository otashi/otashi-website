import "./globals.css";

import { Header } from "./components/Header/";
import { IntroContainer } from "./sections/Intro";
import { AboutSection } from "./sections/About";
import { ServicesSection } from "./sections/Services";

function App() {
  return (
    <>
      <Header />
      <main>
        <IntroContainer />
        <AboutSection id="about-us" />
        <ServicesSection />
        <section id="value-proposition"></section>
        <section id="contact"></section>
      </main>
      <footer>
        <img src="" alt="Otashi" />
      </footer>
    </>
  );
}

export default App;
