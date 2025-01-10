import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Stock.css";
import CardCoche from "./CardCoche";

const Stock = () => {
  const [vehicles, setVehicles] = useState([]); 
  useEffect(() => {
    axios
      .get("/api/coches/getAll") 
      .then((response) => {
    
        const vehiclesData = response.data.map((vehicle) => ({
          matricula: vehicle.matricula,
          marca: vehicle.marca,
          modelo: vehicle.modelo,
          precio: vehicle.precio,
         
        }));
        setVehicles(vehiclesData);
        console.log(vehiclesData);
      })
      .catch((error) => {
        console.error("Error obteniendo los vehículos:", error);
      });
  }, []);

  return (
    <div className="stock-container">
      <h2>Vehículos en Stock</h2>
      <div className="vehiculos">
      
        {vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
          <CardCoche vehicle={vehicle}/>
          ))
        ) : (
          <p>Cargando vehículos...</p> 
        )}
      </div>
     
    </div>
  );
};

export default Stock;
