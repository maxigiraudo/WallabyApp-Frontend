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
import { marketAddress } from "../../contracts/contractMarket";

export default function Market({ walletAddress, contractNFT, contractABI }) {
  //   const market = useSelector((state) => state.market);
  const back = () => {
    window.history.back();
  };
  const { NFTTokenIds, fetchSuccess } = useNFTTokenIds(contractNFT);
  const [nftToBuy, setNftToBuy] = useState(null);
  const [loading, setLoading] = useState(false);
  const contractProcessor = useWeb3ExecuteFunction();
  const contractABIJson = JSON.parse(JSON.stringify(contractABI));
  const { Moralis } = useMoralis();
  const queryMarketItems = useMoralisQuery("MarketItems");

  const fetchMarketItems = JSON.parse(
    JSON.stringify(queryMarketItems.data, [
      "ObjectId",
      "createdAt",
      "price",
      "nftContract",
      "itemId",
      "sold",
      "tokenId",
      "seller",
      "owner",
      "confirmed",
    ])
  );

  const purchaseItemFunction = "createMarketSale";

  async function purchase() {
    setLoading(true);
    const tokenDetails = getMarketItem(nftToBuy);
    const itemID = tokenDetails.itemId;
    const tokenPrice = tokenDetails.price;
    const ops = {
      contractAddress: marketAddress,
      functionName: purchaseItemFunction,
      abi: contractABIJson,
      params: {
        nftContract: nftToBuy.token_address,
        itemId: itemID,
      },
      masValue: tokenPrice,
    };

    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {
        console.log("success");
        setLoading(false);
        updateSoldMarketItem();
        succPurchase();
      },
      onError: (error) => {
        alert(error);
        setLoading(false);
        failPurchase();
      },
    });
  }

  const handleBuyClick = (nft) => {
    setNftToBuy(nft);
    console.log(nft.image);
  };

  function succPurchase() {
    alert("success purchase!");
  }

  function failPurchase() {
    alert("error purchase");
  }

  async function updateSoldMarketItem() {
    const id = getMarketItem(nftToBuy).objectId;
    const marketList = Moralis.Object.extend("MarketItems");
    const query = new Moralis.Query(marketList);

    await query.get(id).then((obj) => {
      obj.set("sold", true);
      obj.set("owner", walletAddress);
      obj.save();
    });
  }

  const getMarketItem = (nft) => {
    const result = fetchMarketItems?.find(
      (e) =>
        e.nftContract === nft?.token_address &&
        e.tokenId === nft?.token_id &&
        e.sold === false &&
        e.confirmed === true
    );
    return result;
  };

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
