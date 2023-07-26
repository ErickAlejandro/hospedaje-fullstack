// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul className='nav justify-content-end'>
        <li className='nav-item'>
          <Link className='nav-link' to="/DataTable">Historial de Registros</Link>
        </li>
        <li>
          <Link className='nav-link' to="/formRegister">Registro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
