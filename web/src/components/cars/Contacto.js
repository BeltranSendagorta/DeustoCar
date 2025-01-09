import React from 'react';
import '../../styles/Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>
  ¿Tienes alguna pregunta o necesitas más información? 
</p>
<p>
  Rellena el formulario y nos pondremos en contacto contigo.
</p>

      <form>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />

        <label htmlFor="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" placeholder="Tu teléfono (opcional)" />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" rows="4" placeholder="Escribe tu mensaje aquí..." required></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
