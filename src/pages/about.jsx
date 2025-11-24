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
        <h2>Bonjour !</h2>
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

          <div className="texte">
            <p>
              Je suis Laurène, développeuse web front-end et designer.
              Détentrice master en design couleur et matière, j'ai acquis une
              solide expertise en design graphique mais aussi dans
              l'illustration et le motion design. Mon parcours m'a également
              conduit à explorer le développement où je combine créativité et
              résolution de problèmes techniques. J'adore intégrer des
              illustrations uniques dans mes projets pour y apporter une touche
              artistique. Si vous cherchez à donner vie à votre projet en ligne,
              n'hésitez pas à me contacter. Ensemble, nous pouvons créer quelque
              chose d'exceptionnel qui reflète parfaitement votre identité.{" "}
              <br />
              Pour voir mon CV, vous pouvez cliquer sur la chouette.{" "}
            </p>
          </div>
        </div>

        <div className="skills-eggs">
          <h2> ... Voici mes outils de travail</h2>
          <Skills />
        </div>
      </section>
    </div>
  );
}

export default About;
