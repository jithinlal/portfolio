import type { NextPage } from "next";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "../components";
import Title from "../components/Title";

// @ts-ignore
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const ScrollToTop = dynamic(() => import("../components/ScrollToTop"), {
  ssr: false,
});

const Index: NextPage = () => {
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
      <ScrollToTop />
      <Home />
    </>
  );
};

export default Index;
