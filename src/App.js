import logo from "./logo.svg";
//import './App.css';
import React, { useState } from 'react';
import Login from './Login';
import Inventario from './Inventario';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {!isAuthenticated ? (
        <Login onLogin={setIsAuthenticated} />
      ) : (
        <Inventario />
      )}
    </div>
  );
}

export default App;
