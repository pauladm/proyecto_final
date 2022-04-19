import { Outlet, NavLink } from "react-router-dom";
import { useAuthContext } from "../Context/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Footer from "./Footer/Footer";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
export default function Layaout() {
  const { auth } = useAuthContext();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="home">
            Inicio
          </NavLink>
          {!auth && (
            <>
              <div
                className="collapse navbar-collapse"
                id="navbarNavDarkDropdown"
              >
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDarkDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <NoAccountsIcon />
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-dark"
                      aria-labelledby="navbarDarkDropdownMenuLink"
                    >
                      <li>
                        <NavLink to="/registro" className="dropdown-item">
                          Registro
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/login2" className="dropdown-item">
                          Iniciar sesion
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </>
          )}

          {auth && (
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDarkDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AccountCircleIcon />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-dark"
                    aria-labelledby="navbarDarkDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
      <main className="App">
        <Outlet />
        <Footer />
      </main>
    </>
  );
}
