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
import apprentis from "./images/Apprentis.png";
import chef from "./images/chef.png";
import curseur from "./images/curseur.png";
import logoChocNClic from "./images/logo-choc-n-clic.svg";
import patissier from "./images/patissier.png";
import upgrade1 from "./images/upgrade-1.png";
import upgrade2 from "./images/Upgrade-2.png";
import upgrade3 from "./images/uppgrade-3.png";
import rouleauPatisserie from "./images/Rouleau-a-patisserie.png";
import spatule from "./images/spatule.png";
import toque from "./images/toque.png";
import apprentisUpgrade from "./images/apprentis-upgrade.png";
import chefUpgrade from "./images/chef-upgrade.png";
import patissierUpgrade from "./images/patissier-upgrade.png";
import party from "./images/party.png";
import middleWeather from "./images/middleWeather.png";
import happymood from "./images/happymood.png";
import food from "./images/Food.png";
import date from "./images/date.png";
import beers from "./images/beers.png";
import badWeather from "./images/badWeather.png";
import atHome from "./images/atHome.png";
import afterWork from "./images/afterWork.png";
import questuboisDesktop1 from "./images/Questubois_Desktop1.png";
import questuboisDesktop5 from "./images/Questubois_Desktop5.png";
import questuboisDesktop8 from "./images/Questubois_Desktop8.png";
import questuboisIphoneSe1 from "./images/Questubois_iPhone SE1.png";
import questuboisIphone3 from "./images/Questubois_iPhone3.png";
import questuboisIphone7 from "./images/Questubois_iPhone7.png";

