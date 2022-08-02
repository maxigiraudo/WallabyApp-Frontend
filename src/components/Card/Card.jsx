import React from "react";
import style from "./Card.module.css";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { BsSuitHeartFill } from "react-icons/bs";

export default function Card({
  id,
  price,
  name,
  image,
  token_address,
  agregarFavorito,
}) {
  let dispatch = useDispatch();
  // let [cont, setContador] = useState(1);
  console.log("front");
  console.log("front2");
  const navigate = useNavigate();

  let onClick = () => {
    Swal.fire({
      icon: "error",
      title: "Not available for sale at Wallaby.",
      text: "To buy NFT check the market.",
      showConfirmButton: true,
    });
    navigate("/market");
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

  // const logged = useSelector((state) => state.userIsAuthenticated);
  const userrr = JSON.parse(localStorage.getItem("profiles"));
  const userrrGoogle = JSON.parse(localStorage.getItem("profileGoogle"));

  return (
    <div className={style.container}>
      <div className={style.card}>
        <Link to={"/detail/" + id + "/" + token_address} className={style.link}>
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
        </Link>

        <div className={style.abajo}>
          <button
            onClick={() => onClick({ id, name, image })}
            className={style.car}
          >
            {BsFillCartCheckFill()}{" "}
          </button>
          {userrr || userrrGoogle ? (
            <button
              onClick={() => onClickF({ id, name, image })}
              className={style.heart}
            >
              {BsSuitHeartFill()}{" "}
            </button>
          ) : (
            <button onClick={() => favorito()} className={style.heartFeo}>
              {BsSuitHeartFill()}{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
