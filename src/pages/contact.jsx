import lottemessage from "../assets/images/lottemessagebranche.png";
import MyForm from "../components/Myform";
import { useLanguage } from "../i18n/LanguageContext";

function Contact() {
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">
      <div className="messagelotte">
        <h2>{t("contactTitle")}</h2>
        <img
          src={lottemessage}
          alt={t("contactImgAlt")}
          id="lottemessagerie"
        />
      </div>
      <div id="formncontact">
        <MyForm />
        <div className="telephonmail">
          <div className="tel">
            <p>{t("phone")} </p>
            <a href="tel:+07.82.84.09.30">07.82.84.09.30</a>
          </div>
          <div className="mail">
            <p>{t("mail")} </p>
            <a href="mailto:laurene.buttelli@gmail.com">
              laurene.buttelli@gmail.com
            </a>
          </div>
          <p>{t("location")} &nbsp; &nbsp; Bayonne, France</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
