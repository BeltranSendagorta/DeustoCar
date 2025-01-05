import React from 'react';
import '../../styles/Auth.css'

const Auth = () => {
    return (
        <div className="auth-box">
            <h2>Inicio de Sesión</h2>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default Auth;
