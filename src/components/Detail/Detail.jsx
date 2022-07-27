import React from "react";
import styles from "./Detail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import { useEffect } from "react";
import { getDetail, resState } from "../../redux/actions";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Swal from "sweetalert2";

export default function Detail({ agregarCarrito, agregarFavorito }) {
  // const logged = useSelector((state) => state.userIsAuthenticated);
  const nft = useSelector((state) => state.detail);

  const userrr = JSON.parse(localStorage.getItem("profiles"));
  const userrrGoogle = JSON.parse(localStorage.getItem("profileGoogle"));

  const newUser = JSON.parse(userrr);

  let { id, token_address } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id, token_address));
  }, [dispatch, id, token_address]);

  const handleClean = () => {
    dispatch(resState());
    window.history.back();
  };

  const card = useSelector((state) => state.detail);

  console.log(card);

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

  return (
    <div>
      {card.image ? (
        <div className={styles.containerPadre}>
          <div className={styles.navbar}>
            <Navbar />

            <button onClick={() => handleClean()} className={styles.botonR}>
              Go Back
            </button>
          </div>
          <div className={styles.padre}>
            <div className={styles.todos}>
              <div>
                <img
                  className={styles.imagen}
                  src={card.image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://cryptodozer.io/static/images/dozer/meta/dolls/300.png";
                  }}
                  alt="nft"
                />
              </div>

              <div className={styles.description}>
                <h3 className={styles.name}>{card.name}</h3>
                <h5 className={styles.des}>Collection: {card.collection}</h5>
                <div className={styles.abajo}>
                  {/* <button
                    onClick={() =>
                      onClick({ name: nft.name, image: nft.image })
                    }
                    className={styles.car}
                  >
                    {BsFillCartCheckFill()}{" "}
                  </button> */}
                  {newUser || userrrGoogle ? (
                    <button
                      onClick={() =>
                        onClickF({ name: nft.name, image: nft.image })
                      }
                      className={styles.heart}
                    >
                      Add to Favorite {AiFillHeart()}{" "}
                    </button>
                  ) : (
                    <button
                      onClick={() => favorito()}
                      className={styles.heartFeo}
                    >
                      Add to Favorite {AiFillHeart()}{" "}
                    </button>
                  )}
                </div>
              </div>
            </div>
            {/* <br></br>
            <p className={styles.charge}>
              If you don't have enough money in your metamask wallet to make an
              offer or buy a nft, you can charge it with your credit card in a
              few simple steps.
            </p>
            <br></br>
            <Link to="/payment">
              <button className={styles.buttonBuy}>CHARGE</button>
            </Link> */}
          </div>
          <div className={styles.footer}>
            <Footer />
          </div>
        </div>
      ) : (
        <div>
          <h1 className={styles.load}>Loading...</h1>
          <Loading />
        </div>
      )}
    </div>
  );
}
