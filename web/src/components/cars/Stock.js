import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Stock.css";

const Stock = () => {
  const [vehicles, setVehicles] = useState([]); 
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vehicles/getAll") 
      .then((response) => {
    
        const vehiclesData = response.data.map((vehicle) => ({
          id: vehicle.id,
          marca: vehicle.marca,
          modelo: vehicle.modelo,
          precio: vehicle.precio,
          imagen: vehicle.imagen, 
        }));
        setVehicles(vehiclesData);
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
            <div key={vehicle.id} className="vehiculo">
              <img src={vehicle.imagen} alt={`${vehicle.marca} ${vehicle.modelo}`} />
              <h4>
                {vehicle.marca} {vehicle.modelo}
              </h4>
              <p>Precio: ${vehicle.precio.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>Cargando vehículos...</p> 
        )}
      </div>
    </div>
  );
};

export default Stock;
