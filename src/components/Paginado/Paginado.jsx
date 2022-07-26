import React from 'react'
import style from './Paginado.module.css'

export default function Paginado({nftPerPage,allCard,paginado}){
    const pageNumbers = [];

    for(let i=1; i<= Math.ceil(allCard/nftPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav className={style.container}>
            <ul className={style.pagination}>
                {pageNumbers &&
                pageNumbers.map(number =>(
                    <li key={number} >
                    <button onClick={()=> paginado(number)}> {number} </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}