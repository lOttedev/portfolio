import choco from "./images/chocolatine-clickers.png";
import questubois from "./images/Logo-Questubois.png";
import sds from "./images/logo-sleepy-dev-squad.png";
import eatingnamnam from "./images/logoEatingNamNam.png";
import elika from "./images/logo_BleuNuit_.png";
import badgeEtoile from "./images/BadgeEtoile.png";
import badgeDifficulte from "./images/BadgeDifficulte.png";
import commentaire from "./images/commentaire.png";
import userProfil from "./images/userProfil.png";
import accueilOrdi from "./images/Accueil_EatingNamNam_Ordi.png";
import accueilMobile from "./images/Accueil_EatingNamNam_Mobile.png";
import profilOrdi from "./images/Profil_eatingNamNam_ordi.png";
import profilMobile from "./images/Profil_eatingNamNam_mobile.png";
import recetteOrdi from "./images/Recette_EatingNamNAm_ordi.png";
import recetteMobile from "./images/Recette_EatingNamNam_Mobile.png";
import mesRecetteOrdi from "./images/Mes_Recette_eatingNamNam_Ordi.png";
import mesRecetteMobile from "./images/Mes_Recette_eatingNamNam_mobile.png";
import lesRecettesOrdi from "./images/Les_Recettes_EatingNamNAm_ordi.png";
import lesRecettesMobile from "./images/Les_Recettes_EatingNamNAm_mobile.png";
import homeDesktop from "./images/Home_Desktop.png";
import homeMobile from "./images/Home_Mobile.png";
import optionsDesktop from "./images/Options_Desktop.png";
import optionsMobile from "./images/Options_Mobile.png";
import vehiculesDesktop from "./images/Véhicules_Desktop.png";
import vehiculesMobile from "./images/Vehicules_Mobile.png";
import crucheVin from "./images/cruche-vin.png";
import garde from "./images/Garde.png";
import marchandises from "./images/Marchandises.png";
import chaisePorteuse from "./images/Chaise-porteuse.png";
import cocher from "./images/Cocher.png";
import logoSds from "./images/logo-sds.png";

