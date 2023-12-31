import choco from "./images/chocolatine-clickers.png";
import questubois from "./images/Logo-Questubois.png";
import sds from "./images/logo-sleepy-dev-squad.png";
import sdsVideo from "./TuumVehiculum.mp4";
import chocoVideo from "./ChocknClick.mp4";
import tinderBeer from "./QuestuBois.mp4";

const logoSite = [
  {
    id: 1,
    image: choco,
    name: "Choc'n Click",
    video: chocoVideo,
    sloggan: "Un jeu à base de chocolatine qui déstresse",
    description:
      "Premier projet réalisé en groupe, pensé et conçu en l'espace de deux semaines et très largement inspiré du jeu Cookie Clicker. En plus de ma contribution au développement, j'ai eu le plaisir de donner vie aux illustrations qui parsèment ce jeu. N'hésitez pas à vous plonger dans cette expérience ludique et divertissante !",
    github: "https://github.com/lOttedev/projet-choc-n-clic.git",
    url: "https://cedricsia.github.io/",
  },
  {
    id: 2,
    image: questubois,
    name: "Questubois",
    video: tinderBeer,
    sloggan: "L'application de rencontre avec ta bière du moment",
    description:
      "Questubois incarne le fruit d'une collaboration collective au sein d'une plateforme dédiée à l'univers de la bière. Cette création englobe divers jeux captivants : l'un d'entre eux offre la possibilité de sélectionner sa bière idéale en personnalisant un profil, dans une démarche évoquant celle de Tinder. L'autre fonctionnalité, permet de choisir une ou plusieurs variétés de bières en harmonie avec ses choix culinaires.",
    github: "https://github.com/lOttedev/QuesTuBois.git",
    url: "https://questubois.lottedev.fr",
  },
  {
    id: 3,
    image: sds,
    name: "Sleepy Dev Squad",
    video: sdsVideo,
    sloggan: "Le Uber du Moyen-Age, viens y querir ton char",
    description:
      "Le site Tuum Vehiculum a vu le jour grâce à une collaboration étroite au sein de mon équipe, les Sleepy Dev Squad, lors d'un hackathon palpitant de moins de 48 heures. La thématique qui nous a été attribuée était la conception d'un site qui aurait eu une utilité dans une ère où l'internet n'existait pas encore. Ainsi, nous avons plongé dans les méandres du Moyen Âge pour concevoir une plateforme de location de véhicules, avec ou sans cocher, dédiée à faciliter divers trajets. Cette idée novatrice s'inspire bien évidemment du concept de Uber, tout en étant ancrée dans une époque révolue.",
    github: "https://github.com/lOttedev/Sleepy_Dev_Squad.git",
    url: "https://tuum-vehiculum.achap.fr/",
  },
];

export default logoSite;
