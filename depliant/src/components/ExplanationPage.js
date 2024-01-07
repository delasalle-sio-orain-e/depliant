// ExplanationPage.js
import React from "react";

const ExplanationPage = ({ location }) => {
  const {
    name,
    images,
    historicalDates,
    history,
    explanation,
    workshops,
    accessInfo,
    mapAndRates,
  } = location || {};

  return (
    <div>
      <div className="container">
        <div className="custom-rectangle">
          <h1>{name}</h1>

          {/* Display multiple images if the 'images' array exists */}
          {images &&
            images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${name}-image-${index}`}
                style={{ maxWidth: "100%" }}
              />
            ))}

          <p>{explanation}</p>

          <h2>Dates historiques</h2>
          <ul>
            {historicalDates &&
              historicalDates.map((event, index) => (
                <li key={index}>
                  <strong>{event.date}:</strong> {event.event}
                </li>
              ))}
          </ul>

          <h2>Histoire</h2>
          <p>{history}</p>

          <h2>Que peut-on faire là-bas ?</h2>
          <ul>
            {workshops &&
              workshops.map((workshop, index) => (
                <li key={index}>{workshop}</li>
              ))}
          </ul>

          <h2>Informations Pratiques</h2>
          <p
            id="infos-pratiques"
            dangerouslySetInnerHTML={{ __html: accessInfo || "" }}
          />

          <h2>Tarifs</h2>
          <p
            id="tarifs"
            dangerouslySetInnerHTML={{ __html: mapAndRates || "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ExplanationPage;
