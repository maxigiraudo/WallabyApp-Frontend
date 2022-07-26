import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./MyCollections.module.css";
import { useNFTBalance } from "../../hooks/useNFTBalance";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";
import { publishMarket } from "../../redux/actions";

export default function MyCollections() {
  const back = () => {
    window.history.back();
  };
  const dispatch = useDispatch();
  const { NFTBalance, fetchSuccess } = useNFTBalance();

  console.log(NFTBalance);

  const pushMarket = (e) => {
    dispatch(publishMarket(e));
    console.log("boton tocado");
  };
  return (
    <div>
      <Navbar />
      <button className={styles.botonR} onClick={back}>
        Go Back
      </button>
      <div className={styles.allInclusive}>
        <div className={styles.tt}>My Collections!</div>
        <div className={styles.gallery}>
          {NFTBalance.results?.map((e) => (
            //   <Card key={e._id} name={e.name} image={e.image} />
            <div className={styles.card} key={e.id}>
              <h3 className={styles.name}>{e.name}</h3>
              <button
                onClick={() =>
                  pushMarket({
                    id: e.id,
                    name: e.name,
                    img: e.image,
                    collection: e.collection,
                    description: e.description,
                  })
                }
                className={styles.botoncito}
              >
                Publish on the market
              </button>
              <img className={styles.img} src={e.image} alt="img" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
