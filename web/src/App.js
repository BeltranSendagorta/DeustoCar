import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/auth/Auth';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [isAuthenticated, setIsAuthentificated] = useState(false);

  // Función para manejar la autenticación exitosa
  const handleLogin = () => {
    setIsAuthentificated(true);
   
    console.log("AUTHENTIFICATED:",isAuthenticated);
  };
  return (
    <Router>
      <div className="App">
        {/* Usar el componente Header */}
        {/*isAuthenticated && <Header />*/}

        {/* Usar el componente Routes */}
        <Routes>
          <Route path="/" element={<Auth onLogin={handleLogin} />} />
          <Route path="/register" element={<Register/>} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
