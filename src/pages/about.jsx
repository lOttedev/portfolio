/* eslint-disable react/no-unescaped-entities */
import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Skills from "../components/skills";
import cvlotte from "../assets/images/cvLotte.png";
import cvDevWeb from "../assets/images/cvdev.png";

const ZOOM_FACTOR = 2.5;
const LENS_SIZE = 320;

function About() {
  const [showCV, setShowCV] = useState(false);
  const [magnifier, setMagnifier] = useState({ show: false });
  const [cvOrigin, setCvOrigin] = useState(null);
  const [isCvClosing, setIsCvClosing] = useState(false);
  const [isOwlVisible, setIsOwlVisible] = useState(false);
  const cvRef = useRef(null);
  const cvContainerRef = useRef(null);
  const owlRef = useRef(null);

  useEffect(() => {
    const el = owlRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsOwlVisible(entry.isIntersecting),
      { rootMargin: "-15% 0px -15% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function openCV(event) {
    if (event) {
      const rect = event.currentTarget.getBoundingClientRect();
      setCvOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      });
    }
    setShowCV(true);
    setMagnifier({ show: false });
  }

  function closeCV() {
    setIsCvClosing(true);
    setMagnifier({ show: false });
    setTimeout(() => {
      setShowCV(false);
      setIsCvClosing(false);
    }, 300);
  }

  function toggleCV(event) {
    if (showCV) {
      closeCV();
    } else {
      openCV(event);
    }
  }

  useLayoutEffect(() => {
    if (showCV && cvOrigin && cvRef.current && cvContainerRef.current) {
      const el = cvRef.current;
      const containerRect = cvContainerRef.current.getBoundingClientRect();
      const boxLeft = containerRect.left + el.offsetLeft;
      const boxTop = containerRect.top + el.offsetTop;
      el.style.transformOrigin = `${cvOrigin.x - boxLeft}px ${cvOrigin.y - boxTop}px`;
    }
  }, [showCV, cvOrigin]);

  function handleCvMouseMove(e) {
    const rect = cvRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      setMagnifier((m) => ({ ...m, show: false }));
      return;
    }
    setMagnifier({
      show: true,
      left: e.clientX,
      top: e.clientY,
      bgWidth: rect.width * ZOOM_FACTOR,
      bgHeight: rect.height * ZOOM_FACTOR,
      bgX: -(x * ZOOM_FACTOR - LENS_SIZE / 2),
      bgY: -(y * ZOOM_FACTOR - LENS_SIZE / 2),
    });
  }

  function handleCvMouseLeave() {
    setMagnifier((m) => ({ ...m, show: false }));
  }

  return (
    <div>
      <section className="sec" id="about">
        <h2>Enchantée, moi c'est Laurène</h2>
        <div className="texte">
          <p>
            Designer et développeuse front-end, j'aime donner forme aux idées
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
          <div
            ref={owlRef}
            className={`cvlotte ${isOwlVisible ? "owl-in" : ""}`}
          >
            <button type="button" onClick={toggleCV} id="buttoncv">
              <img src={cvlotte} alt="cv Lotte" id="cvlotte" />
            </button>
          </div>
          {showCV && (
            <div
              className={`cv ${isCvClosing ? "closing" : ""}`}
              ref={cvContainerRef}
            >
              <img
                src={cvDevWeb}
                alt="cv en pdf"
                id="cv"
                ref={cvRef}
                className={isCvClosing ? "closing" : ""}
                onMouseMove={(e) => {
                  e.stopPropagation();
                  handleCvMouseMove(e);
                }}
                onMouseLeave={handleCvMouseLeave}
              />
              <div className="cv-buttons">
                <button
                  className="close-modal"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeCV();
                  }}
                >
                  X
                </button>
                <a
                  href={cvDevWeb}
                  download="CV_Laurene_DevWeb.png"
                  className="download-cv-btn"
                >
                  Télécharger
                </a>
              </div>
            </div>
          )}

          {magnifier.show && (
            <div
              className="magnifier-lens"
              style={{
                left: magnifier.left,
                top: magnifier.top,
                backgroundImage: `url(${cvDevWeb})`,
                backgroundSize: `${magnifier.bgWidth}px ${magnifier.bgHeight}px`,
                backgroundPosition: `${magnifier.bgX}px ${magnifier.bgY}px`,
              }}
            />
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
