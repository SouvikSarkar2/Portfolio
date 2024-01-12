import { useEffect, useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import TechStack from "./components/services/Services";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const customLoaderTimeout = setTimeout(() => {
      setLoading(false);
    }, 6000);
    return () => clearTimeout(customLoaderTimeout);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Cursor />
          <section id="Homepage">
            <Navbar />
            <Hero />
          </section>
          <section id="Services">
            <Parallax type="services" />
          </section>
          <section>
            <TechStack />
          </section>
          <span id="Projects" />
          <Projects />
          <section id="Contact">
            <Contact />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
