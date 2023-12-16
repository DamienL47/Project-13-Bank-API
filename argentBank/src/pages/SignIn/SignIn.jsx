import "../../global.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Footer } from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/actions/authActions";
import { NavBar } from "components/NavBar/NavBar";
import { postProfile } from "store/actions/profileActions";

export function SignIn() {
  // Utilisation du hook useDispatch pour accéder à la fonction dispatch de Redux
  const dispatch = useDispatch();
  // Utilisation du hook useNavigate pour la navigation programmative
  const navigate = useNavigate();

  // Utilisation du hook useSelector pour extraire des données du store Redux
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);

  // Utilisation du hook useState pour gérer l'état local du formulaire
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Fonction appelée lors de la soumission du formulaire
  const submit = (e) => {
    e.preventDefault();
    // Appel de l'action login avec les données du formulaire
    dispatch(login(formData));
  };

  // Fonction appelée lorsqu'une valeur du formulaire change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Effet secondaire déclenché lorsque le composant monte ou que isAuthenticated change
  useEffect(() => {
    const fetchData = async () => {
      // Vérification si l'utilisateur est authentifié
      if (isAuthenticated) {
        // Appel de l'action postProfile pour récupérer les données du profil
        dispatch(postProfile(isAuthenticated));
        // Redirection vers la page de profil
        navigate("/profile");
        // Stockage du jeton d'authentification dans le localStorage
        localStorage.setItem("token", token);
      }
    };

    // Appel de la fonction fetchData
    fetchData();
  }, [isAuthenticated, navigate, dispatch]);

  // Rendu du composant
  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={submit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
          </form>
          {error && <div className="error-message">{error}</div>}
        </section>
      </main>
      <Footer />
    </>
  );
}
