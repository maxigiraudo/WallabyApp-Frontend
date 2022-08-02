import React from "react";
import styles from "./Order.module.css";
import { useDispatch } from "react-redux";
import { orderByPrice } from "../../redux/actions/index.js";

export default function Order() {
  const dispatch = useDispatch();

  function handleOrderByPrice(e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
  }

  return (
    <div className={styles.orderContenedor}>
      <div className={styles.orderBotones}>
        <select
          className={styles.orderBoton1}
          onChange={(e) => handleOrderByPrice(e)}
        >
          <option value="All">PRICE</option>
          <option value="high"> High price </option>
          <option value="low"> Low price </option>
        </select>
      </div>
    </div>
  );
}
