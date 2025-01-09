import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../../styles/Coche.css";

const Coche = ({ car, id, token }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchFavoriteStatus = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/auth/favorite-cars/check",
          { carID: String(id) },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsFavorite(response.data.isFavorite);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    fetchFavoriteStatus();
  }, [id, token]);

  // Función para alternar el estado de favorito
  const toggleFavorite = async () => {
    try {
      setIsFavorite(!isFavorite);
      if (isFavorite) {
        // Eliminar coche de favoritos
        try {
          const response = await axios.delete(
            `http://localhost:3000/auth/favorite-cars/delete`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              data: { carID: car.id },
            }
          );
          console.log(response.data.message);
        } catch (error) {
          console.error("Error deleting favorite car:", error);
        }
      } else {
        // Agregar coche a favoritos
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/favorite-cars/add",
            { carID: car.id },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data.message);
        } catch (error) {
          console.error("Error adding favorite car:", error);
        }
      }
    } catch (error) {
      console.error("Error toggling favorite state:", error);
    }
  };

  return (
    <div className="coche-card">
      {/* Icono de favorito */}
      <div
        style={{ display: "flex", justifyContent: "flex-end", cursor: "pointer" }}
        onClick={toggleFavorite}
      >
        {isFavorite ? (
          <FaHeart color="#004aad" size={24} /> 
        ) : (
          <FaRegHeart color="#004aad" size={24} /> 
        )}
      </div>
      <h3>{car.marca} {car.modelo}</h3>
      <p><strong>Precio:</strong> ${car.precio.toLocaleString()}</p>
      <p><strong>ID:</strong> {car.id}</p>
    </div>
  );
};

export default Coche;
