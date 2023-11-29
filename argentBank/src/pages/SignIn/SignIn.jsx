import "../../global.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Footer } from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "store/actions/authActions";
import { NavBar } from "components/NavBar/NavBar";
import { postProfile } from "store/actions/profileActions";

export function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated) {
        dispatch(postProfile(isAuthenticated));
        navigate("/profile");
        localStorage.setItem("token", token);
      }
    };

    fetchData();
  }, [isAuthenticated, navigate, dispatch]);

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
