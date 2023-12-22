// MapComponent.js
import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Importez votre icône ici (ajustez le chemin selon votre structure de projet)
import customMarkerIcon from "../icons/custom-marker.png";

const MapComponent = ({ center, destination }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (center && destination && mapRef.current) {
      const map = L.map(mapRef.current).setView([center.lat, center.lng], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map,
      );

      // Créez un objet Icon pour l'icône personnalisée
      const customIcon = L.icon({
        iconUrl: customMarkerIcon,
        iconSize: [32, 32], // Ajustez la taille de l'icône selon vos besoins
        iconAnchor: [16, 32], // Point d'ancrage de l'icône (centre en bas)
      });

      // Ajoutez des marqueurs avec l'icône personnalisée
      L.marker([center.lat, center.lng], { icon: customIcon }).addTo(map);
      L.marker([destination.lat, destination.lng], { icon: customIcon }).addTo(
        map,
      );

      return () => map.remove();
    }
  }, [center, destination]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }}></div>;
};

export default MapComponent;
