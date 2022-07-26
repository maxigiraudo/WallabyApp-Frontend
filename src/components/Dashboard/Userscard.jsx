import React from "react";
import styles from "../Dashboard/Dashboard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  suspendAccount,
  updateAdminToUser,
  usersDashboard,
} from "../../redux/actions";
import { BiTargetLock } from "react-icons/bi";
import { updateUserToAdmin } from "../../redux/actions";

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
    if (e.target.value === "Suspend" || e.target.value === "Unsuspend") {
      dispatch(
        suspendAccount({
          userEmail: email,
          email: newUser.email,
          password: newUser.password,
        })
      );
    }
    if (e.target.value === "Admin") {
      dispatch(
        updateUserToAdmin({
          userEmail: email,
          email: newUser.email,
          password: newUser.password,
        })
      );
    }
    if (e.target.value === "User") {
      dispatch(
        updateAdminToUser({
          userEmail: email,
          email: newUser.email,
          password: newUser.password,
        })
      );
    }
  }

  return (
    <div>
      <h1 className={styles.container}> Name: {name} </h1>
      <h1 className={styles.container}> Email: {email} </h1>
      <div>
        <select onChange={(e) => HandleUserValueChange(e)}>
          <option defaultValue="miau?" value="default" hidden>
            miau?
          </option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Suspend">Suspend</option>
          <option value="Unsuspend">Unsuspend</option>
        </select>
      </div>
      <br></br>
    </div>
  );
}
