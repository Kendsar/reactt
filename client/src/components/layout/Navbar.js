import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code">
          </i> House Me Now
          </Link>
      </h1>
      <ul>
        <li>
          <Link to="/register">Register</Link></li>
        <li>
          <Link to="/login">Login</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;