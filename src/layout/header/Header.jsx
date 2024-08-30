import { NavLink } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="nav-item">
          <NavLink className="nav-link" to='/'>Principal</NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to='/contact'>Contacto</NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to='/login'>Login</NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to='/admin-product'>Admin Product</NavLink>
        </div>
      </nav>
        
    </header>
  )
}
