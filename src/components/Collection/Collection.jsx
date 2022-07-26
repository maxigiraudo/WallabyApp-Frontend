import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNFTTokenIds } from "../../hooks/useNFTTokenIds";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import styles from "./Collection.module.css";

export default function Collection() {
  const { address } = useParams();
  const { NFTTokenIds, fetchSuccess } = useNFTTokenIds(address);
  console.log("LO QUE TRAE EL HOOK", NFTTokenIds, fetchSuccess);

  const back = () => {
    window.history.back();
  };

  return (
    <div>
      <Navbar />
      <button onClick={back} className={styles.botonR}>
        Go Back
      </button>
      <div className={styles.containerPadre}>
        {NFTTokenIds.results?.map((e, index) => (
          <Card
            token_address={e.token_address}
            id={e._id}
            key={index}
            name={e.name}
            image={e.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
