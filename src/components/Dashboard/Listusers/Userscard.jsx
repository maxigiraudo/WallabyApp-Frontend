import React from "react";
import styles from "./Usercard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateAdminToUser, usersDashboard, updateUserToAdmin} from "../../../redux/actions/index.js";
import { BiTargetLock } from "react-icons/bi";


//const [ usersDashboard, setusersDashboard] = useState([])
//const [ userDashboard, setuserDashboard] = useState()
//{email: "ikp123456722890@gmail.com", password: "Ivann@n"}

export default function Usercard({ name, email }) {
  const users = useSelector((state) => state.usersDashboard);
  const user = useSelector((state) => state.userDashboard);

  const dispatch = useDispatch();

  // useEffect(() => {
  //     dispatch(usersDashboard());
  //     // return() => {
  //     //     usersDashboard()
  //     // }
  //   });

  function HandleUserValueChange(e) {
    e.preventDefault();
    if (e.target.value === "default") {
      console.log("HAAHAHA!");
    }
    if (e.target.value === "Admin") {
      dispatch(
        updateUserToAdmin({
          userEmail: email,
          email: "miaumiau@gmail.com",
          password: "Miau1234",
        })
      );
    }
    if (e.target.value === "User") {
        dispatch(
            updateAdminToUser({
              userEmail: email,
              email: "miaumiau@gmail.com",
              password: "Miau1234",
            })
          );
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
          <option defaultValue="Status" value="default" hidden>
            Status
          </option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
    </div>
  );
}
