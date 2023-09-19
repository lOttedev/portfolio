import bb1 from "../assets/images/bblotte1.png"
import bb2 from "../assets/images/bblotte2.png"
import fondnoir from "../assets/images/fondmaisonlotte.png"
import maisonlotte from "../assets/images/maisonlotte.png"

function HouseLotte() {
return (
    <>
    <div className="portfolioillus">
      <div className="bebechouette">
        <img src={fondnoir} id="fondnoir" />
        <img src={bb1} id="bb1" />
        <img src={bb2} id="bb2" />
        <img src={maisonlotte} id="maisonlotte" />
      </div>
    </div>
    </>
);
}

export default HouseLotte;