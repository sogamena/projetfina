import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./vehiculesCard.css"

const VehiclesCard = ({ id, name, price, image }) => {
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/vehicle/${id}`);
  };

  return (
    <div className="vehicle-card">
      <img src={image} alt={name} className="vehicle-image" />
      <div className="vehicle-info">
        <h3 className="vehicle-name">{name}</h3>
        <p className="vehicle-description">{price}</p>
        <button className="btn-detail" onClick={handleDetailClick}>For detail</button>
      </div>
    </div>
  );
};

export default VehiclesCard;
