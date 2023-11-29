import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/img/argentBankLogo.png";
import { logout } from "store/actions/authActions";

export function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuthenticated ? (
            <a className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-user-circle"></i>Logout
            </a>
          ) : (
            <Link className="main-nav-item" to="/signIn">
              <i className="fa fa-user-circle"></i>Sign In
            </Link>
          )}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
