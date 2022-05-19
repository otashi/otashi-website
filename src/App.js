import "./globals.css";

import { Header } from "./components/Header/";
import { IntroContainer } from "./sections/Intro";
import { AboutSection } from "./sections/About";
import { ServicesSection } from "./sections/Services";
import { ContactSection } from "./sections/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <IntroContainer />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <footer>
        <img src="" alt="Otashi" />
      </footer>
    </>
  );
}

export default App;
