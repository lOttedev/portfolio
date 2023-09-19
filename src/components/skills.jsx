import nid from "../assets/images/nid.png"
import oeufderd from "../assets/images/GIT.png"
import oeufderg from "../assets/images/SCRUM.png"
import oeufdevd from "../assets/images/Illustrations.png"
import oeufdevg from "../assets/images/Designui_ux.png"
import oeufniddev from "../assets/images/REACT.png"
import oeufnidderd from "../assets/images/SQL.png"
import oeufnidderg from "../assets/images/Node.png"
import oeufnidder from "../assets/images/Express.png"
import oeufniddevd from "../assets/images/JavaScript.png"
import oeufniddevg from "../assets/images/CSSTailwindSASS.png"

function Skills() {
    return (
        <>
        <div className="skills">
        <img src={nid} id="nest" />
        <img src={oeufnidder} id="egg1" />
        <img src={oeufnidderg} id="egg2" />
        <img src={oeufnidderd} id="egg3" />
        <img src={oeufderd} id="egg4" />
        <img src={oeufderg} id="egg5" />
        <img src={oeufniddevg} id="egg6" />
        <img src={oeufniddevd} id="egg7" />
        <img src={oeufniddev} id="egg8" />
        <img src={oeufdevd} id="egg9" />
        <img src={oeufdevg} id="egg10" />
        </div>
        </>
    )
}

export default Skills;