import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  getProfileGoogle,
  newPassword,
  recoverPassword,
  updatePassword,
} from "../../redux/actions";
import { useEffect } from "react";
import styles from "./Profile.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { BsFillEyeFill, BsFillEyeSlashFill, BsNodePlusFill } from "react-icons/bs";
import Star from "../Star/Star";
import { NavLink } from "react-router-dom";

export default function Profile() {

  //console.log(props)
  const [shown, setShown] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const recover = useSelector((state) => state.recoverPassword);
  const [errorContra, setErrorContra] = useState({
    error: "You must enter a correct password",
  });
  const switchShown = (e) => {
    e.preventDefault();
    setShown(!shown);
  };
  const [passwordd, setPassword] = React.useState("");
  const userrr = JSON.parse(localStorage.getItem("profiles"));
  const userrrGoogle = JSON.parse(localStorage.getItem("profileGoogle"));
  console.log("ESTE ES EL USEE GOOGLE", userrrGoogle);
  const newUsuario = JSON.parse(userrr);
  console.log("ESTE ES EL USER COMUN", newUsuario);
  
  
  useEffect(() => {
    dispatch(getProfile(newUsuario));
  }, []);

  useEffect(() => {
    dispatch(getProfileGoogle(userrrGoogle));
  }, []);

  function validationForm(value) {
    let errors = {};
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
        value.password
      )
    ) {
      errors.password =
        "*It should have 8 characters, 1 capital letter, and a number";
    }
    return errors;
  }

  const profile = useSelector((state) => state.profile);
  const profileGoogle = useSelector((state) => state.profileGoogle);
  console.log(profile);
  console.log(profileGoogle);

  const [estaPorPuntuar, setEstaPorPuntuar] = useState(false);

  const reviewTrue = useSelector((state) => state.reviewComplete);

  const [newPass, setNewPass] = useState("");

  const esAdmin = useSelector((state)=> state.esAdministrador)

  

  

  // const profiles = useSelector((state) => state.profile);
  //console.log(profile)

  // console.log(profiles);
  const back = () => {
    window.history.back();
  };

  function cambioC() {
    dispatch(recoverPassword());
  }

  function porPuntuar() {
    setEstaPorPuntuar(true);
  }

  function handleInput(e) {
    e.preventDefault();
    setPassword(e.value);
    setNewPass(e.target.value);
    setErrorContra(
      validationForm({
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleClick() {
    dispatch(updatePassword({ password: newPass, email: userrr.email }));
    JSON.parse(localStorage.getItem("profiles"));
    localStorage.removeItem("profiles");
    window.location.href = "https://wallabyapp.vercel.app/home";
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Password Changed",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  console.log("ESTA POR PUNTUAR", estaPorPuntuar);

  console.log(newPass);

  console.log("ESTO HAY EN PROFILE", profileGoogle);

  return (
    <div className={styles.containerPadre}>
      <Navbar />

      <button onClick={back} className={styles.botonR}>
        Go Back
      </button>

      <div className={styles.padre}>
        <div className={styles.container}>
          <h1 className={styles.colorh1}>Hello!</h1>

          <div className={styles.two}>
            <div className={styles.nameEnviar}>
              {profile.length > 0 ? (
                <div>
                  <h1 className={styles.name}>
                    {" "}
                    User name: {profile[0].nombre}{" "}
                  </h1>
                  <br />
                  <h1 className={styles.name}> Email: {profile[0].email}</h1>
                  <br />
                </div>
              ) : (
                <div>
                  <h1 className={styles.name}> User from Google </h1>
                  <br />
                  <h1 className={styles.name}> Email: {profileGoogle.email}</h1>
                  <br />
                </div>
              )}
              <button
                className={styles.changePassword}
                onClick={() => cambioC()}
              >
                <a>Change your password.</a>
              </button>
              {recover === true && (
                <div>
                  <div>
                    <input
                      className={styles.loginInputt}
                      // value={newPass}
                      name="password"
                      type={shown ? "text" : "password"}
                      onChange={(e) => handleInput(e)}
                    />
                    <button
                      className={styles.myContainer}
                      onClick={switchShown}
                    >
                      {shown ? BsFillEyeFill() : BsFillEyeSlashFill()}
                    </button>
                    <input
                      disabled={
                        Object.keys(errorContra).length === 0 ? false : true
                      }
                      className={styles.inputEnviarr}
                      value="Change"
                      type="submit"
                      onClick={() => handleClick()}
                    />
                  </div>

                  {errorContra.password ? (
                    <p className={styles.pError}> {errorContra.password} </p>
                  ) : null}
                </div>
              )}
              <Link to="/favorite">
                <button className={styles.inputEnviar}>
                  Go to my favorite NFTs!
                </button>
              </Link>

              <Link to="/cart">
                <button className={styles.inputEnviar}>Go to my cart!</button>
              </Link>
              <Link to="/mycollections">
                <button className={styles.inputEnviar}>
                  Go to my collection!
                </button>
              </Link>
              <button
                className={styles.changePassword}
                onClick={() => porPuntuar()}
              >
                <a>Rate your experience in Wallaby.</a>
              </button>
              {estaPorPuntuar === true &&
              reviewTrue === false &&
              profile[0].reviews.length === 0 ? (
                <Star />
              ) : estaPorPuntuar === true &&
                (reviewTrue === true || profile[0].reviews.length > 0) ? (
                <p className={styles.hizoReview}>
                  You already rated the app, thank you!
                </p>
              ) : null}
              {esAdmin === true?
              (
                <NavLink to="/Dashboard">
                    <li>Admin</li>
                  </NavLink>
              ):
              null
              }
                 
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
