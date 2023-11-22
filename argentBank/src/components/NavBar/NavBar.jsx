import { Outlet } from "react-router";
import logo from "../../assets/img/argentBankLogo.png";

export function NavBar() {
  // Ici si l'utilisateur est connecté remplacer sign in par sign out

  return (
    <>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="/signIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
