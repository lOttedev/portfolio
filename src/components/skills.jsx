import { useState } from "react";
import nid from "../assets/images/nid.png";
import oeufuiux from "../assets/images/Oeuf-UI-UX.png";
import oeufdev from "../assets/images/Oeuf-Dev.png";
import oeufintegration from "../assets/images/Oeuf-Integration.png";
import oeufdesignglobal from "../assets/images/Oeuf-design-global.png";
import nid1erplan from "../assets/images/Nid-Paille-1erPlan.png";

function Skills() {
  const [modalContent, setModalContent] = useState(null);

  const eggData = {
    egg1: {
      title: "Intégration & Styling",
      content: "HTML/CSS, Tailwind CSS, Sass.",
    },
    egg2: {
      title: "Développement Web & Mobile",
      content:
        "React.js, React Native, JavaScript;<br />WordPress : Elementor, Divi.",
    },
    egg3: {
      title: "UX/UI Design",
      content: "Figma, conception d'interfaces, prototypage, design system.",
    },
    egg4: {
      title: "Création Graphique & Motion",
      content:
        "Adobe : Photoshop, Illustrator, InDesign, After Effects<br />Illustration, graphisme, print, motion design.",
    },
  };

  const handleEggClick = (eggId) => {
    console.log("Egg clicked:", eggId);
    console.log("Egg data:", eggData[eggId]);
    setModalContent(eggData[eggId]);
  };

  const closeModal = () => {
    setModalContent(null);
  };

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
          onClick={() => handleEggClick("egg1")}
        />
        <div
          className="egg-clickable"
          id="click-egg2"
          onClick={() => handleEggClick("egg2")}
        />
        <div
          className="egg-clickable"
          id="click-egg3"
          onClick={() => handleEggClick("egg3")}
        />
        <div
          className="egg-clickable"
          id="click-egg4"
          onClick={() => handleEggClick("egg4")}
        />
      </div>

      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              X
            </button>
            <h2>{modalContent.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: modalContent.content }}></p>
          </div>
        </div>
      )}
    </>
  );
}

export default Skills;
