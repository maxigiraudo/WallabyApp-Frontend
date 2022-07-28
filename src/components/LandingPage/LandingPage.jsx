import React, { useEffect } from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import logo from "./Imagenes/logowallaby.png";
import cubos from "./Imagenes/cubos.png";
import {
  IoWalletOutline,
  IoImageOutline,
  IoPricetagsOutline,
} from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import Chatbot from "./ChatBot/ChatBot.js";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../../redux/actions";
import { AiTwotoneStar } from "react-icons/ai";
import SwitchBoton from "../SwitchBoton/SwitchBoton";

export default function LandingPage({chainChain}) {
  const [botState, setBotState] = useState(false);

  const red = useSelector((state)=> state.botonMaxi)

  localStorage.setItem("botonMaxi",toString(red))

  console.log("BELEN BEBOTA", localStorage.setItem("botonMaxi",red.toString()))

  const dispatch = useDispatch();

  const cambiarState = () => {
    if (botState === true) {
      setBotState(false);
    } else {
      setBotState(true);
    }
  };

  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);

  const allreview = useSelector((state) => state.allReviews);

  const newReview = allreview.slice(allreview.length - 5);

  return (
    <div className={styles.contenedorLanding}>
      <div className={styles.Landingtop}>
        <div className={styles.Landingcubo}>
          <img src={cubos} className={styles.cubo} alt="cubos" />
        </div>

        <div className={styles.LandingPage}>
          <img src={logo} className={styles.logoLanding} alt="logo" />
          <span className={styles.textLanding}>
            {" "}
            Welcome to Wallaby, a NFT platform!{" "}
          </span>
          <div className={styles.botonesLanding}>
            <Link to="/home">
              <button className={styles.botonLanding}>
                EXPLORE THE MARKETPLACE
              </button>
            </Link>
            <Link to="/login">
              <button className={styles.botonLanding}>LOGIN</button>
            </Link>
          </div>
        </div>

        <div className={styles.Landingcubo}>
          <img src={cubos} className={styles.cubo} alt="cubos" />
        </div>
      </div>
      <div className={styles.Landingbottom}>
        <h2 className={styles.Title}> What is WALLAby? </h2>
        <p className={styles.parrafoLanding}>
          {" "}
          Wallaby is a platform that will allow you to see real nfts in the
          market, you can also sell your own nfts with real contracts and select
          the ones you like the most.
        </p>
        <div className={styles.gruposLanding}>
          <div className={styles.columnaLanding}>
            <IoWalletOutline className={styles.iconoLanding} />
            <h3>Set up your wallet</h3>
            <p>
              You will have the possibility to load your metamask wallet with a
              credit card in the currency of your choice..
            </p>
          </div>
          <div className={styles.columnaLanding}>
            <IoImageOutline className={styles.iconoLanding} />
            <h3>Add your NFTs</h3>
            <p>
              You will be able to create your own NFT by selecting an image,
              description and then publish it on the marketplace..
            </p>
          </div>
          <div className={styles.columnaLanding}>
            <IoPricetagsOutline className={styles.iconoLanding} />
            <h3>List them for sale</h3>
            <p>
              You will chose how you want to sell your NFTs, and we help you
              sell them!
            </p>
          </div>
        </div>
        {botState ? (
          <div>
            <div
              className={styles.cajaActivada}
              onClick={(e) => cambiarState()}
            >
              {" "}
              CLOSE{" "}
            </div>
            <div className={styles.chatbotLanding}>
              <Chatbot />
            </div>
          </div>
        ) : (
          <div className={styles.cajaBoton} onClick={(e) => cambiarState()}>
            {" "}
            Need Help? <BsChatDots className={styles.icon} />{" "}
          </div>
        )}
      </div>
      <div className={styles.rates}>
        <h1 className={styles.our}>THE LAST FIVE SCORES OF OUR USERS:</h1>
        <div className={styles.conatinerReview}>
          {newReview.map((e) => (
            <div className={styles.review}>
              <li className={styles.userR}>{e.username}</li>
              <li className={styles.ratingR}>
                {e.rating} {AiTwotoneStar()}
              </li>
            </div>
          ))}
        </div>
        <div className={styles.switchboton}>
              <SwitchBoton chainChain={chainChain} />
            </div>
      </div>
    </div>
  );
}
