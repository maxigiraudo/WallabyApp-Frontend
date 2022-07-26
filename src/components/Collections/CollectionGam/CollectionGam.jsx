import React from 'react'
import { useSelector } from 'react-redux';
import style from './CollectionGam.module.css'
import {MdVerified} from 'react-icons/md'


export default function CollectionGam(){

    const catArt = useSelector((state) =>state.collectionGam)   

      return(
        <div className={style.carousel}>
            <div className={style.flex}>
            <div className={style.tres}>
              <div className={style.container23}>
              <div className={style.divIm}>
                <img
                  className={style.imageC}
                  src={catArt[9].image}
                  alt="*"
                  value="art"
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catArt[9].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
    
              <div className={style.cuatro}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catArt[0].image}
                  alt="*"
                  value="art"
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catArt[0].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
           
        
              <div className={style.cinco}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catArt[2].image}
                  alt="*"
                  value="art"
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catArt[2].name}</h1>
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
                  src={catArt[3].image}
                  alt="*"
                  value="art"
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catArt[3].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
    
              <div className={style.siete}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catArt[4].image}
                  alt="*"
                  value="art"
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catArt[4].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
           
        
              <div className={style.ocho}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catArt[5].image}
                  alt="*"
                  value="art"
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catArt[5].name}</h1>
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
                  src={catArt[6].image}
                  alt="*"
                  value="art"
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catArt[6].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
    
              <div className={style.diez}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catArt[7].image}
                  alt="*"
                  value="art"
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catArt[7].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
           
        
              <div className={style.once}>
              <div className={style.container23}>
              <div className={style.divIm}>

                <img
                  className={style.imageC}
                  src={catArt[8].image}
                  alt="*"
                  value="art"
                />
              </div>
            <div className={style.divH}></div>
                <h1 className={style.nameC}>{catArt[8].name}</h1>
                <p className={style.veri}>{MdVerified()}</p>
              </div>
              </div>
              </div>

        </div>
      )
}