import "../index.css"
import {Link, NavLink} from 'react-router-dom'
import card1 from '../static/LogoSinFondo.png'

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="row container-fluid">
        <div className="col-4 d-flex">
          <nav className="d-flex">
            <Link className="navbar-brand" to='/'>
              <img width="30" height="30" src={card1} alt="banner" className=""></img>
            </Link>
            <NavLink className="nav-link" to="/">Inicio</NavLink>
            <NavLink className="nav-link" to="/clients">Clientes</NavLink>
            <NavLink className="nav-link" to="/createInvoice">Crear factura</NavLink>
          </nav>
        </div>
        <div className="col-4 profile-item">
          <NavLink className="" to="/profile">
            <span class="material-symbols-outlined">person</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
