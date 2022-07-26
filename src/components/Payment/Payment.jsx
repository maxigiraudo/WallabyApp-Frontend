import React from 'react';
import style from './payment.module.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from "react-router-dom";


const getPayment = () => {
const pay = "https://widget.onramper.com?color=1d2d50&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
    return (
     <div>
         <Navbar/>
         <Link to='/home'>
         <button className={style.botonR}>Go Back</button>
         </Link>
         <div className={style.div}>
         <iframe src={pay} className={style.payment}></iframe>
         </div>     
         <Footer/>
     </div>
    )}


export default getPayment;