/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Skills from "../components/skills";
import cvlotte from "../assets/images/cvLotte.png";
import cvDevWeb from "../assets/images/cvdev.png";

import { AnimationOnScroll } from "react-animation-on-scroll";

function About() {
  const [showCV, setShowCV] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  function toggleCV() {
    setShowCV(!showCV);
    setIsZoomed(false);
    setZoomLevel(1);
  }

  function toggleZoom() {
    setIsZoomed(!isZoomed);
    setZoomLevel(1);
  }

  function handleZoomIn() {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  }

  function handleZoomOut() {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
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
              <div className="cv-buttons">
                <button className="close-modal" onClick={toggleCV}>
                  X
                </button>
                <a href={cvDevWeb} download="CV_Laurene_DevWeb.png" className="download-cv-btn">
                  Télécharger
                </a>
                <button className="zoom-cv-btn" onClick={(e) => { e.stopPropagation(); toggleZoom(); }}>
                  Zoomer
                </button>
              </div>
            </div>
          )}

          {isZoomed && (
            <div className="zoom-modal-overlay" onClick={toggleZoom}>
              <div className="zoom-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="zoom-close" onClick={toggleZoom}>X</button>
                <div className="zoom-controls">
                  <button onClick={handleZoomOut} className="zoom-btn">-</button>
                  <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
                  <button onClick={handleZoomIn} className="zoom-btn">+</button>
                </div>
                <div className="zoom-image-container">
                  <img
                    src={cvDevWeb}
                    alt="CV agrandi"
                    style={{ transform: `scale(${zoomLevel})` }}
                    className="zoomed-cv"
                  />
                </div>
              </div>
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
