import React, { useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { botonMaximiliano } from "../../redux/actions";
import styles from "./SwitchBoton.module.css";

export default function SwitchBoton({ chainChain }) {
  // const [value, setValue] = useState(false);
  const dispatch= useDispatch()
  const value= useSelector((state)=> state.botonMaxi)

  const valueE = localStorage.getItem("botonMaxi")

  console.log("BELEN LAIR MI AMOR ",localStorage.getItem("botonMaxi"))

  console.log("ESTO ES VALUE EN UN 1ER MOMENTO",value)
  
 function handleClickM(){
  chainChain("mumbai")
 }

 function handleClickR(){
  chainChain("rinkeby")
 }

  console.log("ESTO ES VALUE EN 2DO MOMENTO", value)
  return (
    <div className={styles.container}>
      <div className={styles.switchbutton}>
        <button                 
          onClick={()=>handleClickM()}
        >MUMBAI</button>
        <button         
          onClick={()=>handleClickR()}
        >RIKEBY</button>      
      </div>
    </div>
  );
}
