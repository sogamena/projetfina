import React from "react";
import { useParams } from "react-router-dom";
import vehicles from "../../data/Vehicule";
import "./vehiculeDetail.css"

const VehiculeDetail = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);

  if (!vehicle) {
    return <h2>Vehicle not found</h2>;
  }

  return (
    <div className="vehicle-detail">
      <div className="nomv">
          <img className="image-detail" src={vehicle.image} alt={vehicle.name} />
          <h1>{vehicle.name}</h1>
          <p className="price"><strong>Price:</strong> {vehicle.price}</p>
      </div>

      <div className="view">
          {/* Engine & Performance Parameters */}
        <h3>Engine & Performance Parameters</h3>
        <p><strong>Engine Type:</strong> {vehicle.EngineType}</p>
        <p><strong>Piston Displacement:</strong> {vehicle.PistonDisplacement}</p>
        <p><strong>Maximum Output:</strong> {vehicle.maximumOutput}</p>
        <p><strong>Bore x Stroke:</strong> {vehicle.BoreStroke}</p>
        <p><strong>Max. Power:</strong> {vehicle.MaxPower}</p>
        <p><strong>Max. Torque:</strong> {vehicle.MaxTorque}</p>
        <p><strong>Compression Ratio:</strong> {vehicle.CompressionRatio}</p>
        <p><strong>Starting Method:</strong> {vehicle.StartingMethod}</p>
        <p><strong>Clutch Type / Method:</strong> {vehicle.ClutchType}</p>
        <p><strong>Lubrication Method:</strong> {vehicle.LubricationMethod}</p>
        <p><strong>Lubricant Capacity:</strong> {vehicle.LubricantCapacity}</p>
        <p><strong>Gear Shift Method:</strong> {vehicle.GearShiftMethod}</p>

        {/* Suspension */}
        <h3>Suspension</h3>
        <p><strong>Front:</strong> {vehicle.Front}</p>
        <p><strong>Rear:</strong> {vehicle.Rear}</p>

        {/* Brakes */}
        <h3>Brakes</h3>
        <p><strong>Front Brake:</strong> {vehicle.FrontBrake}</p>
        <p><strong>Rear Brake:</strong> {vehicle.RearBrake}</p>

        {/* Tyres */}
        <h3>Tyres</h3>
        <p><strong>Size:</strong> {vehicle.Size}</p>
        <p><strong>Type:</strong> {vehicle.Type}</p>

        {/* Fuel */}
        <h3>Fuel</h3>
        {/* <p><strong>CNGCylinderCapacity :</strong> {vehicle.CNGCylinderCapacity}</p>
        <p>FuelConsumptionCNG : {vehicle.CNGCylinderCapacity}</p> */}
        <p><strong>Fuel Type:</strong> {vehicle.FuelType}</p>
        <p><strong>Gasoline Fuel Tank Capacity:</strong> {vehicle.GasolineFuelTankCapacity}</p>
        <p><strong>Fuel Consumption - Gasoline:</strong> {vehicle.FuelConsumptionGasoline}</p>

        {/* Electricals */}
        <h3>Electricals</h3>
      <p><strong>Battery:</strong> {vehicle.Battery}</p>
        {/* <p><strong>FrameType : {vehicle.FrameType}</strong></p> */}

        {/* Vehicle Dimensions */}
        <h3>Vehicle Dimensions</h3>
        <p><strong>Frame Type:</strong> {vehicle.FrameType}</p>
        <p><strong>Roof Rack:</strong> {vehicle.RoofRack ? vehicle.RoofRack : "Not Included"}</p>
        <p><strong>Load Bearing Capacity:</strong> {vehicle.LoadBearingCapacity}</p>
        <p><strong>Wheel Base:</strong> {vehicle.WheelBase}</p>
        <p><strong>Wheel Track:</strong> {vehicle.WheelTrack}</p>
        <p><strong>Overall Length:</strong> {vehicle.OverallLength}</p>
        <p><strong>Overall Width:</strong> {vehicle.OverallWidth}</p>
        <p><strong>Overall Height:</strong> {vehicle.OverallHeight}</p>
        <p><strong>Cargo Cabin:</strong> {vehicle.CargoCabin}</p>
        <p><strong>Turning Circle:</strong> {vehicle.TurningCircle}</p>
        <p><strong>Gradeability:</strong> {vehicle.Gradeability}</p>
      </div>
    </div>
  );
};

export default VehiculeDetail;
