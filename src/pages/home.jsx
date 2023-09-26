import { useEffect } from "react";
import etoiles from "../assets/images/etoiles.png";
import logolotte from "../assets/images/Logo-lotte-hero.png";
import thirdplan from "../assets/images/thirdplan.png";
import secondplan from "../assets/images/2ndplan.png";
import firstplan from "../assets/images/1erplan.png";

import Contact from "./contact";
import Portfolio from "./portfolio";
import About from "./about";

function Home() {
  useEffect(() => {
    const stars = document.getElementById("stars");
    const logolotte = document.getElementById("logolotte");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;
      stars.style.left = value + 0.25 + "px";
      logolotte.style.marginTop = value + 1.5 + "px";
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <img src={etoiles} alt="Stars" id="stars" />
        <img src={thirdplan} alt="Third Plan" id="thirdplan" />
        <img src={logolotte} alt="Logo Lotte" id="logolotte" />
        <img src={secondplan} alt="Second Plan" id="secondplan" />
        <img src={firstplan} alt="First Plan" id="premierplan" />
      </section>

      <About />

      <Portfolio />

      <Contact />
    </>
  );
}

export default Home;
