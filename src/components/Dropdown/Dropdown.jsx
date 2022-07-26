import React from "react";
import styles from "../Dropdown/Dropdown.module.css";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { singoutOk } from "../../redux/actions";
import Swal from "sweetalert2";

export default function Dropdown() {
  const dispatch = useDispatch();

  const singout = () => {
    Swal.fire({
      title: "Are you sure you want to log out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I'm sure",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sing Out", "You have logged out", "success");

        if (JSON.parse(localStorage.getItem("profiles"))) {
          localStorage.removeItem("profiles");
        } else if (JSON.parse(localStorage.getItem("profileGoogle"))) {
          localStorage.removeItem("profileGoogle");
        }

        dispatch(singoutOk());
        window.location.href = "https://wallaby-neon.vercel.app/home";
      }
    });
  };

  return (
    <div className={styles.dropdown}>
      <span>
        <BiUserCircle className={styles.iconProfile} />
      </span>
      <div className={styles.dropdownContent}>
        <p className={styles.dropdownItem}>
          {" "}
          <Link to="/profile">Profile</Link>
        </p>
        <p className={styles.dropdownItem}>
          <Link to="/favorite">Favorites</Link>
        </p>
        <p className={styles.dropdownItem}>
          <button className={styles.botonSingOut} onClick={singout}>
            Sing Out
          </button>
        </p>
      </div>
    </div>
  );
}
