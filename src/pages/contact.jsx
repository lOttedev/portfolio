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
          <p>
            Telephone : 07.82.84.09.30 <br />
            <br />
            Mail : laurene.buttelli@gmail.com <br />
            <br />
            Localisation : Bayonne, France
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
