import React from "react";

import styles from "./Usercard.module.css";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  suspendAccount,
  updateAdminToUser,
  usersDashboard,
  updateUserToAdmin
} from "../../redux/actions";
import { BiTargetLock } from "react-icons/bi";

//const [ usersDashboard, setusersDashboard] = useState([])
//const [ userDashboard, setuserDashboard] = useState()
//{email: "ikp123456722890@gmail.com", password: "Ivann@n"}

export default function Usercard({ name, email }) {
  //localstoragegetitem="profile" para chupar la data del usuario
  const userrr = JSON.parse(localStorage.getItem("profiles"));
  const newUser = JSON.parse(userrr);
  console.log("DATA A ROBARRR", userrr);
  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(usersDashboard());
  //     // return() => {
  //     //     usersDashboard()
  //     // }
  //   });

  function HandleUserValueChange(e) {
    e.preventDefault();
    if (e.target.value === "Suspend") {
      dispatch(
        suspendAccount({
          userEmail: email,
          email: newUser.email,
          password: newUser.password,
        })
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "The user status has been changed to suspended",
        showConfirmButton: true,
      });
    }
    if (e.target.value === "Unsuspend") {
      dispatch(
        suspendAccount({
          userEmail: email,
          email: newUser.email,
          password: newUser.password,
        })
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "The user status has been changed to Unsuspended",
        showConfirmButton: true,
      });
    }
    if (e.target.value === "Admin") {
      dispatch(
        updateUserToAdmin({
          userEmail: email,
          email: newUser.email,
          password: newUser.password,
        })
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "The user status has been changed to Admin",
        showConfirmButton: true,
      });
    }
    if (e.target.value === "User") {
      dispatch(
        updateAdminToUser({
          userEmail: email,
          email: newUser.email,
          password: newUser.password,
        })
      );
      Swal.fire({
        position: "center",
        icon: "success",
        title: "The user status has been changed to User",
        showConfirmButton: true,
        
      });
    }
  }

  return (
    <div className={styles.general}>
      <div className={styles.hijo}>
        <p className={styles.container}> Name: {name} </p>
        <p className={styles.container}> Email: {email} </p>
      </div>
      <div>
      <select className={styles.user} onChange={(e) => HandleUserValueChange(e)}>
          <option className={styles.opcion} defaultValue="User" value="default" hidden>
            User
          </option>
          <option className={styles.opcion} value="User">User</option>
          <option className={styles.opcion} value="Admin">Admin</option>
          <option className={styles.opcion} value="Suspend">Suspend</option>
          <option className={styles.opcion} value="Unsuspend">Unsuspend</option>
        </select>
      </div>
    </div>
  );
}
