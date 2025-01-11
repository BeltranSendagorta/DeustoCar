import React, { createContext, useState, useContext } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // Estado de los favoritos

  // Función para añadir o quitar favoritos
  const toggleFavorite = (vehicle) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.matricula === vehicle.matricula
      );
  
      if (isAlreadyFavorite) {
        return prevFavorites.filter((fav) => fav.matricula !== vehicle.matricula);
      } else {
        return [...prevFavorites, vehicle];
      }
    });
  };
  

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
