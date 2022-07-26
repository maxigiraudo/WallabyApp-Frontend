import React from 'react'

import { useNFTTokenIds } from "../hooks/useNFTTokenIds";


function Tests({address}) {
  
    const { NFTTokenIds,fetchSuccess} = useNFTTokenIds(address);

    console.log(NFTTokenIds)
    console.log(fetchSuccess)
    

    

  return (
    <div>Tests</div>
  )
}

export default Tests
