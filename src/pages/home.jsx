import { useEffect } from "react";
import etoiles from "../assets/images/etoiles.png";
import logolotte from "../assets/images/Logo-lotte-hero.png";
import thirdplan from "../assets/images/thirdplan.png";
import secondplan from "../assets/images/2ndplan.png";
import firstplan from "../assets/images/1erplan.png";

import Contact from "./contact";
import Portfolio from "./portfolio";
import About from "./about";
import FloatingDots from "../components/FloatingDots";
import FloatingDots2 from "../components/FloatingDots2";

function Home() {
  useEffect(() => {
    const stars = document.getElementById("stars");
    const logolotte = document.getElementById("logolotte");
    const thirdplan = document.getElementById("thirdplan");
    const secondplan = document.getElementById("secondplan");
    const hero = document.querySelector(".hero");

    const handleScroll = () => {
      let value = window.scrollY;
      stars.style.left = value * 0.25 + "px";
      logolotte.style.marginTop = value * 1.5 + "px";
      thirdplan.style.top = value * 0.35 + "px";
      secondplan.style.top = value * 0.5 + "px";
      hero.style.backgroundPositionY = value * 0.2 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <img src={etoiles} alt="Stars" id="stars" />
        <img src={thirdplan} alt="Third Plan" id="thirdplan" />
        <FloatingDots count={15} />
        <img src={logolotte} alt="Logo Lotte" id="logolotte" />
        <img src={secondplan} alt="Second Plan" id="secondplan" />
        <img src={firstplan} alt="First Plan" id="premierplan" />
        <FloatingDots2 count={10} />
      </section>

      <About />

      <Portfolio />

      <Contact />
    </>
  );
}

export default Home;
