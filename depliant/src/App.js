// App.js
import React, { useState } from "react";
import Introduction from "./components/Introduction";
import MapComponent from "./components/MapComponent";
import ExplanationPage from "./components/ExplanationPage";
import FinalPage from "./components/FinalPage"; // Ajout de l'import
import "./styles.scss";

const locations = [
  {
    id: 1,
    name: "Centre d'Art contemporain d'Ivry - le Crédac",
    center: { lat: 48.81412, lng: 2.39051 },
    images: "../assets/Fond.jpg",
    historicalDates: [
      {
        date: "1959",
        event: "Fondation du Centre d'Art contemporain d'Ivry - le Crédac.",
      },
      {
        date: "2003",
        event: "Réouverture après des travaux de rénovation majeurs.",
      },
      {
        date: "2010",
        event: "Inauguration de l'espace dédié aux expositions temporaires.",
      },
    ],
    history: `
    Le Centre d'Art contemporain d'Ivry - le Crédac a été fondé dans les années 1980
    dans le but de promouvoir l'art contemporain et de soutenir la création artistique.
    Installé dans un ancien site industriel réhabilité, le Crédac est devenu un lieu
    dynamique pour les artistes émergents et établis.
    `,
    explanation: `
    Plongez dans l'art contemporain au Centre d'Art d'Ivry - le Crédac.
    Des expositions innovantes, des résidences d'artistes, et des ateliers créatifs
    vous invitent à explorer les dernières tendances artistiques. Consultez notre site
    pour découvrir notre programmation et les opportunités de participation.
  `,
    workshops: [
      "Atelier de création numérique",
      "Expositions interactives pour enfants",
      "Rencontres avec les artistes en résidence",
      "Ateliers de gravure et d'impression",
      "Visites commentées des expositions en cours",
    ],
    accessInfo: `<strong>Accès et Contacts</strong>
      <br />
      93 Avenue Georges Gosnat, 94200 Ivry-sur-Seine - Consultez notre site pour les horaires
      <a href="http://www.lecredac.fr">lecredac.fr</a>
      <br />
      <a href="mailto:info@lecredac.fr">info@lecredac.fr</a>
      <br />
      <a href="tel:+3312345678">+33 1 23 45 67 8</a>
      <br />
      <br />
      <strong>Langues Parlées</strong>
      <br />
      Français, Anglais
      <br />
      <br />
      <strong>Jours et Horaires d'Ouverture</strong>
      <br />
      Mercredi à Dimanche : 14h00 - 19h00
    `,
    mapAndRates: `
    <strong>
        Billet d'entrée
      </strong>
      <br />
      Pour un enfant (moins de 12 ans) : 6 €
      <br />
      Pour un adulte (12 ans et plus) : 10 €
      <br />
      <br />
      <strong>Pass Annuel</strong>
      <br />
      Pour un enfant (moins de 12 ans) : 15 €
      <br />
      Pour un adulte (12 ans et plus) : 25 €
      <br />
    `,
  },
  {
    id: 2,
    name: "Les Frigos, Lieu d'Art et de Création",
    center: { lat: 48.83642, lng: 2.36758 },
    historicalDates: [
      {
        date: "1921",
        event:
          "Construction de l'entrepôt frigorifique pour le stockage de denrées périssables.",
      },
      {
        date: "1985",
        event: "Transformation des Frigos en un centre de création artistique.",
      },
      {
        date: "2000",
        event: "Inauguration de l'espace dédié aux artistes et ateliers.",
      },
    ],
    history: `
    Anciennement un entrepôt frigorifique au début du 20e siècle, Les Frigos ont été
    transformés en un lieu d'art et de création dans les années 1980. Depuis lors, cet
    espace atypique abrite des studios d'artistes, des galeries d'art, et des événements
    culturels. Les Frigos sont devenus un symbole de la vitalité artistique de Paris.
    `,
    explanation: `
    Plongez dans l'univers artistique des Frigos, un lieu unique d'art et de création.
    Des studios d'artistes, des galeries, et des événements culturels vous y attendent.
    Consultez notre site web pour découvrir nos expositions et événements à venir.
  `,
    workshops: [
      "Atelier de sculpture contemporaine",
      "Cours de photographie artistique",
      "Sessions de peinture en plein air",
      "Rencontres avec les artistes résidents",
      "Visites guidées des galeries et des ateliers",
    ],
    accessInfo: `<strong>Accès et Contacts</strong>
      <br />
      91 Quai Panhard et Levassor, 75013 Paris - Horaires d'ouverture sur notre site
      <a href="http://www.lesfrigos.com">lesfrigos.com</a>
      <br />
      <a href="mailto:info@lesfrigos.com">info@lesfrigos.com</a>
      <br />
      <a href="tel:+3312345678">+33 1 23 45 67 8</a>
      <br />
      <br />
      <strong>Langues Parlées</strong>
      <br />
      Français, Anglais, Espagnol
      <br />
      <br />
      <strong>Jours et Horaires d'Ouverture</strong>
      <br />
      Mardi à Samedi : 12h00 - 20h00
      <br />
      Dimanche : 14h00 - 18h00
    `,
    mapAndRates: `
    <strong>
        Billet standard
      </strong>
      <br />
      Pour un enfant (moins de 12 ans) : 5 €
      <br />
      Pour un adulte (12 ans et plus) : 10 €
      <br />
      <br />
      <strong>Pass Annuel</strong>
      <br />
      Pour un enfant (moins de 12 ans) : 15 €
      <br />
      Pour un adulte (12 ans et plus) : 25 €
      <br />
    `,
  },
  {
    id: 3,
    name: "La Maison des Métallos, les métallos forgent la culture",
    center: { lat: 48.86729, lng: 2.38146 },
    historicalDates: [
      { date: "1903", event: "Construction de la fonderie des Métallos." },
      {
        date: "1979",
        event: "Transformation de la fonderie en un lieu culturel.",
      },
      { date: "1985", event: "Inauguration de La Maison des Métallos." },
    ],
    history: `
    La Maison des Métallos, initialement une fonderie au début du 20e siècle, a été
    transformée en un lieu culturel dynamique. Les métallos, ouvriers du métal,
    ont forgé l'histoire industrielle de ce quartier, et leur esprit persiste dans
    ce lieu dédié à la culture, à l'art et à la créativité.
    `,
    explanation: `
    Plongez dans l'histoire industrielle de Paris à La Maison des Métallos.
    Des expositions, des performances artistiques, et des ateliers créatifs
    vous invitent à découvrir l'esprit des métallos. Consultez notre site web
    pour connaître notre programmation et participer à nos événements.
  `,
    workshops: [
      "Atelier de création métallique",
      "Spectacles de théâtre contemporain",
      "Expositions d'art engagé",
      "Rencontres avec des artistes militants",
      "Ateliers de danse urbaine",
    ],
    accessInfo: `<strong>Accès et Contacts</strong>
      <br />
      94 Rue Jean-Pierre Timbaud, 75011 Paris - Consultez notre site web pour les horaires
      <a href="http://www.maisondesmetallos.com">maisondesmetallos.com</a>
      <br />
      <a href="mailto:info@maisondesmetallos.com">info@maisondesmetallos.com</a>
      <br />
      <a href="tel:+3312345678">+33 1 23 45 67 8</a>
      <br />
      <br />
      <strong>Langues Parlées</strong>
      <br />
      Français, Anglais
      <br />
      <br />
      <strong>Carte et Tarifs</strong>
      <br />
      Consultez la section <a href="#tarifs">tarifs</a> de notre site pour plus d'informations.
    `,
    mapAndRates: `
    <strong>
        Billet standard
      </strong>
      <br />
      Pour un enfant (moins de 12 ans) : 8 €
      <br />
      Pour un adulte (12 ans et plus) : 12 €
      <br />
      <br />
      <strong>Pass Saison</strong>
      <br />
      Pour un enfant (moins de 12 ans) : 20 €
      <br />
      Pour un adulte (12 ans et plus) : 30 €
      <br />
    `,
  },
  {
    id: 4,
    name: "Halle de la Villette, Espace Culturel Polyvalent",
    center: { lat: 48.89536, lng: 2.39333 },
    historicalDates: [
      { date: "1867", event: "Construction de la Halle de la Villette." },
      {
        date: "1986",
        event: "Transformation de la Halle en espace culturel et artistique.",
      },
      {
        date: "2009",
        event: "Réouverture après des travaux de rénovation majeurs.",
      },
    ],
    history: `
    Construite au 19e siècle, la Halle de la Villette est un témoignage de l'architecture
    métallique caractéristique de l'époque industrielle. À l'origine un marché alimentaire,
    elle a été réhabilitée en un espace culturel polyvalent. Aujourd'hui, elle accueille des
    spectacles, des expositions, et des événements culturels qui reflètent la diversité de la
    scène artistique contemporaine.
    `,
    explanation: `
    Découvrez la Halle de la Villette, un espace culturel polyvalent au cœur de Paris.
    Nous vous proposons une variété d'événements, de spectacles et d'activités culturelles
    pour tous les âges. Explorez notre programme sur notre site web et planifiez votre visite.
  `,
    workshops: [
      "Atelier de danse contemporaine",
      "Spectacles musicaux pour enfants",
      "Expositions d'art moderne",
      "Ateliers de cuisine créative",
      "Visites guidées de la Halle et de ses environs",
    ],
    accessInfo: `<strong>Accès et Contacts</strong>
      <br />
      211 Avenue Jean Jaurès, 75019 Paris - Consultez notre site web pour les horaires
      <a href="http://www.halledelavillette.com">halledelavillette.com</a>
      <br />
      <a href="mailto:info@halledelavillette.com">info@halledelavillette.com</a>
      <br />
      <a href="tel:+3312345678">+33 1 23 45 67 8</a>
      <br />
      <br />
      <strong>Carte et Tarifs</strong>
      <br />
      Consultez la section <a href="#tarifs">tarifs</a> de notre site pour plus d'informations.
    `,
    mapAndRates: `
    <strong>
        Billet standard
      </strong>
      <br />
      Pour un enfant (moins de 12 ans) : 8 €
      <br />
      Pour un adulte (12 ans et plus) : 12 €
      <br />
      <br />
      <strong>Pass Saison</strong>
      <br />
      Pour un enfant (moins de 12 ans) : 20 €
      <br />
      Pour un adulte (12 ans et plus) : 30 €
      <br />
    `,
  },
  {
    id: 5,
    name: "Hangar Y, Parc de Découverte Culturelle",
    center: { lat: 48.86729, lng: 2.38146 },
    historicalDates: [
      {
        date: "1910",
        event: "Construction du hangar pour le stockage aérien.",
      },
      { date: "1985", event: "Transformation du hangar en parc culturel." },
      {
        date: "2000",
        event: "Inauguration du parc de découverte culturelle Hangar Y.",
      },
    ],
    history: `
    Hangar Y, anciennement utilisé pour le stockage aérien, a été transformé en un
    parc de découverte culturelle. Ce lieu unique offre des expériences sensorielles,
    artistiques et culinaires, dans un cadre riche en histoire et en créativité.
    `,
    explanation: `
    Enveloppez-vous de plaisir et de découverte dans le parc de Hangar Y.
    Cette initiative vise à proposer des ateliers ludiques et
    pédagogiques, dans un cadre riche en histoire, artistique et culturel.
    Des expériences sensorielles, artistiques et culinaires attendent vos
    petits et grands. Pour des informations pratiques et la tarification
    des visites, consultez notre site web et la section "infos pratiques" de cette page.
  `,
    workshops: [
      "Construction de modèles réduits d'avions et d'aérostats",
      "Atelier de dessin et de peinture sur le thème de l'aviation",
      "Atelier de découverte et de réalisation de dessins animés",
      "Visite guidée des œuvres d'art du parc de Hangar Y",
      "Dégustation et découverte des spécialités gastronomiques régionales",
    ],
    accessInfo: `<strong>Accès et Contacts</strong>
      <br />
      Quai de Javel 100 Meudon - CARTE Jours et horaires d'ouverture
      <a href="http://www.hangay.com">hp / hangay.com</a>
      <br />
      <a href="mailto:contact@hangay.com">contact@hangay.com</a>
      <br />
      <a href="tel:+3312345678">+33 1 23 45 67 8</a>
      <br />
      <br />
      <strong>Langues Parlées</strong>
      <br />
      Français, Anglais, Espagnol
      <br />
      <br />
      <strong>Carte et Tarifs</strong>
      <br />
      Consultez la section <a href="#tarifs">tarifs</a> de cette page pour
      le parcours et la participation aux ateliers.
    `,
    mapAndRates: `
    <strong>
        Parc + Exposition Temporaire + Participation aux Ateliers
      </strong>
      <br />
      Pour un enfant (moins de 12 ans) : 10 €
      <br />
      Pour un adulte (12 ans et plus) : 15 €
      <br />
      <br />
      <strong>Parc + Exposition Temporaire</strong>
      <br />
      Pour un enfant (moins de 12 ans) : 7 €
      <br />
      Pour un adulte (12 ans et plus) : 10 €
      <br />
    `,
  },
  {
    id: 6,
    name: "Tour Eiffel, Symbole emblématique de Paris",
    center: { lat: 48.858844, lng: 2.29435 },
    historicalDates: [
      {
        date: "1889",
        event: "Construction de la Tour Eiffel pour l'Exposition Universelle.",
      },
      { date: "1930", event: "Installation d'antennes radio sur la Tour." },
      {
        date: "2000",
        event:
          "Réaménagement des étages pour les visiteurs et inauguration du champagne bar.",
      },
    ],
    history: `
    La Tour Eiffel, conçue par l'ingénieur Gustave Eiffel, a été achevée en 1889
    pour l'Exposition Universelle. À l'origine critiquée, elle est rapidement devenue
    l'emblème de Paris et est aujourd'hui l'une des attractions les plus visitées au monde.
    `,
    explanation: `
    Admirez la majesté de la Tour Eiffel, symbole emblématique de Paris.
    Des vues panoramiques à couper le souffle, des restaurants raffinés,
    et des événements spéciaux vous attendent. Consultez notre site web pour
    planifier votre visite et découvrir les nombreuses facettes de ce monument emblématique.
  `,
    workshops: [
      "Visite guidée de la Tour Eiffel",
      "Dîner romantique au restaurant du sommet",
      "Spectacles de lumière et feux d'artifice",
      "Expositions historiques sur la construction de la Tour",
      "Activités ludiques pour les enfants sur le parvis",
    ],
    accessInfo: `<strong>Accès et Contacts</strong>
      <br />
      Champ de Mars, 5 Avenue Anatole France, 75007 Paris - Consultez notre site pour les horaires
      <a href="http://www.toureiffel.fr">toureiffel.fr</a>
      <br />
      <a href="mailto:info@toureiffel.fr">info@toureiffel.fr</a>
      <br />
      <a href="tel:+3312345678">+33 1 23 45 67 8</a>
      <br />
      <br />
      <strong>Langues Parlées</strong>
      <br />
      Français, Anglais, Espagnol, Allemand, Chinois
      <br />
      <br />
      <strong>Jours et Horaires d'Ouverture</strong>
      <br />
      Lundi à Dimanche : 9h00 - 23h45
    `,
    mapAndRates: `
    <strong>
        Billet d'ascension
      </strong>
      <br />
      Pour un enfant (moins de 12 ans) : 8 €
      <br />
      Pour un adulte (12 ans et plus) : 15 €
      <br />
      <br />
      <strong>Pass Sommet + Repas</strong>
      <br />
      Pour un enfant (moins de 12 ans) : 20 €
      <br />
      Pour un adulte (12 ans et plus) : 40 €
      <br />
    `,
  },
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const renderPage = () => {
    const locationIndex = Math.ceil(currentPage / 2) - 1;
    const location = locations[locationIndex];

    if (currentPage === 0) {
      return <Introduction onNext={nextPage} locations={locations} />;
    }

    if (currentPage % 2 === 1) {
      // Page de carte
      return <MapComponent center={location.center} />;
    } else if (currentPage < locations.length * 2) {
      // Page d'explication
      return <ExplanationPage location={location} />;
    } else if (currentPage === locations.length * 2) {
      // Dernière page, pas de bouton suivant
      return <FinalPage />;
    }
  };

  return (
    <div>
      {renderPage()}
      {currentPage > 0 && (
        <button onClick={previousPage}>Page précédente</button>
      )}
      {currentPage > 0 && currentPage < locations.length * 2 && (
        <button onClick={nextPage}>Page suivante</button>
      )}
    </div>
  );
};

export default App;
