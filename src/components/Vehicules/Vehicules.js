import React, { useEffect } from "react";
import VehiclesCard from "../VehiculesCard/VehiclesCard";
import vehicles from "../../data/Vehicule.js";
import "./Vehicule.css";

const Vehicules = () => {
  useEffect(() => {
    document.title = "Vehicules";
  }, []);
  return (
    <div className="container">
      <h1>Our vehicles</h1>
      <div className="vehicle-grid">
        {vehicles.map((vehicle, index) => (
          <VehiclesCard key={index} id={vehicle.id} {...vehicle} />
        ))}
      </div>
    </div>
  );
};

export default Vehicules;
