import React, { useState } from 'react';
import './App.css';

// Componentes
import Auth from './components/auth/Auth';
import Register from './components/auth/Register';
import Home from './components/cars/Home';
import Stock from './components/cars/Stock';
import Header from './components/header/Header';
import Coche from './components/cars/Coche';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext'; // Importar el proveedor de favoritos

// Layout que incluye Header
const LayoutWithHeader = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("AUTHENTICATED:", isAuthenticated);
  };

  return (
    <FavoritesProvider> {/* Envolver toda la aplicación en el proveedor de favoritos */}
      <Router>
        <div className="App">
          <Routes>
            {/* Redirigir la ruta raíz ("/") a la página de registro */}
            <Route path="/" element={<Navigate to="/register" />} />

            {/* Página de registro (sin Header) */}
            <Route path="/register" element={<Register />} />

            {/* Página de inicio de sesión (sin Header) */}
            <Route path="/auth" element={<Auth onLogin={handleLogin} />} />

            {/* Páginas con Header */}
            <Route
              path="/home"
              element={
                <LayoutWithHeader>
                  <Home />
                </LayoutWithHeader>
              }
            />
            <Route
              path="/stock"
              element={
                <LayoutWithHeader>
                  <Stock />
                </LayoutWithHeader>
              }
            />
            
            <Route
              path="/coches/:cocheId"
              element={
                <LayoutWithHeader>
                  <Coche />
                </LayoutWithHeader>
              }
            />

            {/* Ruta por defecto (404) */}
            <Route path="*" element={<Navigate to="/register" />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
