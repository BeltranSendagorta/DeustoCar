import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Coche.css";
import { useParams } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Importar los iconos
import { useFavorites } from "../../context/FavoritesContext"; // Importar el contexto de favoritos

const Coche = () => {
  const { cocheId } = useParams();
  const [coche, setCoche] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite } = useFavorites(); // Accedemos al contexto de favoritos

  useEffect(() => {
    // Obtener información del coche al cargar el componente
    setLoading(true);
    axios
      .get(`/api/coches/matricula/${cocheId}`)
      .then((response) => {
        setCoche(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error obteniendo coche:", error);
        setLoading(false);
      });
  }, [cocheId]);

  // Verificar si el coche está en favoritos
  const isFavorite = favorites.some((fav) => fav.matricula === coche?.matricula);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="coche-card">
      {/* Icono de favorito */}
      <div
        className="favorite-icon"
        onClick={() => toggleFavorite(coche)} // Añadir o quitar de favoritos
      >
        {isFavorite ? (
          <FaHeart className="heart-icon filled" />
        ) : (
          <FaRegHeart className="heart-icon" />
        )}
      </div>
      <h3>{`${coche.marca} ${coche.modelo}`}</h3>
      <p>Año de fabricación: {coche.anyioFabricacion || "N/A"}</p>
      <p>Tipo de híbrido: {coche.tipo_hidrido || "N/A"}</p>
      <p>Autonomía eléctrica (km): {coche.autonomiaElectrica || "N/A"}</p>
      <p>
        Precio:{" "}
        {coche.precio ? `$${coche.precio.toLocaleString()}` : "N/A"}
      </p>
      <p>Matrícula: {coche.matricula}</p>
    </div>
  );
};

export default Coche;
