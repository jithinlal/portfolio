import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
// import ReactTooltip from "react-tooltip";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const projects = [
  {
    img: 1,
    name: "CBRE",
    category: "CMS",
    link: "https://www.cbre.com/",
  },
  {
    img: 2,
    name: "Connexa",
    category: "Device Dashboard",
    link: "https://www.connexa.com/",
  },
  {
    img: 3,
    name: "NextPort",
    category: "Building Management Solution",
    link: "https://www.nextportapp.com/",
  },
  {
    img: 4,
    name: "ENA Solution",
    category: "PWA web app",
    link: "https://enasolution.com/",
  },
  {
    img: 5,
    name: "Nucleonix",
    category: "Hybrid mobile app",
    link: "https://www.nucleonix.com/",
  },
  {
    img: 6,
    name: "All My Trainers",
    category: "Streaming service",
    link: "https://www.allmytrainers.com/",
  },
];

const Portfolio = () => {
  return (
    <div className="edina_tm_portfolio" id="portfolio">
      <div className="container">
        <div className="edina_tm_title">
          <h3>Portfolio</h3>
          <p>
            Here are some of the clients I proudly worked with during my course
            of professional career, to produce world class products:
          </p>
        </div>
        <div className="portfolio_inner my_carousel gallery_zoom">
          <ul data-aos="fade-right" data-aos-duration="1200">
            <Swiper
              navigation={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={3}
              className="mySwiper"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <li>
                    <div className="list_inner">
                      <div className="image">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="details"
                        >
                          <img
                            src={`/img/portfolio/${project.img}.png`}
                            data-tip={project.category}
                            data-for={project.category}
                            alt="portfolio"
                          />
                          {/*<ReactTooltip*/}
                          {/*  id={project.category}*/}
                          {/*  place="top"*/}
                          {/*  type="info"*/}
                          {/*  effect="float"*/}
                          {/*  className="tooltip-wrapper"*/}
                          {/*  key={index}*/}
                          {/*>*/}
                          {/*  <div>*/}
                          {/*    <h5>{project.name}</h5>*/}
                          {/*    <span>{project.category}</span>*/}
                          {/*  </div>*/}
                          {/*</ReactTooltip>*/}
                        </a>
                      </div>
                      <div className="news_details">
                        <span>{project.category}</span>
                        <h3 className="title">{project.name}</h3>
                      </div>
                    </div>
                  </li>
                </SwiperSlide>
              ))}
            </Swiper>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
