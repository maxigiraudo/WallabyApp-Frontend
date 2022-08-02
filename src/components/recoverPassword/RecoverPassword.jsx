import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { estaSeraLaContraseña } from "../../redux/actions";
import styles from "./RecoverPassword.module.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

export default function RecoverPassword() {
  const [shown, setShown] = React.useState(false);
  const [shownn, setShownn] = React.useState(false);

  const switchShown = (e) => {
    e.preventDefault();
    setShown(!shown);
  };

  const switchShownn = (e) => {
    e.preventDefault();
    setShownn(!shownn);
  };
  const [passwordd, setPassword] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    passwordConfir: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState({
    error: "You must enter an mail",
  });

  const { passwordConfir, email, password } = user;

  function validationForm(value) {
    let errors = {};
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.email)) {
      errors.email = "*You must enter an email";
    }
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        value.password
      )
    ) {
      errors.password =
        "*It should have 8 characters, 1 capital letter, and a number";
    }
    if (value.passwordConfir !== value.password) {
      errors.passwordConfir = "*The passwords do not match";
    }
    return errors;
  }

  const onChange = (e) => {
    e.preventDefault();
    setPassword(e.value);

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError(
      validationForm({
        ...user,
        [e.target.name]: e.target.value,
      })
    );
  };

  function handleClick() {
    dispatch(
      estaSeraLaContraseña({
        email: email,
        password: password,
        passwordConfir: passwordConfir,
      })
    );
    navigate("/home");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Password changed",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div>
      <Navbar />
      <Link to="/home">
        <button className={styles.botonR}>Go Home</button>
      </Link>
      <div className={styles.padre}>
        <div className={styles.container}>
          <h1 className={styles.title}>CHANGE YOUR PASSWORD.</h1>
          <input
            className={styles.input}
            name="email"
            value={email}
            placeholder="Enter your email"
            type="text"
            onChange={(e) => onChange(e)}
          />
          {error.email ? <p style={{ color: "red" }}> {error.email} </p> : null}
          <div>
            <input
              className={styles.loginInputt}
              name="password"
              value={password}
              placeholder="Enter your new password"
              type={shown ? "text" : "password"}
              onChange={(e) => onChange(e)}
            />
            <button className={styles.myContainer} onClick={switchShown}>
              {shown ? BsFillEyeFill() : BsFillEyeSlashFill()}
            </button>
          </div>
          {error.password ? (
            <p style={{ color: "red" }}> {error.password} </p>
          ) : null}
          <div>
            <input
              className={styles.loginInputt}
              name="passwordConfir"
              value={passwordConfir}
              placeholder="Confirm your password"
              type={shownn ? "text" : "password"}
              onChange={(e) => onChange(e)}
            />
            <button className={styles.myContainer} onClick={switchShownn}>
              {shownn ? BsFillEyeSlashFill() : BsFillEyeFill()}
            </button>
          </div>
          {error.passwordConfir ? (
            <p style={{ color: "red" }}> {error.passwordConfir} </p>
          ) : null}
          <input
            disabled={Object.keys(error).length === 0 ? false : true}
            className={styles.button}
            value="Change"
            type="submit"
            onClick={() => handleClick()}
          />
          {Object.keys(error).length === 0 ? null : (
            <p style={{ color: "red", textAlign: "center" }}>
              To change the password you must not have errors.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
