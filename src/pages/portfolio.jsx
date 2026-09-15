import { useState, useEffect, useRef, useLayoutEffect } from "react";

import HouseLotte from "../components/Lottehouse";
import logoSite from "../assets/siteWeb";

function Portfolio() {
  const [selectedSite, setSelectedSite] = useState(null);
  const [origin, setOrigin] = useState(null);
  const modalRef = useRef(null);

  function toggleSite(site, event) {
    const rect = event.currentTarget.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setSelectedSite(site);
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
              Explorez mes créations en un simple clic sur les logos et
              laissez-vous inspirer, Vous y découvrirez mes collaborations sur
              divers sites internets .
            </p>
          </div>

          <div className="sites">
            {logoSite.map((site) => (
              <div key={site.id} className="swippe">
                <button
                  type="button"
                  onClick={(e) => toggleSite(site, e)}
                >
                  <img src={site.image} alt={site.name} id="swipper" />
                </button>
                <div
                  className="sloggan"
                  onClick={(e) => toggleSite(site, e)}
                >
                  <p className="text-sloggan"> {site.sloggan} </p>
                </div>
              </div>
            ))}
          </div>
          {selectedSite && (
            <div className="modal-backdrop">
              <div className="modal" ref={modalRef}>
                <button
                  className="close-modal"
                  onClick={() => setSelectedSite(null)}
                >
                  X
                </button>
                <h2>{selectedSite.name}</h2>
                <p>{selectedSite.description}</p>
                <div className="video">
                  {selectedSite.video.includes('youtube.com') || selectedSite.video.includes('youtu.be') ? (
                    <iframe
                      width="560"
                      height="315"
                      src={selectedSite.video.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/')}
                      title={selectedSite.name}
                      style={{ border: 'none' }}
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
                <div className="lien-site">
                  {selectedSite.github && (
                    <a
                      href={selectedSite.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Lien GitHub{" "}
                    </a>
                  )}
                  {selectedSite.url && (
                    <a
                      href={selectedSite.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      Lien du Site{" "}
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
