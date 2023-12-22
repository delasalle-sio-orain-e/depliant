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
    name: "Lieu 1",
    center: { lat: 40.7128, lng: -74.006 },
    explanation: "Explication pour Lieu 1",
  },
  {
    id: 2,
    name: "Lieu 2",
    center: { lat: 41.8781, lng: -87.6298 },
    explanation: "Explication pour Lieu 2",
  },
  // Ajoutez d'autres lieux au besoin
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderPage = () => {
    if (currentPage === 0) {
      return <Introduction onNext={nextPage} />;
    }

    const locationIndex = Math.ceil(currentPage / 2) - 1;
    const location = locations[locationIndex];

    if (currentPage % 2 === 1) {
      // Page de carte
      return (
        <MapComponent center={location.center} destination={location.center} />
      );
    } else if (currentPage < locations.length * 2) {
      // Page d'explication
      return <ExplanationPage explanation={location.explanation} />;
    } else {
      // Dernière page
      return <FinalPage />;
    }
  };

  return (
    <div>
      {renderPage()}
      <button onClick={nextPage}>Page suivante</button>
    </div>
  );
};

export default App;
