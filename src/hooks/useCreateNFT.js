import { useEffect, useState } from "react";
import { useMoralisWeb3Api, useMoralis} from "react-moralis";

export const useCreateNFT = ({name, image, description}) => {
    const nft_contract_address = "0x0Fb6EF3505b9c52Ed39595433a21aF9B5FCc4431";
    const {web3} = useMoralis();
    
    web3(window.ethereum)
    
}