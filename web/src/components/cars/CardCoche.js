import React from "react";
import { Link } from "react-router-dom";
import "../../styles/CardCoche.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useFavorites } from "../../context/FavoritesContext"; // Importar el contexto

const CardCoche = ({ vehicle, onToggleDestacado }) => {
  const { favorites } = useFavorites(); // Acceder a los favoritos desde el contexto

  // Verificar si el coche está en favoritos
  const isFavorite = favorites.some((fav) => fav.matricula === vehicle.matricula);

  const toggleFavorite = () => {
    onToggleDestacado(vehicle); // Notificar al contexto para añadir o quitar favoritos
  };

  return (
    <div key={vehicle.matricula} className="vehiculo">
      <div className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? (
          <FaHeart className="heart-icon filled" />
        ) : (
          <FaRegHeart className="heart-icon" />
        )}
      </div>
      <h4>
        {vehicle.marca} {vehicle.modelo}
      </h4>
      <p>Precio: ${vehicle.precio.toLocaleString()}</p>
      <p>Matrícula: {vehicle.matricula}</p>
      <Link to={`/coches/${vehicle.matricula}`} className="details-button">
        Ver detalles
      </Link>
    </div>
  );
};

export default CardCoche;
