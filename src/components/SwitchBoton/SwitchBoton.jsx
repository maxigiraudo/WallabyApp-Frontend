import React, { useState } from "react";

import { botonMaximiliano } from "../../redux/actions";
import styles from "./SwitchBoton.module.css";
import Swal from "sweetalert2";

export default function SwitchBoton({ chainChain }) {
  // const [value, setValue] = useState(false);


  const valueE = localStorage.getItem("botonMaxi");

  console.log("BELEN LAIR MI AMOR ", localStorage.getItem("botonMaxi"));



  function handleClickM() {
    chainChain("mumbai");
    Swal.fire("Connected with Mumbai", "", "success");
  }

  function handleClickR() {
    chainChain("rinkeby");
    Swal.fire("Connected with Rinkeby", "", "success");
  }



  console.log("BELEN LAIR MI AMOR ", localStorage.getItem("botonMaxi"));


  function handleClickM() {
    chainChain("mumbai");
    Swal.fire("Connected with Mumbai", "", "success");
  }

  function handleClickR() {
    chainChain("rinkeby");
    Swal.fire("Connected with Rinkeby", "", "success");
  }

  return (
    <div className={styles.container}>
      <div className={styles.padre}>
        <div>
          <h3 className={styles.texto}>Select the blockchain network.</h3>
        </div>
        <div>
          <h3 className={styles.texto}>
            Rinkeby and Mumbai are test networks, with both you will be able to
            create nfts but only with Mumbai you will have the option to list
            them for sale.
          </h3>
        </div>
        <div className={styles.switchbutton}>
          <button
            className={styles.botonLanding}
            onClick={() => handleClickM()}
          >
            MUMBAI
          </button>
          <button
            className={styles.botonLanding}
            onClick={() => handleClickR()}
          >
            RIKEBY
          </button>
        </div>
      </div>
    </div>
  );
}
