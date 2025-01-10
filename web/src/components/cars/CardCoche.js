import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardCoche = ({vehicle}) => {
    return (
        <div key={vehicle.matricula} className="vehiculo">
            <h4>
                {vehicle.marca} {vehicle.modelo}
            </h4>
            <p>Precio: ${vehicle.precio.toLocaleString()}</p>
            <p>Matricula: ${vehicle.matricula}</p>
            <Link to= {`/coches/${vehicle.matricula}`} className="details-button">
                Ver detalles
            </Link>
        </div>
    )
}

export default CardCoche