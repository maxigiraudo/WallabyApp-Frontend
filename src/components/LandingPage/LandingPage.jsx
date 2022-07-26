import React from "react";
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import logo from "./Imagenes/logowallaby.png";
import cubos from "./Imagenes/cubos.png";
import { IoWalletOutline, IoImageOutline, IoPricetagsOutline} from "react-icons/io5";
import { BsChatDots } from "react-icons/bs"
import Chatbot from "./ChatBot/ChatBot.js";
import { useState } from "react";



export default function LandingPage() {

  const [botState, setBotState] = useState(false)

  const cambiarState = () => {
      if (botState === true) {
          setBotState(false)
      }
      else { setBotState(true) }
  }

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
          The platform not only allows you to buy or sell NTF, you can also
          create and obtain your own token through a guided process for those
          who are not specialists in the field.
        </p>
        <div className={styles.gruposLanding}>
          
          <div className={styles.columnaLanding}>
            <IoWalletOutline className={styles.iconoLanding}/>
            <h3>Set up your wallet</h3>
            <p>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.</p>
          </div>
          <div className={styles.columnaLanding}>
            <IoImageOutline className={styles.iconoLanding}/>
            <h3>Add your NFTs</h3>
            <p>Upload your work (image, video, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</p>
          </div>
          <div className={styles.columnaLanding}>
            <IoPricetagsOutline className={styles.iconoLanding}/>
            <h3>List them for sale</h3>
            <p>You choose how you want to sell your NFTs, and we help you sell them!</p>
          </div>
        </div>

        {botState ?
                <div>
                    <div className={styles.cajaActivada} onClick={e => cambiarState()}> CLOSE </div>
                    <div className={styles.chatbotLanding} >
                        <Chatbot/>
                    </div> 
                </div>
                : <div className={styles.cajaBoton} onClick={e => cambiarState()}> Need Help? <BsChatDots className={styles.icon}/> </div> }
      </div>
    </div>
  );
}
