import React, { useState} from "react";
import {
  useMoralis,
  useMoralisQuery,
  
} from "react-moralis";

import CardMarket from "../CardMarket/CardMarket";
import { useNFTTokenIds } from "../../hooks/useNFTTokenIds";
import styles from "./Market.module.css";
import { useWeb3ExecuteFunction } from "react-moralis";
import { marketAddress } from "../../contracts/contractMarket";
import Navbar from "../Navbar/Navbar";
import { contractABI } from "../../contracts/contractMarket";

import Swal from "sweetalert2";





export default function Market({walletAddress,
  contractNFT,
  
  agregarCarrito,
  agregarFavorito,}) {
  
  const { NFTTokenIds, fetchSuccess } = useNFTTokenIds(contractNFT);
  const [visible, setVisibility] = useState(false);
  const [nftToBuy, setNftToBuy] = useState(null);
  const [loading, setLoading] = useState(false);
  const contractProcessor = useWeb3ExecuteFunction();
  const contractABIJson = JSON.parse(JSON.stringify(contractABI))
  const { Moralis } = useMoralis();
  const queryMarketItems = useMoralisQuery("CreatedNFTMarket");
  const fetchMarketItems = JSON.parse(
    JSON.stringify(queryMarketItems.data, [
      "objectId",
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
    const itemID = tokenDetails?.itemId;
    const tokenPrice = tokenDetails?.price;
    const ops = {
      contractAddress: marketAddress,
      functionName: purchaseItemFunction,
      abi: contractABIJson,
      params: {
        nftContract: nftToBuy?.token_address,
        itemId: itemID,
      },
      msgValue: tokenPrice,
    };

    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'successfully bought nft',
          showConfirmButton: false,
          timer: 1500
        })

        setLoading(false);
        setVisibility(false);
        updateSoldMarketItem();
        //succPurchase();
      },
      onError: (error) => {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        setLoading(false);
        console.log('error', error)
        

        //failPurchase();
      },
    });
  }

  const handleBuyClick = (nft) => {
    setNftToBuy(nft);
    setVisibility(true);
  };

  
  async function updateSoldMarketItem() {
    const id = getMarketItem(nftToBuy).objectId;
    const marketList = Moralis.Object.extend("CreatedNFTMarket");
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
        e.tokenId === nft?._id &&
        e.sold === false &&
        e.confirmed === true
    );
    return result;
  };
  const newObject = Object.values(NFTTokenIds);
  const back = () => {
    window.history.back();
  };

  const nfts = newObject[0]?.filter( e => getMarketItem(e)).map( e =>  ({
      nft : e,
      name :  e.name,
      image :  e.image,
      _id: e._id,
      token_address: e.token_address,
      price : getMarketItem(e).price / ("1e" + 18)

  }))


  return (
    <>
      <div>
      <Navbar />
      <button  className={styles.botonR}  onClick={back}>
        Go Back
      </button>
      <div className={styles.tt}>Market</div>
        
        <div className={styles.container}>
          
            

          
            {nfts?.map((nft, index) => (
              
              <div>
              <CardMarket
                name={nft.name}
                image={nft.image}
                key={index}
                _id={nft._id}
                price={nft.price}
                token_address={nft.token_address}
                agregarCarrito={agregarCarrito}
                agregarFavorito={agregarFavorito}
                purchase={purchase}
                getMarketItem={getMarketItem}
                handleBuyClick={handleBuyClick}
                nft={nft.nft}
              />
                
                {/* <button className={styles.botonR} onClick={() => handleBuyClick(nft.nft)}>Select</button> */}
                
                </div>
              
            ))}
        </div>
      
      </div>
    </>
  );
}

