import Tilt from "react-parallax-tilt";

const Service = () => {
  return (
    <div className="edina_tm_services" id="service">
      <div className="container">
        <div className="edina_tm_title">
          <h3>What I Do</h3>
          <p>My Area of Expertise, lies mainly on the below items:</p>
        </div>
        <div className="service_list">
          <ul>
            <li data-aos="fade-right" data-aos-duration="1200">
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img src={"/img/svg/1.svg"} alt="" className="svg custom" />
                    <div className="service_title">
                      <h3>Backend Development</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img src={"/img/svg/2.svg"} alt="" className="svg custom" />
                    <div className="service_title">
                      <h3>Frontend Development</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img src={"/img/svg/3.svg"} alt="" className="svg custom" />
                    <div className="service_title">
                      <h3>Hybrid Mobile App</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <Tilt>
                <div className="list_inner">
                  <div className="hover">
                    <img src={"/img/svg/4.svg"} alt="" className="svg custom" />
                    <div className="service_title">
                      <h3>Mentor/Open Source Dev</h3>
                    </div>
                  </div>
                </div>
              </Tilt>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
