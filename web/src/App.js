import React, { useState } from 'react';
import './App.css';

// Componentes
import Auth from './components/auth/Auth';
import Register from './components/auth/Register';
import Home from './components/cars/Home';
import Stock from './components/cars/Stock';
import Contacto from './components/cars/Contacto';
import Header from './components/header/Header';
import Coche from './components/cars/Coche';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


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
    <Router>
      <div className="App">
        <Routes>
          {/* Página de inicio de sesión (sin Header) */}
          <Route path="/" element={<Auth onLogin={handleLogin} />} />

          {/* Página de registro (sin Header) */}
          <Route path="/register" element={<Register />} />

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
            path="/contacto"
            element={
              <LayoutWithHeader>
                <Contacto />
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


          {/* Ruta por defecto */}
          <Route path="*" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;