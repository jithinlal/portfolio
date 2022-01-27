import SideBar from "./SideBar";
import Hero from "./Hero";
import { useEffect } from "react";
import About from "./About";
import Service from "./Service";

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

      <div className="edina_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Testimonials</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="list ">
            <ul>{/*<Testimonial />*/}</ul>
          </div>
        </div>
      </div>

      <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          {/*<Blog />*/}
        </div>
      </div>

      <div className="edina_tm_contact" id="contact">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Contact</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="extra_info">{/*<Address />*/}</div>
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  I am always open to discussing product
                  <br />
                  <span> design work or partnerships.</span>
                </p>
              </div>
              <div className="fields">{/*<Contact />*/}</div>
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              {/*<Map />*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
