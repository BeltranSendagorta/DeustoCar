import React from "react";
import "../../styles/Home.css";
import Header from "../header/Header";
import CardCoche from "./CardCoche"; // Reutilizamos CardCoche
import { useFavorites } from "../../context/FavoritesContext"; // Importamos el contexto

const Home = () => {
  const { favorites, toggleFavorite } = useFavorites(); // Accedemos a los favoritos y la función para eliminarlos

  return (
    <div id="home-container">
      <Header />

      <main>
        <section id="historia">
          <h3>Nuestra Historia</h3>
          <p>
            DeustoCar nació con una misión clara: ofrecer vehículos híbridos de
            alta calidad que respeten el medioambiente. Desde nuestros inicios,
            nos hemos comprometido con la sostenibilidad, promoviendo una
            movilidad más limpia y eficiente. Creemos que el futuro del
            transporte debe ser ecológico y accesible para todos. Únete a
            nosotros en este camino hacia un mundo más verde.
          </p>
        </section>

        <section id="destacados">
          <h3>Vehículos destacados</h3>
          <div className="vehiculos">
            {favorites.length > 0 ? (
              favorites.map((vehiculo) => (
                <CardCoche
                  key={vehiculo.matricula}
                  vehicle={vehiculo}
                  onToggleDestacado={toggleFavorite} // Permite eliminar de favoritos
                />
              ))
            ) : (
              <p>No hay vehículos destacados por el momento.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
