import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";
import logo from "./logowallaby.png";

export default function Footer() {
  return (
    <section className={style.footer}>
      <hr className={style.footerseperator} />
      <section className={style.footersocialmedia}>
        <Link to="/home">
          <img className={style.logo} src={logo} alt="logo"></img>
        </Link>
      </section>
      <section className={style.footerinfo}>
        <section className={style.footerinfoleft}>
          <section className={style.footerinfo__name}>
            <a href="/">Welcome</a>
          </section>
          <section className={style.footerinfo__name}>
            <a href="/home">Home</a>
          </section>
          <section className={style.footerinfo__name}>
            <a href="/form">Create NFT</a>
          </section>
        </section>
        <section className={style.footerinfoleft}>
          <section className={style.footerinfo__name}>
            <a href="/singup">Sing Up</a>
          </section>
          <section className={style.footerinfo__name}>
            <a href="/login">Login</a>
          </section>
          <section className={style.footerinfo__name}>
            <a href="/wallet">Connect Wallet</a>
          </section>
        </section>
        <section className={style.footerinfocenter}>
          <Link to="/about">
            <h1 className={style.u}>ABOUT</h1>
          </Link>
        </section>
      </section>
      <hr className={style.footerseperator} />
    </section>
  );
}
