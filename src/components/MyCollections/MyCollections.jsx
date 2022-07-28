import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import { useMoralis } from "react-moralis";
import styles from "./MyCollections.module.css";
import { useNFTBalance } from "../../hooks/useNFTBalance";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import { publishMarket } from "../../redux/actions";
import { marketAddress, contractABI } from "../../contracts/contractMarket";
import { useWeb3ExecuteFunction } from "react-moralis";
import { Modal, Button } from "react-bootstrap";

export default function MyCollections({ chainChain, chain }) {
  const { NFTBalance, fetchSuccess } = useNFTBalance(chain);
  const { Moralis } = useMoralis();
  const [visible, setVisibility] = useState(false);
  const [input, setInput] = useState(false);
  const [price, setPrice] = useState();
  const [nftToSell, setNftToSell] = useState(null);
  const contractProcessor = useWeb3ExecuteFunction();
  const contractABIJson = JSON.parse(JSON.stringify(contractABI));
  const listItemFunction = "createMarketItem";

  async function list(nft, currentPrice) {
    const p = currentPrice * ("1e" + 18);

    const ops = {
      contractAddress: marketAddress,
      functionName: listItemFunction,
      abi: contractABIJson,
      params: {
        nftContract: nft.token_address,
        tokenId: nft._id,
        price: String(p),
      },
    };

    await contractProcessor.fetch({
      params: ops,
      onSuccess: () => {
        alert("item bougth");
      },
      onError: (e) => {
        alert(e);
      },
    });
  }

  const handleSellClick = (nft) => {
    setNftToSell(nft);
    setVisibility(true);
    setInput(nft);
  };

  const back = () => {
    window.history.back();
  };

  const handleClose = () => setVisibility(false);

  return (
    <div>
      <Navbar chainChain={chainChain} />
      <button className={styles.botonR} onClick={back}>
        Go Back
      </button>
      <div className={styles.allInclusive}>
        <div className={styles.tt}>MY COLLECTIONS</div>
        <div className={styles.gallery}>
          {NFTBalance.results?.map((e) => (
            //   <Card key={e._id} name={e.name} image={e.image} />
            <div className={styles.card} key={e.id}>
              <h3 className={styles.name}>{e.name}</h3>
              <button
                onClick={() => handleSellClick(e)}
                className={styles.botoncito}
              >
                Publish on the market
              </button>
              {input.name === e.name ? (
                <div>
                  <input
                    placeholder="Price ETH"
                    className={styles.input}
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <input
                    onClick={() => list(nftToSell, price)}
                    value="List"
                    className={styles.inputt}
                    type="submit"
                  />
                </div>
              ) : null}
              <img className={styles.img} src={e.image} alt="img" />
            </div>
          ))}

          {/* <Modal
            className={styles.ventanitaModal}
            title={`Buy ${nftToSell?.name || "NFT"}`}
            show={visible}
            onHide={() => setVisibility(false)}
          >
            <Modal.Header closeButton>
              <Modal.Title>{`Buy ${nftToSell?.name || "NFT"}`}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={nftToSell?.image}
                style={{
                  width: "250px",
                  margin: "auto",
                  borderRadius: "10px",
                  marginBottom: "15px",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <input
                autoFocus
                placeholder="Set Price in Eth"
                onChange={(e) => setPrice(e.target.value)}
              />
              <button onClick={() => list(nftToSell, price)}>List</button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
