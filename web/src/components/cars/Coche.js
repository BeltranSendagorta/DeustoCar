import React, { useState, useEffect } from "react";
import axios from "axios";
//import { FaHeart, FaRegHeart } from "react-icons/fa";
import "../../styles/Coche.css";
import { useParams } from 'react-router-dom';



const Coche = () => {
  const { cocheId } = useParams();
  const [coche, setCoche] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`/api/coches/matricula/${cocheId}`)
    .then(response => {
      console.log(response.data)
      setCoche(response.data)
      setLoading(false)
    })
    .catch(error=>{
      console.error('Error obteniendo coches')
    })
  },[cocheId])
/*
  // Función para alternar el estado de favorito
  const toggleFavorite = async () => {
    try {
      setIsFavorite(!isFavorite);
      if (isFavorite) {
        // Eliminar coche de favoritos
        try {
          const response = await axios.delete(
            `http://localhost:3000/auth/favorite-coches/delete`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              data: { cocheID: coche.id },
            }
          );
          console.log(response.data.message);
        } catch (error) {
          console.error("Error deleting favorite coche:", error);
        }
      } else {
        // Agregar coche a favoritos
        try {
          const response = await axios.post(
            "http://localhost:3000/auth/favorite-coches/add",
            { cocheID: coche.id },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log(response.data.message);
        } catch (error) {
          console.error("Error adding favorite coche:", error);
        }
      }
    } catch (error) {
      console.error("Error toggling favorite state:", error);
    }
  };
*/
if (loading) {
  return <p>Cargando...</p>;
}
  return (
    <div className="coche-coched">
      {/* Icono de favorito */}
      <h3> {coche.marca}</h3>
    </div>
  );
};

export default Coche;
