import SideBar from "./SideBar";
import Hero from "./Hero";
import { useEffect } from "react";
import About from "./About";
import Service from "./Service";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";
import Projects from "./Projects";
import Portfolio from "./Portfolio";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("light");
  }, []);
  return (
    <div className="home-light edina_tm_mainpart" id="#root">
      <SideBar />
      <Hero />
      <About />
      <Service />
      <Projects />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