const logoSite = [
  {
    id: 1,
    image: eatingnamnam,
    name: "Eating Nam Nam",
    video: "https://youtu.be/Ocn7S4m3Qr4",
    sloggan: "Créez, partagez, dégustez l'essence de la cuisine.",
    description:
      "Eating Nam Nam est un site de cuisine réalisé en groupe suite à une commande d'un client. Si vous êtes connecté, vous pouvez, créer une recette, y ajouter et noter des recettes d'autres utilisateurs. Vous avez aussi un accès aux apports nutritionnels pour chaque recette. Bon appétit !",
    github: null,
    url: null,
    colors: [
      { hex: "#D56C06", name: "Clémentine" },
      { hex: "#ECE8DA", name: "Porcelaine" },
      { hex: "#97BF0D", name: "Pomme" },
    ],
    otherAssets: [badgeEtoile, badgeDifficulte, commentaire, userProfil],
    desktopMockups: [
      accueilOrdi,
      mesRecetteOrdi,
      lesRecettesOrdi,
      recetteOrdi,
      profilMobile,
      profilOrdi,
    ],
    mobileMockups: [
      accueilMobile,

      // recetteMobile,
      mesRecetteMobile,
      // lesRecettesMobile,
    ],
    extraDescription:
      "Sur ce projet, j'ai conçu l'UI/UX des maquettes sur Figma et illustré les badges, à partir des couleurs et du logo qui nous avaient été imposés. Côté développement, j'ai implémenté le système de favoris (front et back) ainsi que l'intégration et le responsive de plusieurs pages.",
    figma:
      "https://www.figma.com/design/rK1VV85QqchhhBKnxZLy7V/Eating-Nam-Nam?node-id=10-10&t=znJPxjLS42JhobF7-1",
  },
  {
    id: 2,
    image: elika,
    name: "Elika Team",
    video: "https://youtu.be/zqPZkCRW8a0",
    sloggan:
      "Création d'applications de solution linguistique Défense Sécurité et Sûreté",
    description:
      "Mon expérience au sein d'Elika Team m'a permis de travailler React Native et la suite Adobe pour concevoir des applications destinées au secteur de la défense. J'y ai occupé un rôle hybride, à la fois centré sur le développement front-end et sur la dimension design des interfaces, graphisme et illustrations. Malheureusement, en raison du caractère confidentiel des projets, je ne peux partager aucun visuel ici — ces travaux étant classés secret-défense.",
    github: null,
    url: "https://elikateam.com/",
  },
  {
    id: 3,
    image: sds,
    name: "Sleepy Dev Squad",
    video: "https://youtu.be/RiNSFKO769M",
    sloggan: "Le Uber du Moyen-Age, viens y querir ton char",
    description:
      "Le site Tuum Vehiculum a vu le jour grâce à une collaboration étroite au sein de mon équipe, les Sleepy Dev Squad, lors d'un hackathon de moins de 48 heures. La thématique qui nous a été attribuée était : la conception d'un site qui aurait eu une utilité dans une ère où internet n'existait pas encore. Ainsi, nous avons plongé dans les méandres du Moyen Âge pour concevoir une plateforme de location de véhicules, avec ou sans cocher, dédiée à faciliter divers trajets. Cette idée novatrice s'inspire bien évidemment du concept de Uber, tout en étant ancrée dans une époque révolue.",
    github: "https://github.com/lOttedev/Sleepy_Dev_Squad.git",
    url: null,
    colors: [
      { hex: "#5881A6", name: "Bleu Roi" },
      { hex: "#BFA27E", name: "Parchemin" },
      { hex: "#F20530", name: "Rouge Royal" },
    ],
    otherAssets: [
      crucheVin,
      garde,
      // marchandises,
      chaisePorteuse,
      cocher,
      // logoSds,
    ],
    desktopMockups: [homeDesktop, vehiculesDesktop, optionsDesktop],
    mobileMockups: [homeMobile, optionsMobile, vehiculesMobile],
    figma:
      "https://www.figma.com/design/ikjPM3PDqcAJSok7MErz1G/Tuum-vehiculum?node-id=13-55&t=RgONSxvPaCgWXrZM-1",
    extraDescription:
      "Pour ce hackathon, je me suis principalement chargée des maquettes sur Figma, des illustrations et du responsive de l'application.",
  },
  {
    id: 4,
    image: choco,
    name: "Choc'n Click",
    video: "https://youtu.be/xQJVWZUDYyQ",
    sloggan: "Un jeu à base de chocolatine qui déstresse",
    description:
      "Premier projet réalisé en groupe, pensé et conçu en l'espace de deux semaines et très largement inspiré du jeu Cookie Clicker. En plus de ma contribution au développement, j'ai eu le plaisir de donner vie aux illustrations qui parsèment ce jeu. N'hésitez pas à vous plonger dans cette expérience ludique et divertissante !",
    github: "https://github.com/lOttedev/projet-choc-n-clic.git",
    url: "https://cedricsia.github.io/",
  },

  {
    id: 5,
    image: questubois,
    name: "Questubois",
    video: "https://youtu.be/Mhlso1hKR8o",
    sloggan: "L'application de rencontre avec ta bière du moment",
    description:
      "Questubois incarne le fruit d'une collaboration collective au sein d'une plateforme dédiée à l'univers de la bière. Cette création englobe divers jeux captivants : l'un d'entre eux offre la possibilité de sélectionner sa bière idéale en personnalisant un profil, dans une démarche évoquant celle de Tinder. L'autre fonctionnalité, permet de choisir une ou plusieurs variétés de bières en harmonie avec ses choix culinaires.",
    github: null,
    url: null,
  },
];

export default logoSite;
