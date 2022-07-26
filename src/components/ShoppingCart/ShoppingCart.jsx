import styles from "./ShoppingCart.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart, removeOneFromCart } from "../../redux/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ShoppingCart({
  limpiarCarrito,
  eliminarCarrito,
  carrito,
}) {
  //   const products = useSelector((state) => state.cartProducts);

  //   const [nft, setNft] = useState();
  //   let dispatch = useDispatch();

  let onClickRemove = (e) => {
    Swal.fire({
      title: "Are you sure you want to remove from cart?",

      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted", "Your nft has been deleted.", "success");
        eliminarCarrito(e);
      }
    });
  };

  let onClickClean = () => {
    Swal.fire({
      title: "Are you sure you want to clean the cart?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, clean all",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("", "Your cart has been cleaned.", "success");
        limpiarCarrito();
      }
    });
  };
  const back = () => {
    window.history.back();
  };
  return (
    <div>
      <Navbar />

      <button onClick={back} className={styles.botonR}>
        Go Back
      </button>

      <div className={styles.container}>
        <h1 className={styles.titulo}>{FaShoppingCart()} Shopping Cart</h1>

        {carrito.length !== 0 ? (
          <div className={styles.box}>
            <div className={styles.nftA}>
              <h2 className={styles.imgA}>Image</h2>
              <h2 className={styles.nameA}>Name</h2>
              <h2 className={styles.priceA}>Price</h2>
              <h2 className={styles.botonA}>Dellete</h2>
            </div>
            {carrito.map((e, index) => {
              return (
                <div>
                  <div key={index} className={styles.nft}>
                    <img className={styles.img} src={e.image} alt="image" />
                    <div className={styles.name}>{e.name}</div>
                    <div className={styles.price}>$0</div>
                    <button
                      className={styles.boton}
                      onClick={() => onClickRemove(e.id)}
                    >
                      {IoMdCloseCircle()}
                    </button>
                  </div>
                </div>
              );
            })}
            <div className={styles.total}>
              <h1 className={styles.totalobich}>Total</h1>
              <h1 className={styles.cero}>$0</h1>
            </div>
            <div>
              <button className={styles.botonAbajo} onClick={onClickClean}>
                Clean Cart
              </button>
              <button className={styles.botonAbajo}>Buy</button>
            </div>
            <br />

            <div className={styles.charges}>
              <p className={styles.charge}>
                If you don't have enough money in your metamask wallet to make
                an offer or buy a nft, you can charge it with your credit card
                in a few simple steps.
              </p>
              <br></br>

              <Link to="/payment">
                <button className={styles.buttonBuy}>CHARGE</button>
              </Link>
            </div>
          </div>
        ) : (
          <p className={styles.viewe}>You dont have any NFT in the cart.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}
