import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import HouseLotte from "../components/Lottehouse";
import logoSite from "../assets/siteWeb";

function Portfolio() {
  const [selectedSite, setSelectedSite] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [zoomedMockupIndex, setZoomedMockupIndex] = useState(null);
  const modalRef = useRef(null);
  const swipeStartXRef = useRef(null);

  const mockupList = selectedSite
    ? [
        ...(selectedSite.desktopMockups || []).map((src, i) => ({
          src,
          alt: `Maquette ordinateur ${i + 1}`,
        })),
        ...(selectedSite.mobileMockups || []).map((src, i) => ({
          src,
          alt: `Maquette mobile ${i + 1}`,
        })),
        ...(selectedSite.otherAssets || []).map((src, i) => ({
          src,
          alt: `Élément graphique ${i + 1}`,
        })),
      ]
    : [];

  function showNextMockup() {
    setZoomedMockupIndex((prev) => (prev + 1) % mockupList.length);
  }

  function showPrevMockup() {
    setZoomedMockupIndex(
      (prev) => (prev - 1 + mockupList.length) % mockupList.length
    );
  }

  function handleSwipeStart(e) {
    swipeStartXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handleSwipeEnd(e) {
    if (swipeStartXRef.current === null) return;
    const delta = e.clientX - swipeStartXRef.current;
    swipeStartXRef.current = null;
    if (Math.abs(delta) < 50) return;
    if (delta < 0) {
      showNextMockup();
    } else {
      showPrevMockup();
    }
  }

  useEffect(() => {
    if (zoomedMockupIndex === null) return;
    function handleKeyDown(e) {
      if (e.key === "ArrowRight") {
        setZoomedMockupIndex((prev) => (prev + 1) % mockupList.length);
      }
      if (e.key === "ArrowLeft") {
        setZoomedMockupIndex(
          (prev) => (prev - 1 + mockupList.length) % mockupList.length
        );
      }
      if (e.key === "Escape") setZoomedMockupIndex(null);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedMockupIndex, mockupList.length]);

  function toggleSite(site, event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setSelectedSite(site);
  }

  function showNextSite() {
    const currentIndex = logoSite.findIndex((s) => s.id === selectedSite.id);
    setZoomedMockupIndex(null);
    setSelectedSite(logoSite[(currentIndex + 1) % logoSite.length]);
  }

  function showPrevSite() {
    const currentIndex = logoSite.findIndex((s) => s.id === selectedSite.id);
    setZoomedMockupIndex(null);
    setSelectedSite(
      logoSite[(currentIndex - 1 + logoSite.length) % logoSite.length]
    );
  }

  function closeSite() {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedSite(null);
      setIsClosing(false);
    }, 300);
  }

  useLayoutEffect(() => {
    if (selectedSite && origin && modalRef.current) {
      const el = modalRef.current;
      const boxLeft = (window.innerWidth - el.offsetWidth) / 2;
      const boxTop = (window.innerHeight - el.offsetHeight) / 2;
      el.style.transformOrigin = `${origin.x - boxLeft}px ${origin.y - boxTop}px`;
    }
  }, [selectedSite, origin]);

  useEffect(() => {
    const setVideoAutoplay = () => {
      const videos = document.querySelectorAll("video");
      if (window.innerWidth < 800) {
        videos.forEach((video) => video.removeAttribute("autoplay"));
      } else {
        videos.forEach((video) => video.setAttribute("autoplay", true));
      }
    };
    setVideoAutoplay();
    window.addEventListener("resize", setVideoAutoplay);

    return () => {
      window.removeEventListener("resize", setVideoAutoplay);
    };
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <h2> Ici mes créations et collaborations </h2>

      <div className="portfoliocontainer">
        <div className="illustrations">
          <HouseLotte />
        </div>
        <div className="descriptionandproject">
          <div className="description">
            <p className="détailprojets">
              Explorez mes créations en un simple clic sur les logos. Vous y
              découvrirez mes collaborations sur divers(es) applications et
              sites internets.
            </p>
          </div>

          <div className="sites">
            {logoSite.map((site) => (
              <div key={site.id} className="swippe">
                <button type="button" onClick={(e) => toggleSite(site, e)}>
                  <img src={site.image} alt={site.name} id="swipper" />
                </button>
                <div className="sloggan" onClick={(e) => toggleSite(site, e)}>
                  <p className="text-sloggan"> {site.sloggan} </p>
                </div>
              </div>
            ))}
          </div>
          {selectedSite && (
            <div className={`modal-backdrop ${isClosing ? "closing" : ""}`}>
              {logoSite.length > 1 && (
                <button
                  className="site-nav-arrow site-nav-prev"
                  onClick={showPrevSite}
                  aria-label="Réalisation précédente"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
              )}
              <div
                className={`modal ${isClosing ? "closing" : ""}`}
                ref={modalRef}
              >
                <div className="modal-accent-bar" />
                <button
                  className="close-modal"
                  onClick={closeSite}
                  aria-label="Fermer"
                >
                  ×
                </button>
                <div className="modal-scroll">
                  <div className="modal-body">
                    <div className="modal-info">
                      <h2>{selectedSite.name}</h2>
                      <p>{selectedSite.description}</p>
                      <div className="lien-site">
                        {selectedSite.github && (
                          <a
                            href={selectedSite.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faGithub} />
                            Lien GitHub
                          </a>
                        )}
                        {selectedSite.url && (
                          <a
                            href={selectedSite.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            Lien du Site
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="video">
                      {selectedSite.video.includes("youtube.com") ||
                      selectedSite.video.includes("youtu.be") ? (
                        <iframe
                          width="560"
                          height="315"
                          src={selectedSite.video
                            .replace("youtu.be/", "www.youtube.com/embed/")
                            .replace("watch?v=", "embed/")}
                          title={selectedSite.name}
                          style={{ border: "none" }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          id="video"
                        />
                      ) : (
                        <video
                          autoPlay={true}
                          src={selectedSite.video}
                          alt={selectedSite.name}
                          id="video"
                        />
                      )}
                    </div>
                  </div>

                  {(() => {
                    const hasColors = selectedSite.colors?.length > 0;
                    const hasDesktopMockups =
                      selectedSite.desktopMockups?.length > 0;
                    const hasMobileMockups =
                      selectedSite.mobileMockups?.length > 0;
                    const hasMockups = hasDesktopMockups || hasMobileMockups;
                    const hasAssets = selectedSite.otherAssets?.length > 0;
                    const hasExtraDescription = !!selectedSite.extraDescription;
                    const hasAssetsCol =
                      hasAssets || hasExtraDescription || !!selectedSite.figma;
                    const hasElements = hasColors || hasMockups || hasAssetsCol;

                    if (!hasElements) return null;

                    return (
                      <div className="modal-elements">
                        <div className="elements-header">
                          {hasColors && (
                            <div className="modal-colors">
                              {selectedSite.colors.map((color, i) => (
                                <div className="color-swatch" key={i}>
                                  <span
                                    className="color-dot"
                                    style={
                                      color.hex
                                        ? { backgroundColor: color.hex }
                                        : undefined
                                    }
                                  />
                                  <span className="color-label">
                                    {color.name || `Couleur ${i + 1}`}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}

                          <h3 className="elements-heading">
                            Direction artistique
                          </h3>
                        </div>

                        {(hasMockups || hasAssetsCol) && (
                          <div className="elements-split">
                            {hasMockups && (
                              <div
                                className={`elements-col mockups-row${
                                  hasAssetsCol ? "" : " full"
                                }`}
                              >
                                {hasDesktopMockups &&
                                  selectedSite.desktopMockups.map((src, i) => (
                                    <button
                                      type="button"
                                      className="mockup-box mockup-desktop"
                                      key={`d-${i}`}
                                      onClick={() => setZoomedMockupIndex(i)}
                                    >
                                      <img
                                        src={src}
                                        alt={`Maquette ordinateur ${i + 1}`}
                                      />
                                    </button>
                                  ))}

                                {hasMobileMockups &&
                                  selectedSite.mobileMockups.map((src, i) => (
                                    <button
                                      type="button"
                                      className="mockup-box mockup-mobile"
                                      key={`m-${i}`}
                                      onClick={() =>
                                        setZoomedMockupIndex(
                                          (selectedSite.desktopMockups?.length ||
                                            0) + i
                                        )
                                      }
                                    >
                                      <img
                                        src={src}
                                        alt={`Maquette mobile ${i + 1}`}
                                      />
                                    </button>
                                  ))}
                              </div>
                            )}

                            {hasAssetsCol && (
                              <div
                                className={`elements-col assets-col${
                                  hasMockups ? "" : " full"
                                }`}
                              >
                                {hasAssets && (
                                  <div className="assets-grid">
                                    {selectedSite.otherAssets.map((src, i) => (
                                      <button
                                        type="button"
                                        className="mockup-box mockup-asset"
                                        key={i}
                                        onClick={() =>
                                          setZoomedMockupIndex(
                                            (selectedSite.desktopMockups
                                              ?.length || 0) +
                                              (selectedSite.mobileMockups
                                                ?.length || 0) +
                                              i
                                          )
                                        }
                                      >
                                        <img
                                          src={src}
                                          alt={`Élément graphique ${i + 1}`}
                                        />
                                      </button>
                                    ))}
                                  </div>
                                )}

                                {hasExtraDescription && (
                                  <p className="extra-description">
                                    {selectedSite.extraDescription}
                                  </p>
                                )}

                                {selectedSite.figma && (
                                  <a
                                    href={selectedSite.figma}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="figma-link"
                                  >
                                    <FontAwesomeIcon icon={faFigma} />
                                    Voir sur Figma
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>

              {logoSite.length > 1 && (
                <button
                  className="site-nav-arrow site-nav-next"
                  onClick={showNextSite}
                  aria-label="Réalisation suivante"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              )}
            </div>
          )}

          {zoomedMockupIndex !== null && mockupList[zoomedMockupIndex] && (
            <div
              className="mockup-zoom-overlay"
              onClick={() => setZoomedMockupIndex(null)}
            >
              <div
                className="mockup-zoom-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="mockup-zoom-close"
                  onClick={() => setZoomedMockupIndex(null)}
                  aria-label="Fermer"
                >
                  ×
                </button>
                <img
                  src={mockupList[zoomedMockupIndex].src}
                  alt={mockupList[zoomedMockupIndex].alt}
                  className="mockup-zoom-img"
                  draggable={false}
                  onPointerDown={handleSwipeStart}
                  onPointerUp={handleSwipeEnd}
                />

                {mockupList.length > 1 && (
                  <div className="mockup-zoom-dots">
                    {mockupList.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`mockup-zoom-dot${
                          i === zoomedMockupIndex ? " active" : ""
                        }`}
                        aria-label={`Image ${i + 1}`}
                        onClick={() => setZoomedMockupIndex(i)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
