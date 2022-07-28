import React, { useState } from "react";
import styles from "./SwitchBoton.module.css";

export default function SwitchBoton({ chainChain }) {
  const [value, setValue] = useState(false);

  const valueButton = () => {
    setValue(!value);
    console.log("ESTE ES EL VALOR", value);
    if (value === false) {
      chainChain("mumbai");
    } else {
      chainChain("rinkeby");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.switchbutton}>
        <input
          value={value}
          type="checkbox"
          name="switch-button"
          id="switch-label"
          className={styles.switchbuttoncheckbox}
          onChange={() => valueButton()}
        />

        <label for="switch-label" className={styles.switchbuttonlabel}></label>
      </div>
    </div>
  );
}
