import { useEffect, useState } from "react";
import { useMoralisWeb3Api } from "react-moralis";
import { useIPFS } from "./useIPFS";

export const useNFTTokenIds = (addr) => {
  const { resolveLink } = useIPFS();

  const Web3Api = useMoralisWeb3Api();
  const [NFTTokenIds, setNFTTokenIds] = useState([]);
  const [fetchSuccess, setFetchSuccess] = useState(true);

  const options = {
    address: addr,
  };

  useEffect(() => {
    const respuesta = {};
    respuesta.results = [];
    function fetchData() {
      Web3Api.token
        .getAllTokenIds(options)
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
              respuesta.results.push({
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
          setNFTTokenIds(respuesta);
        })
        .catch((error) => {
          console.log("ERROR DEL CATCH", error);
          setFetchSuccess(false);
        });
    }
    fetchData();
  }, []);

  return {
    NFTTokenIds,
    fetchSuccess,
  };
};
