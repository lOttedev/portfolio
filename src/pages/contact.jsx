import lottemessage from "../assets/images/lottemessagebranche.png";
import MyForm from "../components/Myform";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="messagelotte">
        <h2>Contactez-moi</h2>
        <img
          src={lottemessage}
          alt="chouette qui porte une enveloppe"
          id="lottemessagerie"
        />
      </div>
      <div id="formncontact">
        <MyForm />
        <div className="telephonmail">
          <div className="tel">
            <p>Téléphone : </p>
            <a href="tel:+07.82.84.09.30">07.82.84.09.30</a>
          </div>
          <div className="mail">
            <p>Mail : </p>
            <a href="mailto:laurene.buttelli@gmail.com">
              laurene.buttelli@gmail.com
            </a>
          </div>
          <p>Localisation : &nbsp; &nbsp; Bayonne, France</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
