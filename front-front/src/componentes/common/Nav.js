import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";
import { imgs } from "../../assets/imgs";

const Nav = () => {
  const { user, resetContext } = useContext(AppContext);
  const { push } = useHistory();

  const handleLogout = () => {
    logout();
    push("/login");
    resetContext();
  };

  return (
    <nav className="uk-navbar-container custom-nav" uk-navbar="true">
      <img src={imgs.logo} />
      {user._id ? (
        <div className="uk-navbar-center">
          <ul className="uk-navbar-nav">
            <li className="">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="">
              <NavLink exact to="/blog">
                Eroteca
              </NavLink>
            </li>

            <li className="">
              <NavLink exact to="/event">
                Eventos
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}

      <div className="uk-navbar-right">
        {user._id ? (
          <ul className="uk-navbar-nav">
            <li>
              <NavLink to="#">
                {user.username ? user.username : user.email}
              </NavLink>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li className="uk-active">
                    <NavLink to="/profile">Mi perfil</NavLink>
                  </li>
                  <li className="uk-active">
                    <NavLink to="/create">Mis eventos</NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="uk-active uk-flex uk-flex-center">
              <button
                className="uk-button uk-button-danger uk-button-small"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <ul className="uk-navbar-nav">
            <li className="">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="">
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
