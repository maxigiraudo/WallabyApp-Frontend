import React from 'react'
import { useSelector } from 'react-redux';
import style from './CollectionCol.module.css'
import {MdVerified} from 'react-icons/md'



export default function CollectionCol(){

    const catCol = useSelector((state) =>state.collectionCol)   


   


      return(
        <div className={style.carousel}>
            <div className={style.flex}>
            <div className={style.tres}>
              <div className={style.container23}>
              <div className={style.divIm}>
                <img
                  className={style.imageC}
                  src={catCol[9].image}
                  alt="*"
                  value="art"
                
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catCol[9].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
    
              <div className={style.cuatro}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catCol[1].image}
                  alt="*"
                  value="art"
               
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catCol[1].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
           
        
              <div className={style.cinco}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catCol[2].image}
                  alt="*"
                  value="art"
                
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catCol[2].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
              </div>
              <div className={style.flex}>
              <div className={style.seis}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catCol[3].image}
                  alt="*"
                  value="art"
                
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catCol[3].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
    
              <div className={style.siete}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catCol[4].image}
                  alt="*"
                  value="art"
                  
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catCol[4].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
           
        
              <div className={style.ocho}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catCol[5].image}
                  alt="*"
                  value="art"
                  
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catCol[5].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
              </div>
              <div className={style.flex}>
              <div className={style.nueve}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catCol[6].image}
                  alt="*"
                  value="art"
                 
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catCol[6].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
    
              <div className={style.diez}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catCol[7].image}
                  alt="*"
                  value="art"
                 
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catCol[7].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
           
        
              <div className={style.once}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catCol[8].image}
                  alt="*"
                  value="art"
                
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catCol[8].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
              </div>

        </div>
      )
}