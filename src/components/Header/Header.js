import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Icono de búsqueda
import './Header.css';

function Header() {
  const [isInputActive, setInputActive] = useState(false);

  const handleInputChange = (event) => {
    setInputActive(event.target.value.trim() !== "");
  };

  return (
    <header className="header">
      {/* Sección del logo */}
      <div className="logo">
        <img src="/Logo.png" alt="PetShop Logo" />
      </div>

      {/* Campo de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar productos..."
          onChange={handleInputChange}
        />
        <FaSearch className={isInputActive ? "search-icon active" : "search-icon"} />
      </div>

      {/* Sección de iniciar sesión y carrito */}
      <div className="actions">
        <div className="login">
          <img src="/user-icon.png" alt="Iniciar Sesión" />
          <span>Iniciar sesión</span>
        </div>
        <div className="cart">
          <img src="/cart-icon.png" alt="Carrito" />
        </div>
      </div>
    </header>
  );
}

export default Header;
