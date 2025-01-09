import React from 'react';
import '../../styles/Home.css';
import Header from '../header/Header'; 

const Home = () => {
  return (
    <div id="home-container">
      <Header />

      <main>
        <section id="hero">
          <h2>Tu mejor opción en vehículos</h2>
          <p>Encuentra el coche de tus sueños con nosotros.</p>
        </section>

        <section id="historia">
          <h3>Nuestra Historia</h3>
          <p>
            DeustoCar nació con una misión clara: ofrecer vehículos híbridos de alta calidad que respeten el 
            medioambiente. Desde nuestros inicios, nos hemos comprometido con la sostenibilidad, promoviendo 
            una movilidad más limpia y eficiente. Creemos que el futuro del transporte debe ser ecológico y 
            accesible para todos. Únete a nosotros en este camino hacia un mundo más verde.
          </p>
        </section>

        <section id="destacados">
          <h3>Vehículos destacados</h3>
          <div className="vehiculos">
            <div className="vehiculo">
              <img src="/images/coche1.jpg" alt="Coche destacado 1" />
              <h4>Marca y modelo</h4>
              <p>Precio: $20,000</p>
            </div>
            <div className="vehiculo">
              <img src="/images/coche2.jpg" alt="Coche destacado 2" />
              <h4>Marca y modelo</h4>
              <p>Precio: $25,000</p>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default Home;
