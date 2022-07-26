import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./MyOrders.module.css";

export default function MyOrders() {
  const back = () => {
    window.history.back();
  };
  return (
    <div>
      <Navbar />
      <button className={styles.botonR} onClick={back}>
        Go Back
      </button>
      <div className={styles.tt}>My Orders!</div>;
      <Footer />
    </div>
  );
}
