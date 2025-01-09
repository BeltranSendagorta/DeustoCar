import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault(); // Evita la recarga de la página
    try {
      const userCredentials = {
        username: username,
        password: password,
      };
      
      console.log('Datos de login enviados:', userCredentials);
      const response = await axios.post('/api/auth/login', userCredentials);

      // Si el backend responde con status 200, redirigimos a /home
      if (response.status === 200) {
        navigate('/home');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Maneja el error según tu aplicación (por ejemplo, mostrar notificación)
    }
  };

  return (
    <div className="auth-box">
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
