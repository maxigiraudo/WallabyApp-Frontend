import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { useIPFS } from "./useIPFS";

export const useNFTBalance = () => {
  const { resolveLink } = useIPFS();
  const {account} = useMoralisWeb3Api()

  const Web3Api = useMoralisWeb3Api();
  const [NFTBalance, setNFTBalance] = useState([]);
  const [fetchSuccess, setFetchSuccess] = useState(true);

 

  useEffect(() => {
    const respuesta = {};
    respuesta.results = []
    function fetchData() {
      Web3Api.account
        .getNFTs({
            chain : "mumbai"
        })
        .then((data) => {
            const NFTs = data.result;
            respuesta.info = {
              page: data.page,
              total_pages: Math.ceil(data.total / data.page_size),
              cursor: data.cursor,
              total_items: data.total,
            };
            setFetchSuccess(true);
            for (let NFT of NFTs) {
              if (NFT?.metadata) {
                const metadata = JSON.parse(NFT.metadata);
                //const image = (metadata.image = resolveLink(NFT.metadata?.image));
                respuesta.results.push({
                  _id: NFT.token_id,
                  token_address: NFT.token_address,
                  token_hash: NFT.token_hash,
                  collection: NFT.name,
                  name: metadata.name,
                  image: metadata.image,
                  description: metadata.description,
                });
              } else if (NFT?.token_uri) {
                const token_uri = JSON.parse(NFT.token_uri.slice(22));
                respuesta.push({
                  _id: NFT.token_id,
                  token_address: NFT.token_address,
                  token_hash: NFT.token_hash,
                  collection: NFT.name,
                  name: token_uri.name,
                  image: token_uri.image,
                  description: token_uri.description,
                });
              }
            }
            setNFTBalance(respuesta);
          })
        .catch((error) => {
            console.log('error', error)
          setFetchSuccess(false);
        });
    }
    fetchData();
  }, []);

  return {
    NFTBalance,
    fetchSuccess,
  };
};
