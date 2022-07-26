import React from "react";
import style from "./NotFound.module.css";
import { BiSearchAlt } from "react-icons/bi";

const NotFound = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>{BiSearchAlt()}</h1>
      <h1 className={style.h1}>No results found.</h1>
    </div>
  );
};

export default NotFound;
