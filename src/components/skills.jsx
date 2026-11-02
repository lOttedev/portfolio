import { useState, useRef, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faRobot,
  faWandMagicSparkles,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import nid from "../assets/images/nid.png";
import oeufuiux from "../assets/images/Oeuf-UI-UX.png";
import oeufdev from "../assets/images/Oeuf-Dev.png";
import oeufintegration from "../assets/images/Oeuf-Integration.png";
import oeufdesignglobal from "../assets/images/Oeuf-design-global.png";
import oeufia from "../assets/images/Oeuf-IA.png";
import oeufdevEn from "../assets/images/Oeuf-Dev-EN.png";
import oeufintegrationEn from "../assets/images/Oeuf-Integration-EN.png";
import oeufdesignglobalEn from "../assets/images/Oeuf-design-global-EN.png";
import oeufiaEn from "../assets/images/Oeuf-IA-EN.png";
import nid1erplan from "../assets/images/Nid-Paille-1erPlan.png";
import { useLanguage } from "../i18n/LanguageContext";

function Skills() {
  const { lang, t } = useLanguage();
  const isEn = lang === "en";
  const [modalContent, setModalContent] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  const eggData = {
    egg1: {
      title: { fr: "Intégration & Styling", en: "Integration & Styling" },
      color: "var(--blue)",
      tags: ["HTML/CSS", "Tailwind CSS", "Sass"],
    },
    egg2: {
      title: { fr: "Développement Web & Mobile", en: "Web & Mobile Development" },
      color: "var(--cyan)",
      tags: ["React.js", "React Native", "JavaScript", "WordPress", "Elementor", "Divi"],
    },
    egg3: {
      title: "UX/UI Design",
      color: "var(--yellow)",
      tags: [
        "Figma",
        { fr: "Conception d'interfaces", en: "Interface design" },
        { fr: "Prototypage", en: "Prototyping" },
        "Design system",
      ],
    },
    egg4: {
      title: { fr: "Création Graphique & Motion", en: "Graphic Design & Motion" },
      color: "var(--red)",
      tags: ["Photoshop", "Illustrator", "InDesign", "After Effects", "Illustration", "Motion design"],
    },
    egg5: {
      title: { fr: "Intelligence Artificielle", en: "Artificial Intelligence" },
      color: "var(--main-color)",
      isPoster: true,
      tagline: {
        fr: "J'utilise l'IA comme un outil du quotidien, pas comme un raccourci.",
        en: "I use AI as an everyday tool, not as a shortcut.",
      },
      skillCards: [
        {
          icon: faComments,
          name: "ChatGPT",
          desc: {
            fr: "Brainstorm, rédaction et recherche rapide",
            en: "Brainstorming, writing and quick research",
          },
        },
        {
          icon: faRobot,
          name: "Claude",
          desc: {
            fr: "Assistant de code intégré à mon environnement",
            en: "Coding assistant built into my workflow",
          },
        },
        {
          icon: faWandMagicSparkles,
          name: "Prompt engineering",
          desc: {
            fr: "Formuler des requêtes précises et efficaces",
            en: "Writing precise and effective prompts",
          },
        },
        {
          icon: faCode,
          name: { fr: "Assistance au dev", en: "Dev assistance" },
          desc: {
            fr: "Debug, refactoring, automatisation de tâches",
            en: "Debugging, refactoring, task automation",
          },
        },
      ],
    },
  };

  const handleEggClick = (eggId, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    setModalContent(eggData[eggId]);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalContent(null);
      setIsClosing(false);
    }, 300);
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
        <img src={isEn ? oeufintegrationEn : oeufintegration} id="egg1" />
        <img src={isEn ? oeufdevEn : oeufdev} id="egg2" />
        <img src={oeufuiux} id="egg3" />
        <img src={isEn ? oeufdesignglobalEn : oeufdesignglobal} id="egg4" />
        <img src={isEn ? oeufiaEn : oeufia} id="egg5" />
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
        <div
          className="egg-clickable"
          id="click-egg5"
          onClick={(e) => handleEggClick("egg5", e)}
        />
      </div>

      {modalContent && (
        <div className={`modal-overlay ${isClosing ? "closing" : ""}`} onClick={closeModal}>
          <div
            className={`modal-content ${modalContent.isPoster ? "ia-poster-modal" : ""} ${isClosing ? "closing" : ""}`}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            style={{ "--accent-color": modalContent.color }}
          >
            <div className="modal-accent-bar" />
            <button className="modal-close" onClick={closeModal} aria-label={t("close")}>
              ×
            </button>
            {modalContent.isPoster ? (
              <div className="ia-poster">
                <span className="ia-poster-badge">✨ Skills</span>
                <h2>{t(modalContent.title)}</h2>
                <p className="ia-poster-tagline">{t(modalContent.tagline)}</p>
                <div className="ia-poster-menu">
                  {modalContent.skillCards.map((card) => (
                    <div className="ia-poster-row" key={t(card.name)}>
                      <div className="ia-poster-icon">
                        <FontAwesomeIcon icon={card.icon} />
                      </div>
                      <div>
                        <h3>{t(card.name)}</h3>
                        <p>{t(card.desc)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <h2>{t(modalContent.title)}</h2>
                <div className="modal-tags">
                  {modalContent.tags.map((tag) => (
                    <span key={t(tag)} className="modal-tag">
                      {t(tag)}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Skills;
