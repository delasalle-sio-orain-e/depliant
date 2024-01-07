// Introduction.js
import React from "react";
import MapComponentIntroduction from "./MapComponentIntroduction";

const Introduction = ({ onNext, locations, onLocationClick }) => {
  const handleLocationClick = (locationId) => {
    // Vous pouvez effectuer une redirection ici ou effectuer toute autre action nécessaire
    console.log(`Redirection vers la page d'explication de ${locationId}`);
  };
  return (
    <div>
      <div className="slider">
        <img
          src={require("../assets/Fond.jpg")}
          className="fond"
          alt="Fond d'écran"
        />
        <div className="text">
          <h1>Paris l'industrialisation</h1>
          <h2>
            <strong>
              "Paris forge son destin, l'industrialisation guide sa
              transformation".
            </strong>
          </h2>
          <p>
            <strong>Liste des lieux :</strong>
          </p>
          <ul>
            {locations.map((location, index) => (
              <li key={location.id}>
                {/* Utilisation d'un lien avec une fonction de gestion d'événements onClick */}
                <a href="#" onClick={() => onLocationClick(index)}>
                  {location.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="container">
          <p>
            <strong>L'industrialisation</strong> est le processus de
            transformation d'une économie axée sur l'agriculture et l'artisanat
            vers une économie centrée sur la production industrielle à grande
            échelle. Elle implique l'utilisation de machines, de technologies
            avancées et d'une main-d'œuvre spécialisée dans des secteurs tels
            que la manufacture et la production en série.
          </p>
          <br />

          <p>
            À Paris, <strong>l'industrialisation</strong> a connu une évolution
            marquée au cours des XIXe et XXe siècles. Initialement caractérisée
            par des activités artisanales et manufacturières, la ville a
            rapidement adopté des technologies industrielles révolutionnaires.
            Les progrès dans les secteurs du textile, de la métallurgie, de la
            chimie et de l'automobile ont propulsé Paris au cœur de l'ère
            industrielle.
          </p>
          <br />

          <p>
            L'évolution de <strong>l'industrialisation parisienne</strong> a
            engendré des transformations majeures dans son paysage urbain. Les
            quartiers autrefois dominés par des ateliers artisanaux ont cédé la
            place à des usines modernes et à une urbanisation accrue.{" "}
            <strong>L'industrialisation</strong> a également contribué à l'essor
            économique de la ville, attirant une main-d'œuvre nombreuse et
            diversifiée.
          </p>
          <br />

          <p>
            Avec le temps, l'économie parisienne a évolué vers des secteurs plus
            tertiaires et technologiques, marquant une transition de{" "}
            <strong>l'industrialisation</strong> vers une économie
            post-industrielle. Cependant, l'héritage de{" "}
            <strong>l'industrialisation</strong> demeure visible dans certains
            quartiers et structures qui témoignent de cette époque révolue, tout
            en faisant partie intégrante du riche tissu historique de la
            capitale française.
          </p>
          <br />
        </div>
        <MapComponentIntroduction locations={locations} />
        <button onClick={onNext}>Page suivante</button>
      </div>
    </div>
  );
};

export default Introduction;
