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
import CardMarket from "../CardMarket/CardMarket";

export default function Market({
  walletAddress,
  contractNFT,
  contractABI,
  agregarCarrito,
  agregarFavorito,
}) {
  //   const market = useSelector((state) => state.market);
  const back = () => {
    window.history.back();
  };
  const { NFTTokenIds, fetchSuccess } = useNFTTokenIds(contractNFT);
  const [nftToBuy, setNftToBuy] = useState(null);
  const [loading, setLoading] = useState(false);
  const contractProcessor = useWeb3ExecuteFunction();
  const contractABIJson = contractABI;
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

  const newObject = Object.values(NFTTokenIds);

  console.log("ESTE ES EL NEW OBJECT", newObject);

  console.log("ACCCA", NFTTokenIds, fetchSuccess);
  // let nfts;
  // if (fetchSuccess) {
  //   NFTTokenIds.length === 0 ? alert("problema") : (nfts = NFTTokenIds.results);
  // }

  return (
    <div>
      <Navbar />
      <button className={styles.botonR} onClick={back}>
        Go Back
      </button>
      <div className={styles.tt}>Market</div>
      <div className={styles.container}>
        {newObject[0]?.map((e) => (
          <CardMarket
            _id={e._id}
            price={e.price}
            name={e.name}
            image={e.image}
            token_address={e.token_address}
            agregarCarrito={agregarCarrito}
            agregarFavorito={agregarFavorito}
          />
        ))}
      </div>
    </div>
  );
}
