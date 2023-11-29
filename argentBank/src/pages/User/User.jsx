import s from "./style.module.css";
import { useSelector, useDispatch } from "react-redux";
import { NavBar } from "components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { postProfile } from "store/actions/profileActions";
import { useNavigate } from "react-router";
import { updateProfile } from "store/actions/editProfileActions";
import { set } from "mongoose";

function User() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
  });

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const userProfile = useSelector((state) => state.profile);

  const handleEditName = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ token, formData }));
    dispatch(postProfile({ token, isAuthenticated }));

    setFormData({
      firstname: "",
      lastname: "",
    });

    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      firstname: "",
      lastname: "",
    });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/signIn");
    } else {
      dispatch(postProfile({ token, isAuthenticated }));
    }
  }, [dispatch, isAuthenticated, navigate, token]);

  return (
    <>
      <NavBar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back{" "}
            {isEditing ? null : (
              <>
                <br />
                {`${userProfile.body.firstName} ${userProfile.body.lastName}!`}
              </>
            )}
          </h1>
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className={s.containerForm}>
                <div className={s.containerInput}>
                  <div className={s.inputWrapper}>
                    <label htmlFor="newFirstName"></label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      placeholder={userProfile.body.firstName}
                      value={formData.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={s.inputWrapper}>
                    <label htmlFor="newLastName"></label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder={userProfile.body.lastName}
                      value={formData.lastname}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={s.containerButton}>
                  <button
                    className="edit-button"
                    className={s.styleBtn}
                    type="submit"
                  >
                    Save
                  </button>
                  <button
                    className="edit-button"
                    className={s.styleBtnCancel}
                    type="button"
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <button className="edit-button" onClick={handleEditName}>
              Edit Name
            </button>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default User;
