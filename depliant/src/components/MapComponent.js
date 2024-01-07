// MapComponent.js
import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Importez votre icône ici (ajustez le chemin selon votre structure de projet)
import customMarkerIcon from "../icons/custom-marker.png";

const MapComponent = ({ center, name }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (center && mapRef.current) {
      const map = L.map(mapRef.current).setView([center.lat, center.lng], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map,
      );

      const customIcon = L.icon({
        iconUrl: customMarkerIcon,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      // Ajoutez des marqueurs avec l'icône personnalisée et la popup
      const marker = L.marker([center.lat, center.lng], { icon: customIcon })
        .addTo(map)
        .bindPopup(name); // Remplacez "Votre texte ici" par le nom du lieu

      return () => map.remove();
    }
  }, [center]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
