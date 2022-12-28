import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">JG SHOP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to= "/" >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/productos"><CartWidget /></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Contacto
          </a>
          <ul class="dropdown-menu">
            <li><Link className="dropdown-item" to="/contactanos">Contactanos</Link></li>
            <li><Link className="dropdown-item" to="/informacion">Informacion</Link></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
