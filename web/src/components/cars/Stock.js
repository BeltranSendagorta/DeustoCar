import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/Stock.css";
import CardCoche from "./CardCoche";
import { useFavorites } from "../../context/FavoritesContext"; // Importar el contexto

const Stock = () => {
  const [vehicles, setVehicles] = useState([]); // Lista completa de coches
  const [filteredVehicles, setFilteredVehicles] = useState([]); // Lista filtrada de coches
  const [filters, setFilters] = useState({ marca: "", modelo: "", precio: "" }); // Filtros
  const [availableMarcas, setAvailableMarcas] = useState([]); // Marcas disponibles
  const [availableModelos, setAvailableModelos] = useState([]); // Modelos disponibles de la marca seleccionada

  const { toggleFavorite } = useFavorites(); // Función para manejar favoritos

  // Obtener los coches desde la API
  useEffect(() => {
    axios
      .get("/api/coches/getAll") // Endpoint de tu API
      .then((response) => {
        setVehicles(response.data); // Guardar los coches obtenidos
        setFilteredVehicles(response.data); // Inicialmente, todos los coches son visibles
        const marcas = Array.from(new Set(response.data.map((car) => car.marca)));
        setAvailableMarcas(marcas); // Extraer marcas únicas
      })
      .catch((error) => {
        console.error("Error obteniendo los vehículos:", error);
      });
  }, []);

  // Actualizar modelos disponibles según la marca seleccionada
  useEffect(() => {
    if (filters.marca) {
      const modelos = Array.from(
        new Set(vehicles.filter((car) => car.marca === filters.marca).map((car) => car.modelo))
      );
      setAvailableModelos(modelos);
    } else {
      setAvailableModelos([]);
    }
  }, [filters.marca, vehicles]);

  // Actualizar la lista filtrada cuando cambian los filtros
  useEffect(() => {
    const { marca, modelo, precio } = filters;

    const filtered = vehicles.filter((vehicle) => {
      return (
        (marca === "" || vehicle.marca === marca) &&
        (modelo === "" || vehicle.modelo === modelo) &&
        (precio === "" || vehicle.precio <= parseFloat(precio))
      );
    });

    setFilteredVehicles(filtered);
  }, [filters, vehicles]);

  // Manejar cambios en los filtros
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="stock-container">
      {/* Barra de Filtrado */}
      <div className="filter-bar">
        <select
          name="marca"
          value={filters.marca}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="">Seleccione una marca</option>
          {availableMarcas.map((marca) => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>

        <select
          name="modelo"
          value={filters.modelo}
          onChange={handleFilterChange}
          className="filter-select"
          disabled={!filters.marca}
        >
          <option value="">Seleccione un modelo</option>
          {availableModelos.map((modelo) => (
            <option key={modelo} value={modelo}>
              {modelo}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="precio"
          placeholder="Precio máximo"
          value={filters.precio}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>

      {/* Resultados Filtrados */}
      <div className="vehiculos">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle) => (
            <CardCoche
              key={vehicle.matricula}
              vehicle={vehicle}
              onToggleDestacado={toggleFavorite} // Pasamos la función del contexto
            />
          ))
        ) : vehicles.length === 0 ? (
          <p>Cargando vehículos...</p>
        ) : (
          <p>No se encontraron vehículos que coincidan con los filtros.</p>
        )}
      </div>
    </div>
  );
};

export default Stock;
