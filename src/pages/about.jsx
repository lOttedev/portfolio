/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Skills from "../components/skills";
import cvlotte from "../assets/images/cvLotte.png";
import cvDevWeb from "../assets/images/cvdev.png";

import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  const [showCV, setShowCV] = useState(false);

  function toggleCV() {
    setShowCV(!showCV);
  }

  return (
    <div>
      <section className="sec" id="about">
        <h2>Enchantée, moi c'est Laurène</h2>
        <div className="texte">
          <p>
            Développeuse front-end et designer, j'aime donner forme aux idées
            jusqu'à ce qu'elles deviennent évidentes, fluides… et visuellement
            impactantes.
            <br />
            Issue d'un master en design couleur et matière, j'ai bâti un univers
            où se rencontrent design graphique, illustration, motion design et
            développement web. J'aime créer des interfaces qui respirent,
            raconter des histoires en images, et glisser dans mes projets des
            détails graphiques qui font toute la différence.
            <br />
            Mon approche : un mélange assumé de créativité, de logique et
            d'expérimentation. Mon objectif : créer des expériences en ligne
            uniques, sensibles et cohérentes avec votre identité.
            <br />
            Vous avez un projet à faire exister ? Parlons-en. Construisons
            ensemble quelque chose de véritablement singulier.{" "}
          </p>
        </div>
        <div className="lottedescription" onClick={toggleCV}>
          <AnimationOnScroll
            animateIn="bounceInRight"
            animateOut="bounceOutRight"
            className="cvlotte"
            style={{ animationDuration: "1.5s" }}
          >
            <button type="button" onClick={toggleCV} id="buttoncv">
              <img src={cvlotte} alt="cv Lotte" id="cvlotte" />
            </button>
          </AnimationOnScroll>
          {showCV && (
            <div className="cv">
              <img src={cvDevWeb} alt="cv en pdf" id="cv" />
              <button className="close-modal" onClick={toggleCV}>
                X
              </button>
            </div>
          )}
        </div>

        <div className="skills-eggs">
          <h2> ... Mes outils de travail</h2>
          <Skills />
        </div>
      </section>
    </div>
  );
}

export default About;
