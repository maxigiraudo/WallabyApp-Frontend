import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import NotFound from "../NotFound/NotFound";
// import Order from "../Order/Order";
import Card from "../Card/Card";
import Collections from "../Collections/Collections";
import {
  getNft,
  getNftAll,
  getSliderNftArt,
  getNameNft,
  getCollectionArt,
  getCollectionCol,
  getCollectionPho,
  getCollectionGam,
  getCollectionMus,
  getCollectionSpo,
  getCollections,
} from "../../redux/actions";
import style from "./Home.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Loading from "../Loading/Loading";
import CollectionCol from "../Collections/CollectionCol/CollectionCol";
import art from "./images/art (1).png";
import collectibles from "./images/collectibles (1).png";
import games from "./images/games (1).png";
import music from "./images/music (1).png";
import photography from "./images/photography (1).png";
import sports from "./images/sports (1).png";
import CollectionArt from "../Collections/CollectionArt/CollectionArt";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CollectionPho from "../Collections/CollectionPho/CollectionPho";
import CollectionGam from "../Collections/CollectionGam/CollectionGam";
import CollectionMus from "../Collections/CollectionMus/CollectionMus";
import CollectionSpo from "../Collections/CollectionSpo/CollectionSpo";

export default function Home({ agregarCarrito, agregarFavorito, setWalletAddress, walletAddress, setChain}) {
  const allCard = useSelector((state) => state.cards);
  const cursori = useSelector((state) => state.cursor);
  const notFound = useSelector((state) => state.notFoundName)

  const nftName = useSelector((state) => state.nftPorName);

  console.log("CURSOR DEL HOME", cursori);
  const dispatch = useDispatch();
  useEffect(() => {
    if (allCard.length === 0 && nftName.length === 0) dispatch(getNft())
  }, [dispatch, cursori]);

  const collections = useSelector((state) => state.collection);
  // const catCol = useSelector((state) => state.collectionCol);
  // const catPho = useSelector((state) => state.collectionPho);
  // const catGam = useSelector((state) => state.collectionGam);
  // const catMus = useSelector((state) => state.collectionMus);
  // const catSpo = useSelector((state) => state.collectionSpo);

  console.log("ESTO ME LLEGA AL HOME DE LA CATEGORIA ART", collections);

  console.log(allCard);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function handleFilterByCollection(e) {
    dispatch(getCollections(e));
  }
  // function handleFilterByCategoryCol(e) {
  //   dispatch(getCollectionCol(e));
  // }
  // function handleFilterByCategoryPho(e) {
  //   dispatch(getCollectionPho(e));
  // }
  // function handleFilterByCategoryGam(e) {
  //   dispatch(getCollectionGam(e));
  // }
  // function handleFilterByCategoryMus(e) {
  //   dispatch(getCollectionMus(e));
  // }
  // function handleFilterByCategorySpo(e) {
  //   dispatch(getCollectionSpo(e));
  // }

  const [currentPage, setCurrentPage] = useState(1);
  const [nftPerPage, setNftPerPage] = useState(6);
  const currentNft = allCard.slice(0, nftPerPage);
  const [hasMore, setHasMore] = useState(true);

  console.log(currentNft);
  useEffect(() => {
    setNftPerPage((prevNft) => prevNft + 12);
    if (nftPerPage >= 1500) {
      setHasMore(false);
    }
    if (nftName.length === 0) {
      dispatch(getNftAll(cursori));
    }
  }, [currentPage, dispatch]);

  // function handleFilterByName(e) {
  //   dispatch(getNameNft(e));
  // }

  return (
    <div className={style.containergeneral}>
      <div className={style.containerNav}>
        <Navbar setWalletAddress={setWalletAddress} walletAddress={walletAddress} setChain={setChain}/>
      </div>
      <div className={style.container2}>
        <h1 className={style.text}>
        Select the category you like the most and enjoy the Wallaby experience.
        </h1>
        <div className={style.carousel}>
          <Slider {...settings}>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Art</h1>
                <img
                  className={style.imageC}
                  src={art}
                  alt="*"
                  value="art"
                  onClick={(e) => handleFilterByCollection("art")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Collectibles</h1>
                <img
                  className={style.imageC}
                  src={collectibles}
                  alt="*"
                  value="crypto"
                  onClick={(e) => handleFilterByCollection("collectibles")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Games</h1>
                <img
                  className={style.imageC}
                  src={games}
                  alt="*"
                  value="games"
                  onClick={(e) => handleFilterByCollection("games")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Music</h1>
                <img
                  className={style.imageC}
                  src={music}
                  alt="*"
                  value="music"
                  onClick={(e) => handleFilterByCollection("music")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Photography</h1>
                <img
                  className={style.imageC}
                  src={photography}
                  alt="*"
                  value="photography"
                  onClick={(e) => handleFilterByCollection("photography")}
                />
              </div>
            </div>
            <div className={style.containerC}>
              <div className={style.tres}>
                <h1 className={style.nameC}>Sports</h1>
                <img
                  className={style.imageC}
                  src={sports}
                  alt="*"
                  value="sports"
                  onClick={(e) => handleFilterByCollection("sports")}
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className={style.colectionPadre}>
        {collections.length > 0 ? (
          collections.map((e) => (
            <div className={style.colectionHome}>
              <Collections address={e.address} image={e.image} name={e.name} />
            </div>
          ))
        ) : (
          <div>
            <div className={style.orderSearch}>
              <div className={style.navDos}>
                <div className={style.searchBar}>
                  <Searchbar setCurrentPage={setCurrentPage} />
                </div>
              </div>
            </div>
            {notFound === true ? <NotFound/> : currentNft.length === 0 && nftName.length === 0 ? ( <Loading/> ) : currentNft.length || nftName.length ?
            <InfiniteScroll
              className={style.cardHome}
              dataLength={currentNft.length} //This is important field to render the next data
              next={() => setCurrentPage((prevPage) => prevPage + 1)}
              hasMore={hasMore}
            >
              {currentNft?.map((e, index) => (
                <Card
                  agregarFavorito={agregarFavorito}
                  agregarCarrito={agregarCarrito}
                  id={e._id}
                  key={index}
                  price={e.price}
                  name={e.name}
                  image={e.image}
                  created={e.created}
                  token_address={e.token_address}
                  collection={e.collection}
                />
              ))} 
              {nftName?.map((e, index) => (
                <Card
                  agregarFavorito={agregarFavorito}
                  agregarCarrito={agregarCarrito}
                  id={e._id}
                  key={index}
                  price={e.price}
                  name={e.name}
                  image={e.image}
                  created={e.created}
                  token_address={e.token_address}
                  collection={e.collection}
                /> 
              ))}
              </InfiniteScroll> : null }
              
          </div>
        )}
      </div>
      <div className={style.footer}>
        <Footer />
      </div>
    </div>
  );
}