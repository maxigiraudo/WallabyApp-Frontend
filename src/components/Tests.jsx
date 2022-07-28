import React from "react";

import { useNFTTokenIds } from "../hooks/useNFTTokenIds";

function Tests({ address }) {
  const { NFTTokenIds, fetchSuccess } = useNFTTokenIds(address);

  return <div>Tests</div>;
}

export default Tests;
