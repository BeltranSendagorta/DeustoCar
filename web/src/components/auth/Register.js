import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../styles/Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const register = async (event) => {
        event.preventDefault(); // Evita que el formulario recargue la página
        try {
            const user = {
                name: name,
                username: userName,
                password: password
            };
            console.log('Datos de registro enviados:', user);

            const response = await axios.post('/api/auth/register', user);
            console.log(response);

            // Si el backend responde con status 200 significa que el usuario se registró correctamente
            if (response.status === 200) {
                // Redirige a la ventana de inicio de sesión (ajusta la ruta a la de tu login)
                navigate('/auth');
            }
        } catch (error) {
            console.log('Error de registro:', error);
        }
    };

    return (
        <div className="auth-box" id="registro">
            <h2>Registro</h2>
            {/* El formulario ejecuta "register" al hacer submit */}
            <form onSubmit={register}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {/* Notar que el botón es type="submit" para disparar onSubmit del formulario */}
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
