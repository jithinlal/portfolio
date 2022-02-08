import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const projects = [
  {
    img: 1,
    name: "Github Battle",
    link: "https://battle.jithinlal.dev/",
    technologies: ["react", "react router", "GitHub api", "netlify", "redux"],
  },
  {
    img: 2,
    name: "Todo",
    link: "https://todo.jithinlal.dev/",
    technologies: ["firebase", "heroku", "nodejs", "elephantsql", "postgres"],
  },
  {
    img: 3,
    name: "Trade",
    link: "https://trade.jithinlal.dev/",
    technologies: ["react", "firebase", "firestore", "chartjs"],
  },
  {
    img: 4,
    name: "XandY",
    link: "https://xandy.jithinlal.dev/",
    technologies: ["react", "reducer", "javascript", "supabase", "react-hooks"],
  },
  {
    img: 5,
    name: "Korpus",
    link: "https://korpus.jithinlal.dev/",
    technologies: [
      "react",
      "zustand",
      "nextjs",
      "supabase",
      "chakra-ui",
      "responsive-design",
    ],
  },
];

const Portfolio = () => {
  return (
    <div
      className="edina_tm_portfolio"
      id="portfolio"
      style={{
        backgroundColor: "#f5f8fc",
      }}
    >
      <div className="container">
        <div className="edina_tm_title">
          <h3>Portfolio</h3>
          <p>
            Checkout some of my cool works that I did, while learning a lot of
            the technologies that I am familiar with today:
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
                            src={`/img/projects/${project.img}.png`}
                            alt="portfolio"
                          />
                        </a>
                        <div className="news_details">
                          <span
                            style={{
                              padding: 5,
                            }}
                          >
                            {project.technologies.join(", ")}
                          </span>
                        </div>
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
