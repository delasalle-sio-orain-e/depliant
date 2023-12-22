// GenericPage.js
import React from "react";

const GenericPage = ({ children, onNext }) => {
  return (
    <div>
      {children}
      <button onClick={onNext}>Page suivante</button>
    </div>
  );
};

export default GenericPage;
