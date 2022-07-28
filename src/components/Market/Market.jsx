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
import Swal from "sweetalert2";

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
  const queryMarketItems = useMoralisQuery("CreatedNFTMarket");

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
  console.log('NFTTOBUY', nftToBuy)

  async function purchase() {
    setLoading(true);
    //const tokenDetails = getMarketItem(nftToBuy);
    const tokenDetails = getMarketItem(nftToBuy);
    const itemID = tokenDetails.itemId;
    const tokenPrice = tokenDetails.price;
    const ops = {
      contractAddress: marketAddress,
      functionName: purchaseItemFunction,
      abi: contractABIJson,
      params: {
        nftContract: nftToBuy.token_address,
        itemId: itemID
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

  const handleBuyClick =  async (nft) => {
    setNftToBuy(nft)
    
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure to complete this purchase?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: 'red',
      confirmButtonText: 'Yes!!!'
    });
      if (result.isConfirmed) {
        await purchase()
      }
    }
  

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
        e.tokenId === nft?._id &&
        e.sold === false &&
        e.confirmed === true 
        
    );
    return result;
  };

  console.log(walletAddress);

  const newObject = Object.values(NFTTokenIds);

  console.log("ESTE ES EL NEW OBJECT", newObject);

  console.log("ACCCA", NFTTokenIds, fetchSuccess);
  
//  const data = newObject[0]?.filter( e => getMarketItem(e)).map( e => ({
//   _id : e._id,
//   name: e.name,
//   image: e.image,
//   token_address : e.token_address,
//   db : getMarketItem(e)
//  }))
 //const nfts = data?.filter( e => e.db.seller !== walletAddress)



  return (
    <div>
      <Navbar />
      <button className={styles.botonR} onClick={back}>
        Go Back
      </button>
      <div className={styles.tt}>Market</div>
      <div className={styles.container}>
        {newObject[0]?.map((nft) => (
          
          getMarketItem(nft) &&
          <>
          <CardMarket
            _id={nft._id}
            name={nft.name}
            image={nft.image}
            token_address={nft.token_address}
            agregarCarrito={agregarCarrito}
            agregarFavorito={agregarFavorito}
            
          />
          <button onClick={() => handleBuyClick(nft)}>Buy</button>
          </>
          
        ))}
      </div>
    </div>
  );
}
