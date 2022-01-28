import SideBar from "./SideBar";
import Hero from "./Hero";
import { useEffect } from "react";
import About from "./About";
import Service from "./Service";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Contact from "./Contact";

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

      <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Portfolio</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>

          {/*<Portfolio />*/}
        </div>
      </div>

      <Testimonials />
      <Blog />

      <Contact />
    </div>
  );
};

export default Home;
