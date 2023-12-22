// Introduction.js
import React from "react";

const Introduction = ({ onNext }) => {
  return (
    <div>
      <h1>Introduction</h1>
      <p>Contenu de l'introduction...</p>
      <button onClick={onNext}>Page suivante</button>
    </div>
  );
};

export default Introduction;
