import React from "react";
import style from "./CardMarket.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CardMarket({
  _id,
  price,
  name,
  image,
  token_address,
  agregarCarrito,
  agregarFavorito,
}) {
  const navigate = useNavigate();

  let onClick = (e) => {
    agregarCarrito(e);
  };
  let onClickF = (e) => {
    agregarFavorito(e);
  };
  let favorito = () => {
    Swal.fire({
      icon: "error",
      text: "To add NFT to favorites you must be logged in.",
    });
    navigate("/login");
  };

  const userrr = JSON.parse(localStorage.getItem("profiles"));
  const userrrGoogle = JSON.parse(localStorage.getItem("profileGoogle"));

  return (
    <div className={style.container}>
      <div className={style.card}>
        <figure className={style.containerImagen}>
          {image ? (
            <img
              className={style.imagenRec}
              src={image}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://cryptodozer.io/static/images/dozer/meta/dolls/300.png";
              }}
              alt="nft"
            />
          ) : (
            <h1>sin imagen</h1>
          )}
        </figure>
        <div className={style.containertext}>
          {name && name.length > 20 ? (
            <h1 className={style.name}>{name.slice(0, 20) + "..."}</h1>
          ) : (
            <h1 className={style.name}>{name}</h1>
          )}
        </div>

        <div className={style.botones}>
          <div className={style.abajo}>
            <div>
              <button
                onClick={() => onClick({ _id, name, image })}
                className={style.car}
              >
                {BsFillCartCheckFill()}{" "}
              </button>
              {userrr || userrrGoogle ? (
                <button
                  onClick={() => onClickF({ _id, name, image })}
                  className={style.heart}
                >
                  {AiFillHeart()}{" "}
                </button>
              ) : (
                <button onClick={() => favorito()} className={style.heartFeo}>
                  {AiFillHeart()}{" "}
                </button>
              )}
            </div>
            <div>
              <button className={style.botonBuy}>BUY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
