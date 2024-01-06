// MapComponent.js
import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import customMarkerIcon from "../icons/custom-marker.png";

const MapComponent = ({ locations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (locations && locations.length > 0 && mapRef.current) {
      // Obtenez les coordonnées du centre de Paris (ou de la zone qui convient)
      const parisCenter = { lat: 48.852, lng: 2.3522 };

      const map = L.map(mapRef.current).setView(parisCenter, 11.4); // Ajustez le niveau de zoom

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map,
      );

      // Créez un objet Icon pour l'icône personnalisée
      const customIcon = L.icon({
        iconUrl: customMarkerIcon,
        iconSize: [32, 32], // Ajustez la taille de l'icône selon vos besoins
        iconAnchor: [16, 32], // Point d'ancrage de l'icône (centre en bas)
      });

      // Ajoutez des marqueurs avec l'icône personnalisée pour chaque lieu
      locations.forEach((location) => {
        L.marker([location.center.lat, location.center.lng], {
          icon: customIcon,
        })
          .addTo(map)
          .bindPopup(location.name); // Ajoutez une popup avec le nom du lieu
      });

      return () => map.remove();
    }
  }, [locations]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
