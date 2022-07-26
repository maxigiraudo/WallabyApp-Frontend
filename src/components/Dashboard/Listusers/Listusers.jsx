import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { usersDashboard } from "../../../redux/actions/index";
import { Link } from "react-router-dom";

import Usercard from "../Userscard.jsx";
import NavBar from "../../Navbar/Navbar.jsx";
import Footer from "../../Footer/Footer.jsx";
import styles from "../Listusers/Listusers.module.css";
import Swal from "sweetalert2";

//const [ usersDashboard, setusersDashboard] = useState([])
//const [ userDashboard, setuserDashboard] = useState()
//{email: "ikp123456722890@gmail.com", password: "Ivann@n"}

export default function Listusers() {
  const users = useSelector((state) => state.usersDashboard);
  const user = useSelector((state) => state.userDashboard);
  const userrr = JSON.parse(localStorage.getItem("profiles"));
  const newUser = JSON.parse(userrr);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      usersDashboard({
        email: newUser.email,
        password: newUser.password,
      })
    );
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Link to="/Dashboard" className={styles.Li}>
        <button className={styles.botonR}>Go Back</button>
      </Link>

      <div className={styles.list}>
        <h1> Users List </h1>
      </div>

      <div className={styles.container}>
        {users.map((e, index) => (
          <Usercard name={e.nombre} email={e.email} key={index} />
        ))}
      </div>

      {/* <div>
          <h3 className={styles.miau}>CARLOSSSSSSSSSSSSSSSSS</h3>
          <img
            src="https://i.guim.co.uk/img/media/ae4637c5bdca3e3c7f0f86a741f43ecbe897852e/0_132_3545_2127/master/3545.jpg?width=620&quality=85&fit=max&s=c64340edf54167fa5806cbf1157f6c3c"
            alt="akofsaejkbn"
          />
        </div> */}

      <Footer />
    </div>
  );
}
