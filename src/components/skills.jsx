import { useState, useRef, useLayoutEffect } from "react";
import nid from "../assets/images/nid.png";
import oeufuiux from "../assets/images/Oeuf-UI-UX.png";
import oeufdev from "../assets/images/Oeuf-Dev.png";
import oeufintegration from "../assets/images/Oeuf-Integration.png";
import oeufdesignglobal from "../assets/images/Oeuf-design-global.png";
import nid1erplan from "../assets/images/Nid-Paille-1erPlan.png";

function Skills() {
  const [modalContent, setModalContent] = useState(null);
  const [origin, setOrigin] = useState(null);
  const modalRef = useRef(null);

  const eggData = {
    egg1: {
      title: "Intégration & Styling",
      color: "var(--blue)",
      tags: ["HTML/CSS", "Tailwind CSS", "Sass"],
    },
    egg2: {
      title: "Développement Web & Mobile",
      color: "var(--cyan)",
      tags: ["React.js", "React Native", "JavaScript", "WordPress", "Elementor", "Divi"],
    },
    egg3: {
      title: "UX/UI Design",
      color: "var(--yellow)",
      tags: ["Figma", "Conception d'interfaces", "Prototypage", "Design system"],
    },
    egg4: {
      title: "Création Graphique & Motion",
      color: "var(--red)",
      tags: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Illustration", "Motion design"],
    },
  };

  const handleEggClick = (eggId, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setModalContent(eggData[eggId]);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  useLayoutEffect(() => {
    if (modalContent && origin && modalRef.current) {
      const el = modalRef.current;
      const boxLeft = (window.innerWidth - el.offsetWidth) / 2;
      const boxTop = (window.innerHeight - el.offsetHeight) / 2;
      el.style.transformOrigin = `${origin.x - boxLeft}px ${origin.y - boxTop}px`;
    }
  }, [modalContent, origin]);

  return (
    <>
      <div className="skills">
        <img src={nid} id="nest" />
        <img src={oeufintegration} id="egg1" />
        <img src={oeufdev} id="egg2" />
        <img src={oeufuiux} id="egg3" />
        <img src={oeufdesignglobal} id="egg4" />
        <img src={nid1erplan} id="nest1" />

        <div
          className="egg-clickable"
          id="click-egg1"
          onClick={(e) => handleEggClick("egg1", e)}
        />
        <div
          className="egg-clickable"
          id="click-egg2"
          onClick={(e) => handleEggClick("egg2", e)}
        />
        <div
          className="egg-clickable"
          id="click-egg3"
          onClick={(e) => handleEggClick("egg3", e)}
        />
        <div
          className="egg-clickable"
          id="click-egg4"
          onClick={(e) => handleEggClick("egg4", e)}
        />
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            style={{ "--accent-color": modalContent.color }}
          >
            <div className="modal-accent-bar" />
            <button className="modal-close" onClick={closeModal} aria-label="Fermer">
              ×
            </button>
            <h2>{modalContent.title}</h2>
            <div className="modal-tags">
              {modalContent.tags.map((tag) => (
                <span key={tag} className="modal-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Skills;
