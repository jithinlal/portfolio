import Link from "next/link";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Title from "../components/Title";

// @ts-ignore
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const FourNotFour = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Title />
      <AnimatedCursor
        // @ts-ignore
        innerSize={8}
        outerSize={44}
        color="52, 73, 94"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.4}
      />
      <div className="error_page">
        <div
          className="hero bg-image"
          style={{
            backgroundImage: `url(/img/1.jpg)`,
          }}
        >
          <div className="content">
            <h1 data-aos="fade-up" data-aos-duration="1200">
              404!
            </h1>
            <p data-aos="fade-up" data-aos-duration="1200" data-aos-delay="50">
              The page you are looking for could not be found
            </p>

            <div
              className="edina_tm_button"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <Link href="/">
                <a> BACK HOME</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourNotFour;
