import React from "react";
import styles from "./Star.module.css";
import {useDispatch, useSelector} from 'react-redux'
import { review } from "../../redux/actions";


export default function Star() {

  const dispatch = useDispatch()
  const email = useSelector((state)=> state.profile[0].email)

  const nombre= useSelector((state)=> state.profile[0].nombre)

  console.log(nombre)

  console.log(email)

  function handleClick(e){
    dispatch(review(e))
  }

  return (
    <div className={styles.container}>
      <form className={styles.from}>
        <p className={styles.clasificacion}>
          <input id="radio1" type="radio" name="estrellas" value="5" onClick={()=> handleClick({email:email, rating:5,username:nombre})}/>
          <label className={styles.label} for="radio1">
            ★
          </label>
          <input id="radio2" type="radio" name="estrellas" value="4" />
          <label className={styles.label} for="radio2">
            ★
          </label>
          <input id="radio3" type="radio" name="estrellas" value="3" />
          <label className={styles.label} for="radio3">
            ★
          </label>
          <input id="radio4" type="radio" name="estrellas" value="2" />
          <label className={styles.label} for="radio4">
            ★
          </label>
          <input id="radio5" type="radio" name="estrellas" value="1" />
          <label className={styles.label} for="radio5">
            ★
          </label>
        </p>
      </form>
    </div>
  );
}
