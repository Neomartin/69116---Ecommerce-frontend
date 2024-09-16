import { NavLink } from "react-router-dom";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import userImg from '../../assets/images/default-user.png';
import { useOrder } from "../../context/OrderContext";

export default function Header() {
  // Importamos desde nuestro context la función para modificar el estado toggleModal
  const { setToggleModal, count } = useOrder()


  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="nav-item">
          <NavLink className="nav-link" to='/'>Home</NavLink>
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

      <div className="user">
        {/* Icono del carrito de compras */}
        <div className="order">
          
          <div className="order-count">{count}</div>


          <FontAwesomeIcon  icon={faCartShopping}
                            onClick={() => setToggleModal(estado => !estado) } />
        </div>
        <div className="avatar">
          <img src={userImg} alt="" />
        </div>
      </div>
        
    </header>
  )
}
