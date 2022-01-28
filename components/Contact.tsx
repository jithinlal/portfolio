import { FiLinkedin, FiRss } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="edina_tm_contact" id="contact">
      <div className="container">
        <div className="edina_tm_title">
          <h3>Contact</h3>
          <p>
            You can contact me through email or LinkedIn. And why not, a word of
            encouragement at my{" "}
            <a
              href="https://jithin-lal.blogspot.com"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
              }}
            >
              <span style={{ color: "red" }}>blog</span>
            </a>{" "}
            :
          </p>
        </div>
        <div className="extra_info">
          <ul className="wrapper">
            <li data-aos="fade-right" data-aos-duration="1200">
              <div className="list_inner">
                <div className="icon">
                  <FiLinkedin color="white" />
                </div>
                <div className="content">
                  <h3>LinkedIn</h3>
                  <ul>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/jithinlal-pr"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Jithinlal P R
                      </a>
                    </li>
                  </ul>
                </div>{" "}
              </div>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="list_inner">
                <div className="icon">
                  <img src={"img/address/email.png"} alt="icon" />
                </div>
                <div className="content">
                  <h3>Email</h3>
                  <ul>
                    <li>
                      <a href="mailto:jithinlal@protonmail.com">
                        jithinlal@protonmail.com
                      </a>
                    </li>
                  </ul>
                </div>{" "}
              </div>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="list_inner">
                <div className="icon">
                  <FiRss color="white" />
                </div>
                <div className="content">
                  <h3>Blog</h3>
                  <ul>
                    <li>
                      <a
                        href="https://jithin-lal.blogspot.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Facade
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
