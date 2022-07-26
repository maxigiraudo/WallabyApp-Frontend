import React from "react"
import style from "../Loading/Loading.module.css"
import NotFound from "../NotFound/NotFound"



export default function Loading() {
    return (
        <div className={style.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}


