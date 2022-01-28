import dynamic from "next/dynamic";
import { useState } from "react";
// @ts-ignore
// import ScrollspyNav from "react-scrollspy-nav";

const ScrollspyNav = dynamic(() => import("react-scrollspy-nav"), {
  ssr: false,
});

const logo = "logo";
const logo2 = "logo";

const sideBarContent = [
  { icon: "home", itemName: "Home", itemRoute: "#home", activeClass: "active" },
  { icon: "human", itemName: "About", itemRoute: "#about", activeClass: "" },
  {
    icon: "service",
    itemName: "Area of Expertise",
    itemRoute: "#service",
    activeClass: "",
  },
  {
    icon: "portfolio",
    itemName: "Portfolio",
    itemRoute: "#portfolio",
    activeClass: "",
  },
  {
    icon: "testimonial",
    itemName: "Testimonial",
    itemRoute: "#testimonial",
    activeClass: "",
  },
  { icon: "blog", itemName: "Blog", itemRoute: "#blog", activeClass: "" },
  {
    icon: "contact",
    itemName: "Contact",
    itemRoute: "#contact",
    activeClass: "",
  },
];

const sideBarFooterContent = {
  avatar: "/img/about/avatar.jpg",
  name: "Jithinlal",
  email: "jithinlal@protonmail.com",
  emailRef: "mailto:jithinlal@protonmail.com",
};

const SideBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="mob-header">
        <button className="toggler-menu" onClick={handleClick}>
          <div className={click ? "active" : ""}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div
        className={click ? "edina_tm_sidebar menu-open" : "edina_tm_sidebar"}
      >
        <div className="sidebar_inner">
          <div className="logo">
            <>
              <img
                className="logo_dark"
                src={`/img/logo/${logo}.png`}
                alt="brand"
              />
              <img
                className="logo_light"
                src={`/img/logo/${logo2}.png`}
                alt="brand"
              />
            </>
          </div>
          <div className="menu">
            <ScrollspyNav
              // @ts-ignore
              scrollTargetIds={[
                "home",
                "about",
                "service",
                "portfolio",
                "testimonial",
                "blog",
                "contact",
              ]}
              activeNavClass="active"
              offset={0}
              scrollDuration="100"
            >
              <ul className="anchor_nav">
                {sideBarContent.map((value, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <a
                        href={value.itemRoute}
                        className={value.activeClass}
                        onClick={handleClick}
                      >
                        <img
                          src={`/img/svg/${value.icon}.svg`}
                          alt="icon"
                          className="svg custom"
                        />
                        {value.itemName}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollspyNav>
          </div>
          <div className="author">
            <div className="inner">
              <div className="image">
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${sideBarFooterContent.avatar})`,
                  }}
                />
              </div>
              <div className="short">
                <h3>{sideBarFooterContent.name}</h3>
                <a href={sideBarFooterContent.emailRef}>
                  {sideBarFooterContent.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
