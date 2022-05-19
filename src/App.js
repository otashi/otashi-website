import "./globals.css";

import { Header } from "./components/Header/";
import { IntroContainer } from "./sections/Intro";
import { AboutSection } from "./sections/About";
import { ServicesSection } from "./sections/Services";
import { ContactSection } from "./sections/Contact";
import { Footer } from "./sections/Footer";

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
      <Footer />
    </>
  );
}

export default App;
