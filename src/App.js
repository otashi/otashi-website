import "./globals.css";

import { AppContextProvider } from "./context/context";

import { Header } from "./components/Header/";
import { IntroContainer } from "./sections/Intro";
import { AboutSection } from "./sections/About";
import { ServicesSection } from "./sections/Services";
import { ContactSection } from "./sections/Contact";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <main>
        <IntroContainer />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </AppContextProvider>
  );
}

export default App;
