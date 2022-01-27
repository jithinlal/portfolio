import { useState } from "react";
import Modal from "react-modal";
import Skills from "./Skills";
import ModalContent from "./ModalContent";

Modal.setAppElement("#about");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Me</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, I am <span>Jithinlal</span>
              </h3>
              <p>
                I am a full stack web developer with more than 5 years of
                experience. I am from the beautiful state of Kerala in India. I
                code and create performant web apps for some amazing
                people/clients around the world. I like to learn new
                technologies, play chess and football.
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">What are my skills?</h3>
              <p className="desc">
                My go to language to solve a problem is javascript. And I am
                well versed with reactjs on the front end and nodejs on the back
                end. My other skills include Docker, Firebase, AWS, Laravel,
                Stripe, MongoDB, PostgreSQL, Nextjs, Redux, React Native,
                Github, Netlify etc...
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
              <div className="edina_tm_button">
                <button
                  className="color"
                  type="submit"
                  onClick={toggleModalOne}
                >
                  More about me...
                </button>
              </div>
            </div>
          </div>

          <div className="rightpart">
            <div className="image">
              <img src={"/img/thumbs/26-35.jpg"} alt="thumb" />

              <div
                className="main"
                style={{
                  backgroundImage: `url(${"/img/about/2.jpg"})`,
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              />

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>5+ years</h3>
                  <span>Of Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={"/img/svg/cancel.svg"} alt="close icon" />
          </button>

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default About;
