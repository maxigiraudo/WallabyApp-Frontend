import React from "react";
import styles from "./DropdownNft.module.css";
import { Link } from "react-router-dom";
import { TbCardboards } from "react-icons/tb";

export default function DropdownNft() {
  return (
    <div className={styles.dropdown}>
      <span>
        <TbCardboards className={styles.iconProfile} />
      </span>
      <div className={styles.dropdownContent}>
        <p className={styles.dropdownItem}>
          {" "}
          <Link to="/form">Create NFT</Link>
        </p>
        <p className={styles.dropdownItem}>
          <Link to="/mycollections">My Collection</Link>
        </p>
      </div>
    </div>
  );
}
