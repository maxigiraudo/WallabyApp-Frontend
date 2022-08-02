import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "../Login/Login.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validateForm from "../Login/validation.js";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import imgLogin from "./imgLogin.png";
import {
  cambioPassword,
  estaPorCambiarContraseña,
  postLogin,
} from "../../redux/actions/index.js";

// import { useEffect } from "react";
// import GoogleLogin from 'react-google-login';
// import {gapi} from 'gapi-script';
import GoogleBtn from "../Google";

export default function Login() {
  const dispatch = useDispatch();
  const [shown, setShown] = React.useState(false);
  const navigate = useNavigate();
  const switchShown = () => setShown(!shown);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = useState("");

  const logginAut = useSelector((state) => state.userIsAuthenticated);

  const olvideContraseña = useSelector((state) => state.olvidoContraseña);
  const [errorContra, setErrorContra] = useState({
    error: "You must enter an mail",
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    error: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setPassword(e.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputOnBlur = (e) => {
    setFormErrors({
      ...formErrors,
      [e.target.name]: validateForm(formData)[e.target.name],
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(postLogin(formData));

    setFormData({
      email: "",
      password: "",
    });
  };

  function alHome() {
    return navigate("/home");
  }

  function olvidoLaContraseña() {
    dispatch(cambioPassword(true));
  }

  function validationForm(value) {
    let errors = {};
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.olvideContraseña)) {
      errors.olvideContraseña = "*You must enter a correct email";
    }
    return errors;
  }
  function handleInput(e) {
    e.preventDefault();
    setEmail(e.target.value);
    setErrorContra(
      validationForm({
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleClick() {
    dispatch(estaPorCambiarContraseña(email));
    dispatch(cambioPassword(false));
    navigate("/home");
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Check your email box",
      text: "If you cant find the email, check the spam box.",
      showConfirmButton: true,
    });
  }
  // const responseGoogle = (response) => {
  //     dispatch(postLoginGoogle(response))
  //   }

  //   useEffect(()=> {
  //     function start() {
  //         gapi.client.init({
  //             clientId: clientId,
  //             scope: ""
  //         })
  //     }
  //     gapi.load('client:auth2', start);
  //   })

  const back = () => {
    window.history.back();
  };

  return (
    <div>
      {logginAut === true ? (
        alHome()
      ) : (
        <div>
          <Navbar />

          <button onClick={back} className={styles.botonR}>
            Go Back
          </button>

          <div className={styles.containerLogin}>
            <div className={styles.login}>
              <h1 className={styles.title}> WELCOME! </h1>
              <div className={styles.input} id="form">
                <input
                  className={styles.loginInput}
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleInputOnBlur}
                />
                {formErrors.email && (
                  <p className={styles.formErrors}>{formErrors.email}</p>
                )}
                <div>
                  <input
                    className={styles.loginInputt}
                    type={shown ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={handleInputOnBlur}
                  />
                  <button className={styles.myContainer} onClick={switchShown}>
                    {shown ? BsFillEyeFill() : BsFillEyeSlashFill()}
                  </button>
                </div>

                {formErrors.password && (
                  <p className={styles.formErrors}>{formErrors.password}</p>
                )}
                <button
                  className={styles.button}
                  onClick={(e) => handleLogin(e)}
                >
                  {" "}
                  LOGIN{" "}
                </button>
              </div>

              <div className={styles.register}>
                <p className={styles.loginText}>Not a member yet? {"  "}</p>
                <Link className="login-link" to="/formRegister">
                  <p className="login-text">{"  "} Register! </p>
                </Link>
              </div>
              <br />
              <div className={styles.section}>
                <h4> Or sign in with</h4>
                <br />
                <GoogleBtn />
              </div>

              <div className={styles.section}></div>
              <div className={styles.olvideContra}>
                <button
                  className={styles.botonForgot}
                  onClick={() => olvidoLaContraseña()}
                >
                  <a>I forgot my password</a>
                </button>
                {olvideContraseña === true ? (
                  <div>
                    <input
                      name="olvideContraseña"
                      value={email}
                      className={styles.loginInput}
                      placeholder="Enter your email"
                      type="text"
                      onChange={(e) => handleInput(e)}
                    />

                    <input
                      disabled={
                        Object.keys(errorContra).length === 0 ? false : true
                      }
                      className={styles.buttonContra}
                      value="Submit"
                      type="submit"
                      onClick={() => handleClick()}
                    />
                    {errorContra.olvideContraseña ? (
                      <p className={styles.pError}>
                        {" "}
                        {errorContra.olvideContraseña}{" "}
                      </p>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}
