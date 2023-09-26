import { useState } from "react";

import HouseLotte from "../components/Lottehouse";
import logoSite from "../assets/siteWeb";

function Portfolio() {
  const [selectedSite, setSelectedSite] = useState(null);
  const [selectedSloggan, setSelectedSloggan] = useState(null);

  function toggleSloggan(siteId) {
    setSelectedSloggan(siteId);
  }

  function toggleSite(site) {
    setSelectedSite(site);
  }

  return (
    <section className="portfolio">
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
                  onClick={() => toggleSite(site)}
                  onMouseEnter={() => toggleSloggan(site.id)}
                  onMouseLeave={() => toggleSloggan(null)}
                >
                  <img src={site.image} alt={site.name} id="swipper" />
                </button>
                {selectedSloggan === site.id && (
                  <div className="sloggan">
                    <p className="text-sloggan"> {site.sloggan} </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {selectedSite && (
            <div className="modal">
              <button
                className="close-modal"
                onClick={() => setSelectedSite(null)}
              >
                X
              </button>
              <h2>{selectedSite.name}</h2>
              <p>{selectedSite.description}</p>
              <div className="video">
                <video
                  autoPlay="true"
                  src={selectedSite.video}
                  alt={selectedSite.name}
                  id="video"
                />
              </div>
              <div className="lien-site">
                <a
                  href={selectedSite.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Lien GitHub{" "}
                </a>
                <a
                  href={selectedSite.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Lien du Site{" "}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
