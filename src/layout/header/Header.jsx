import { NavLink } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import userImg from "../../assets/images/default-user.png";
import { useOrder } from "../../context/OrderContext";
import { useUser } from "../../context/UserContext";

export default function Header() {
  // Importamos desde nuestro context la función para modificar el estado toggleModal
  const { setToggleModal, count } = useOrder();

  const { user, logout } = useUser();

  return (
    <header className="main-header">
      <nav className="main-nav">
        <div className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contacto
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink className="nav-link" to="/register">
            Registro
          </NavLink>
        </div>

        {user?.role === "admin" && (
          <div className="nav-item">
            <NavLink className="nav-link" to="/admin-product">
              Admin Product
            </NavLink>
          </div>
        )}
        {user?.role === "admin" && (
          <div className="nav-item">
            <NavLink className="nav-link" to="/admin-user">
              Admin User
            </NavLink>
          </div>
        )}



        {user ? (
          <div className="nav-item">
            <NavLink className="nav-link" onClick={logout}>
              Logout
            </NavLink>
          </div>
        ) : (
          <div className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </div>
        )}





      </nav>

      <div className="user">
        {user?.name || "NO USER"}

        {/* Icono del carrito de compras */}
        <div className="order">
          <div className="order-count">{count}</div>

          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() => setToggleModal((estado) => !estado)}
          />
        </div>
        <div className="avatar">
          <img src={userImg} alt="" />
        </div>
      </div>
    </header>
  );
}