const logoSite = [
  {
    id: 1,
    image: eatingnamnam,
    name: "Eating Nam Nam",
    video: "https://youtu.be/Ocn7S4m3Qr4",
    sloggan: {
      fr: "Créez, partagez, dégustez l'essence de la cuisine.",
      en: "Create, share, savour the essence of cooking.",
    },
    description: {
      fr: "Eating Nam Nam est un site de cuisine réalisé en groupe suite à une commande d'un client. Si vous êtes connecté, vous pouvez, créer une recette, y ajouter et noter des recettes d'autres utilisateurs. Vous avez aussi un accès aux apports nutritionnels pour chaque recette. Bon appétit !",
      en: "Eating Nam Nam is a cooking website built as a team for a client. Once logged in, you can create your own recipes, and save and rate recipes from other users. You can also see the nutritional values of every recipe. Enjoy your meal!",
    },
    github: null,
    url: null,
    colors: [
      { hex: "#D56C06", name: { fr: "Clémentine", en: "Clementine" } },
      { hex: "#ECE8DA", name: { fr: "Porcelaine", en: "Porcelain" } },
      { hex: "#97BF0D", name: { fr: "Pomme", en: "Apple" } },
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
    extraDescription: {
      fr: "Sur ce projet, j'ai conçu l'UI/UX des maquettes sur Figma et illustré les badges, à partir des couleurs et du logo qui nous avaient été imposés. Côté développement, j'ai implémenté le système de favoris (front et back) ainsi que l'intégration et le responsive de plusieurs pages.",
      en: "On this project, I designed the UI/UX mockups in Figma and illustrated the badges, based on the colours and logo we were given. On the development side, I built the favourites system (front and back end) and handled the integration and responsive layout of several pages.",
    },
    figma:
      "https://www.figma.com/design/rK1VV85QqchhhBKnxZLy7V/Eating-Nam-Nam?node-id=10-10&t=znJPxjLS42JhobF7-1",
  },
  {
    id: 2,
    image: elika,
    name: "Elika Team",
    video: "https://youtu.be/zqPZkCRW8a0",
    sloggan: {
      fr: "Création d'applications de solution linguistique Défense Sécurité et Sûreté",
      en: "Building language solution apps for Defence, Security and Safety",
    },
    description: {
      fr: "Mon expérience au sein d'Elika Team m'a permis de travailler React Native et la suite Adobe pour concevoir des applications destinées au secteur de la défense. J'y ai occupé un rôle hybride, à la fois centré sur le développement front-end et sur la dimension design des interfaces, graphisme et illustrations. Malheureusement, en raison du caractère confidentiel des projets, je ne peux partager aucun visuel ici — ces travaux étant classés secret-défense.",
      en: "At Elika Team, I worked with React Native and the Adobe suite to design applications for the defence sector. I held a hybrid role, covering both front-end development and the design side of the interfaces, graphics and illustrations. Unfortunately, because these projects are confidential, I cannot share any visuals here — the work is classified.",
    },
    github: null,
    url: "https://elikateam.com/",
  },
  {
    id: 3,
    image: sds,
    name: "Sleepy Dev Squad",
    video: "https://youtu.be/RiNSFKO769M",
    sloggan: {
      fr: "Le Uber du Moyen-Age, viens y querir ton char",
      en: "The Uber of the Middle Ages, come and summon thy chariot",
    },
    description: {
      fr: "Le site Tuum Vehiculum a vu le jour grâce à une collaboration étroite au sein de mon équipe, les Sleepy Dev Squad, lors d'un hackathon de moins de 48 heures. La thématique qui nous a été attribuée était : la conception d'un site qui aurait eu une utilité dans une ère où internet n'existait pas encore. Ainsi, nous avons plongé dans les méandres du Moyen Âge pour concevoir une plateforme de location de véhicules, avec ou sans cocher, dédiée à faciliter divers trajets. Cette idée novatrice s'inspire bien évidemment du concept de Uber, tout en étant ancrée dans une époque révolue.",
      en: "Tuum Vehiculum was born from close teamwork within my team, the Sleepy Dev Squad, during a hackathon of less than 48 hours. Our theme was to design a website that would have been useful in an era before the internet existed. So we dove into the Middle Ages to create a vehicle rental platform, with or without a coachman, to make all kinds of journeys easier. The idea is of course inspired by Uber, while being rooted in a bygone age.",
    },
    github: "https://github.com/lOttedev/Sleepy_Dev_Squad.git",
    url: null,
    colors: [
      { hex: "#5881A6", name: { fr: "Bleu Roi", en: "Royal Blue" } },
      { hex: "#BFA27E", name: { fr: "Parchemin", en: "Parchment" } },
      { hex: "#F20530", name: { fr: "Rouge Royal", en: "Royal Red" } },
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
    extraDescription: {
      fr: "Pour ce hackathon, je me suis principalement chargée des maquettes sur Figma, des illustrations et du responsive de l'application.",
      en: "For this hackathon, I mainly took care of the Figma mockups, the illustrations and the responsive layout of the app.",
    },
  },
  {
    id: 4,
    image: choco,
    name: "Choc'n Click",
    video: "https://youtu.be/xQJVWZUDYyQ",
    sloggan: {
      fr: "Un jeu à base de chocolatine qui déstresse",
      en: "A stress-relieving game made of chocolatines",
    },
    description: {
      fr: "Premier projet réalisé en groupe, pensé et conçu en l'espace de deux semaines et très largement inspiré du jeu Cookie Clicker. En plus de ma contribution au développement, j'ai eu le plaisir de donner vie aux illustrations qui parsèment ce jeu. N'hésitez pas à vous plonger dans cette expérience ludique et divertissante !",
      en: "My first team project, designed and built in two weeks and heavily inspired by Cookie Clicker. Besides contributing to the development, I had the pleasure of bringing to life the illustrations scattered throughout the game. Feel free to dive into this fun and playful experience!",
    },
    github: "https://github.com/lOttedev/projet-choc-n-clic.git",
    url: "https://cedricsia.github.io/",
    colors: [
      { hex: "#2e294e", name: { fr: "Violette", en: "Violet" } },
      { hex: "#f5a72d", name: { fr: "Beurre Doré", en: "Golden Butter" } },
      { hex: "#a66203", name: { fr: "Pâte Cuite", en: "Baked Dough" } },
    ],
    desktopMockups: [
      logoChocNClic,
      choco,
      // curseur,
      chef,
      patissier,
      apprentis,
      rouleauPatisserie,
      spatule,
      toque,
    ],
    otherAssets: [
      apprentisUpgrade,
      chefUpgrade,
      patissierUpgrade,
      upgrade1,
      upgrade2,
      upgrade3,
    ],
    extraDescription: {
      fr: "Je me suis occupée de l'UI/UX ainsi que de l'ensemble du code CSS et du responsive. J'ai également réalisé toutes les illustrations à la tablette graphique sous Photoshop. Le fichier Figma des maquettes ayant été supprimé par le propriétaire principal du projet, je n'ai malheureusement pas d'image ni de lien à présenter pour cette partie.",
      en: "I handled the UI/UX as well as all the CSS and the responsive layout. I also drew every illustration on a graphics tablet in Photoshop. The Figma file with the mockups was deleted by the project's main owner, so unfortunately I have no images or link to show for that part.",
    },
  },

  {
    id: 5,
    image: questubois,
    name: "Questubois",
    video: "https://youtu.be/Mhlso1hKR8o",
    sloggan: {
      fr: "L'application de rencontre avec ta bière du moment",
      en: "The dating app for finding your beer of the moment",
    },
    description: {
      fr: "Questubois incarne le fruit d'une collaboration collective au sein d'une plateforme dédiée à l'univers de la bière. Cette création englobe divers jeux captivants : l'un d'entre eux offre la possibilité de sélectionner sa bière idéale en personnalisant un profil, dans une démarche évoquant celle de Tinder. L'autre fonctionnalité, permet de choisir une ou plusieurs variétés de bières en harmonie avec ses choix culinaires.",
      en: "Questubois is the result of a team collaboration on a platform dedicated to the world of beer. It includes several engaging games: one lets you find your ideal beer by setting up a profile, in a Tinder-like way. The other helps you pick one or more beers that pair well with your food.",
    },
    github: null,
    url: null,
    colors: [
      { hex: "#26160B", name: "Wood" },
      { hex: "#88AD4F", name: "Hop" },
      { hex: "#F2B705", name: "Ale" },
    ],
    otherAssets: [
      // party,
      middleWeather,
      happymood,
      food,
      date,
      beers,
      // badWeather,
      // atHome,
      afterWork,
    ],
    desktopMockups: [
      questuboisDesktop1,
      questuboisIphoneSe1,
      questuboisDesktop5,
      questuboisIphone3,
      questuboisDesktop8,
      questuboisIphone7,
    ],
    // mobileMockups: [questuboisIphoneSe1, questuboisIphone3, questuboisIphone7],
    extraDescription: {
      fr: "Sur ce projet, j'ai réalisé l'ensemble des illustrations ainsi qu'une partie de l'UI/UX, la mise en page et le responsive. J'ai également développé la fonctionnalité (front et back) qui aide l'utilisateur à choisir sa bière selon son humeur, la météo et les circonstances, en cliquant simplement sur les images correspondantes. Nous avons connecté une API disposant d'une très large bibliothèque de bières.",
      en: "On this project, I created all the illustrations as well as part of the UI/UX, the layout and the responsive design. I also built the feature (front and back end) that helps users choose a beer based on their mood, the weather and the occasion, simply by clicking the matching pictures. We connected an API with a very large library of beers.",
    },
  },
];

export default logoSite;
