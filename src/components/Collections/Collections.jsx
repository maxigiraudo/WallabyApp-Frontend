import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdVerified } from "react-icons/md";
import style from "./Collections.module.css";
import { useNFTTokenIds } from "../../hooks/useNFTTokenIds";
import { getNameNft } from "../../redux/actions";
import { Link } from "react-router-dom";

export default function Collections({ image, name, address }) {
  //   const newAddress = address.map((e) => {})

  const dispatch = useDispatch();

  function buscarNftColeccion(e) {
    dispatch(getNameNft(e));
  }

  return (
    <div className={style.carousel}>
      <div className={style.tres}>
        {image ? (
          <div className={style.container23}>
            <div className={style.divIm}>
              {/* <Link to={`/collection/${address}`}> */}
<<<<<<< HEAD
                <img                  
                  className={style.imageC}
                  src={image}
                  alt="*"
                  value="art"
                  onClick={() => buscarNftColeccion(name)}
                />
=======
              <img
                className={style.imageC}
                src={image}
                alt="*"
                value="art"
                onClick={() => buscarNftColeccion(name)}
              />
>>>>>>> cd374ad3445acdb29ae810e8be6afa64d59845cb
              {/* </Link> */}
            </div>
            <div className={style.divH}></div>
            <h1 className={style.nameC}>{name}</h1>
            <p className={style.veri}>{MdVerified()}</p>
          </div>
        ) : null}
      </div>
    </div>
  );

  // return (
  //     <div>
  //         <Collection address={address} />
  //     </div>
  // )
}
