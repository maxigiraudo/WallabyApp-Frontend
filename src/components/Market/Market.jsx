import React, { useState, useEffect } from "react";
import {
  useMoralis,
  useMoralisQuery,
  useNewMoralisObject,
  useWeb3ExecuteFunction,
} from "react-moralis";
import { nft_contract_address } from "../../contracts/contract";
import Navbar from "../Navbar/Navbar";
import styles from "./Market.module.css";
import { useNFTTokenIds } from "../../hooks/useNFTTokenIds";

export default function Market({ walletAddress, contractNFT }) {
  //   const market = useSelector((state) => state.market);
  const back = () => {
    window.history.back();
  };
  const { NFTTokenIds, fetchSuccess } = useNFTTokenIds(contractNFT);
  const [nftToBuy, setNftToBuy] = useState(null);
  const [loading, setLoading] = useState(false);
  const contractProcessor = useWeb3ExecuteFunction();
  console.log(walletAddress);

  console.log("ACCCA", NFTTokenIds, fetchSuccess);
  return (
    <div>
      <Navbar />
      <button className={styles.botonR} onClick={back}>
        Go Back
      </button>
      <div className={styles.tt}>Market</div>
    </div>
  );
}
