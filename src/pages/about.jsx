/* eslint-disable react/no-unescaped-entities */
import Skills from "../components/skills";
import cvlotte from "../assets/images/cvLotte.png"
import cvDevWeb from "../assets/images/cvdev.png"

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useState } from "react";

function About () {
  const [showCV, setShowCV] = useState(false);

  function toggleCV() {
    setShowCV(!showCV);
  }

    return(
      <div>
        <section className="sec" id="about">
        <h2>Bonjour !</h2>
        <div className="lottedescription">
        <AnimationOnScroll animateIn="bounceInRight" animateOut="bounceOutRight" className="cvlotte" style={{ animationDuration: '2s' }}>
        <button type="button" onClick={toggleCV} id="buttoncv">
          <img src={cvlotte} alt="cv Lotte" id="cvlotte" />
          </button>
          </AnimationOnScroll>
          {showCV && (
            <div className="cv">
            <img src={cvDevWeb} alt="cv en pdf" id="cv"/>
            <button className="close-modal" onClick={toggleCV}>
              X
            </button>
            </div>
          )}
          <div className="texte">
            <p>
           
 Je suis Laurène, développeuse web et fondatrice de l'entreprise LOtte spécialisée dans le web et le design. Avec un master en design couleur et matière, j'ai acquis une solide expertise en design graphique. Mon parcours m'a également conduit à explorer ma passion pour le développement web, où je combine créativité et résolution de problèmes techniques.

J'adore intégrer des illustrations uniques dans mes projets pour y apporter une touche artistique. Si vous cherchez à donner vie à votre vision en ligne, n'hésitez pas à me contacter. Ensemble, nous pouvons créer quelque chose d'exceptionnel qui reflète parfaitement votre identité.            </p>
          </div>
        </div>
   
      <h2> ... Voici mes outils de travail</h2>
      <Skills />
      </section>
      </div>
    )
}

export default About;