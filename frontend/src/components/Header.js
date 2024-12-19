import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/login">Iniciar Sesión</Link></li>
        <li><Link to="/register">Registrarse</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
