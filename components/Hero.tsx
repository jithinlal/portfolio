import { Fragment } from "react";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import Social from "./Social";

dayjs.extend(RelativeTime);

const heroContent = {
  shapeImage: "hero-shape",
  heroImage: 2,
  name: "Jithinlal",
  description: (
    <Fragment>
      Hi, I am <b>Jithin</b>. A <b>team lead</b> and a{" "}
      <b>full stack web developer</b> with more than{" "}
      <b>{dayjs("2017-10-01").fromNow(true)}</b> of experience, who loves to
      work with javascript libraries and frameworks such as <i>Node.js</i> and{" "}
      <i>Reactjs</i>. And always on a lookout for new challenges and things to
      learn...
    </Fragment>
  ),
};

const Hero = () => {
  return (
    <div className="edina_tm_hero" id="home">
      <div className="content">
        <div className="img-shape" data-aos="fade-up" data-aos-duration="1200">
          <img
            src={`/img/hero/${heroContent.shapeImage}`}
            srcSet={`/img/hero/${heroContent.heroImage}.jpg`}
            alt="Hero image"
          />
        </div>
        <div className="extra">
          <h1
            className="name"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            {heroContent.name}
          </h1>
          <p
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            {heroContent.description}
          </p>
          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <Social />
          </div>
          <div
            className="edina_tm_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <a href={"/img/Resume.pdf"} download className="color">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
