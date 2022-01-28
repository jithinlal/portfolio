import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialContent = [
  {
    img: "1",
    desc: `Jithin is one of those talents who is strong enough to understand and solve almost any tech challenges thrown at him. He is also passionate in helping and teaching others in improving the skills. He will always remain as one of my go-to person for any tech challenges where I need a helping hand.`,
    name: "Vinay Vinod Marar",
    designation: "Associate VP of Tech @ NeoITO",
    delayAnimation: "",
  },
  {
    img: "2",
    desc: `Jithin is one of those guys who is always ready to meet the next challenge. He is very passionate about what he does and succeeds in outdoing himself the next time. Also a very patient and great mentor to others around him - he doesnt stay away from any moment to pass on knowledge. A technology enthusiast and an amazing teacher combined. Real pleasure working with him.`,
    name: "Akash J Nair",
    designation: "Project Manager @ NeoITO",
    delayAnimation: "100",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          slidesToShow: 1,
          speed: 300,
        },
      },
    ],
  };
  return (
    <div className="edina_tm_testimonials" id="testimonial">
      <div className="container">
        <div className="edina_tm_title">
          <h3>Testimonials</h3>
          <p>Here is what some of my work colleagues got to tell about me:</p>
        </div>
        <div className="list ">
          <ul>
            <Slider {...settings}>
              {testimonialContent.map((testimonial, index) => (
                <li
                  key={index}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={testimonial.delayAnimation}
                >
                  <div className="list_inner">
                    <div className="details">
                      <div className="author">
                        <div className="image">
                          <div
                            className="main"
                            style={{
                              backgroundImage: `url(/img/testimonials/${testimonial.img}.jpg)`,
                            }}
                          />
                        </div>

                        <div className="short">
                          <h3>{testimonial.name}</h3>
                          <span>{testimonial.designation}</span>
                        </div>
                      </div>

                      <div className="icon">
                        <img
                          src={"/img/svg/quote.svg"}
                          alt="quote"
                          className="svg"
                        />
                      </div>
                    </div>

                    <div className="text">{testimonial.desc}</div>
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
