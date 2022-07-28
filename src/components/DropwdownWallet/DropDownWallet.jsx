import React from "react";
import styles from "../DropwdownWallet/DropDownWallet.module.css";
import { Link } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { useDispatch } from "react-redux";
import { singoutOk } from "../../redux/actions";
import Swal from "sweetalert2";
import { BiWalletAlt } from "react-icons/bi";

export default function DropdownWallet({setWalletAddress, setChain}) {
  const dispatch = useDispatch();
  const {
    authenticate,
    isAuthenticated, 
    logout,
  } = useMoralis();

  const loginWallet = async () => {
    if (!isAuthenticated) {
      const connectorId = "injected";
      try {
        await authenticate({ provider: connectorId })
        .then(function (user) {
          setWalletAddress(user.get('ethAddress'))
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Connected Wallet",
            showConfirmButton: false,
            timer: 1500,
          });
          
        })
        window.localStorage.setItem("connectorId", connectorId);
        
      } catch (error) {
        console.log(error);
      }
    }
  };

  const logOut = async () => {
    await logout();
    window.localStorage.removeItem("connectorId");
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Disconected Wallet",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className={styles.dropdown}>
      <span>
        <BiWalletAlt className={styles.iconProfile} />
      </span>
      <div className={styles.dropdownContent}>
        <p className={styles.dropdownItem}>
          {" "}
          <Link to="/payment">Charge Wallet</Link>
        </p>
        <p className={styles.dropdownItem}>
          {!isAuthenticated ? (
            <button
              onClick={() => loginWallet()}
              className={styles.botonSingOut}
            >
              Connect Wallet{" "}
            </button>
          ) : (
            <button onClick={() => logOut()} className={styles.botonSingOut}>
              Disconnect Wallet
            </button>
          )}
        </p>
      </div>
    </div>
  );
}
