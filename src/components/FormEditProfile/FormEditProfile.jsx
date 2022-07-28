import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatedProfileById } from "../../redux/actions";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./FormEditProfile.module.css";
import { Link } from "react-router-dom";
//import logG from "../Login/imgLogin.png";

export default function FormEditProfile() {
  const [profile, setProfile] = useState({
    name: "",
    lastname: "",
    username: "",
    //image:"",
    aboutyou: "",
  });
  const [error, setError] = useState({
    error: "You must select a name",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { name, lastname, username, aboutyou } = profile;

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(updatedProfileById({ name, lastname, username, aboutyou }));
    navigate("/profile");
  };

  const onChange = (e) => {
    e.preventDefault();
    setProfile({
      ...profile,

      [e.target.name]: e.target.value,
    });
    setError(
      validationForm({
        ...profile,

        [e.target.name]: e.target.value,
      })
    );
  };

  function validationForm(value) {
    let errors = {};
    if (!value.name) errors.name = "You must select a name";
    else if (value.name.length < 3) {
      errors.name = "It must contain at least 3 characters";
    }

    if (!value.lastname) errors.lastname = "You must enter a lastname";
    else if (value.lastname.length < 3) {
      errors.lastname = "It must contain at least 3 characters";
    }

    if (!value.username) errors.username = "You must enter a username";
    else if (value.username.length < 3) {
      errors.username = "It must contain at least 3 characters";
    }

    if (!value.aboutyou)
      errors.aboutyou = "You must enter a little description about you";
    else if (value.aboutyou.length < 150) {
      errors.lastname = "It must contain at least 150 characters";
    }

    return errors;
  }

  return (
    <div className={styles.containerPadre}>
      <Navbar />
      <Link to="/profile">
        <button className={styles.botonR}>Go Back</button>
      </Link>
      <div className={styles.padre}>
        <div className={styles.container}>
          <h1 className={styles.colorh1}>EDIT YOUR DATA.</h1>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className={styles.two}>
              <div className={styles.nameEnviar}>
                <p htmlFor="name"> </p>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className={styles.input}
                  placeholder="Write your name... "
                  value={profile.name}
                  onChange={(e) => onChange(e)}
                />
                {error.name ? (
                  <p style={{ color: "red" }}> {error.name} </p>
                ) : null}
                <br />

                <p htmlFor="lastname"> </p>
                <input
                  name="lastname"
                  id="lastname"
                  type="text"
                  className={styles.input}
                  placeholder="Write your lastname... "
                  value={profile.lastname}
                  onChange={(e) => onChange(e)}
                />
                {error.lastname ? (
                  <p style={{ color: "red" }}> {error.lastname} </p>
                ) : null}
                <br />

                <p htmlFor="username"> </p>
                <input
                  name="username"
                  id="username"
                  type="text"
                  className={styles.input}
                  placeholder="Write your username... "
                  value={profile.username}
                  onChange={(e) => onChange(e)}
                />
                {error.username ? (
                  <p style={{ color: "red" }}> {error.username} </p>
                ) : null}
                <br />

                <p htmlFor="aboutyou"> </p>
                <input
                  name="aboutyou"
                  id="aboutyou"
                  type="textarea"
                  className={styles.input}
                  placeholder="Write your a little description about you... "
                  value={profile.aboutyou}
                  onChange={(e) => onChange(e)}
                />
                {error.aboutyou ? (
                  <p style={{ color: "red" }}> {error.aboutyou} </p>
                ) : null}

                <br />

                <input
                  disabled={Object.keys(error).length === 0 ? false : true}
                  value="EDIT YOUR DATA"
                  type="submit"
                  className={styles.inputEnviar}
                />

                {Object.keys(error).length === 0 ? null : (
                  <p style={{ color: "red", textAlign: "center" }}>
                    To edit your data you must fill in all the fields without
                    errors.
                  </p>
                )}
                <br />
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
