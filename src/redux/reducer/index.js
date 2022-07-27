const initialState = {
  cards: [],
  allCards: [],
  searchCards: [],
  detail: [],
  category: [],
  carrito: [],
  cartProducts: [],
  loading: false,
  error: false,
  cursor: "",
  contador: 0,
  favorite: [],
  user: [],
  profile: [],
  useGoogle: {},
  userIsAuthenticated: false,
  userData: {},
  nftCreados: [],
  userRegister: false,
  collection: [],
  // collectionCol: [],
  // collectionPho: [],
  // collectionGam: [],
  // collectionMus: [],
  // collectionSpo: [],
  userInfo: {},
  isAuth: false,
  profileGoogle: [],
  usersDashboard: [],
  recoverPassword: false,
  passwordUpdate: "",
  newPass: "",
  olvidoContraseña: false,
  recuperoLaContraseña: false,
  nftPorName: [],
  market: [],
  reviewComplete:false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_NAME_NFT":
      const sinC = action.payload;
      const sinCurs = sinC.filter((e) => e.name);
      return {
        ...state,
        nftPorName: sinCurs,
        cards: [],
        allCards: [],
        collection:[]
      };
    case "PUT_UPDATE_PASSWORD":
      return {
        ...state,
        passwordUpdate: action.payload,
        recoverPassword: false,
      };
      
    case "POST_REVIEW":
      return{
        ...state,
        reviewComplete:true
      }  

    case "NEW_PASSWORD":
      return {
        ...state,
        newPass: action.payload,
      };

    case "GET_COLLECTIONS":
      return {
        ...state,
        collection: action.payload,
      };
    case "OLVIDO_CONTRASEÑA":
      return {
        ...state,
        olvidoContraseña: action.payload,
      };

    case "ESTA_POR_CAMBIAR_CONTRASEÑA":
      return {
        ...state,
      };
    case "ESTA_SERA_NUEVA_CONTRASEÑA":
      return {
        ...state,
        recuperoLaContraseña: true,
      };
    // case "GET_COLLECTION_COL":
    //   const sinCur = action.payload;
    //   const sinCurso1 = sinCur.filter((e) => e.name);
    //   const col = sinCurso1.filter((e) => e.category === "collectibles");
    //   console.log("ESTA ES MI ACTION DE COL", col);
    //   return {
    //     ...state,
    //     collectionCol: col,
    //     collectionArt:[]
    //   };
    //   case "GET_COLLECTION_PHO":
    //     const sinCur1 = action.payload;
    //     const sinCurso2 = sinCur1.filter((e) => e.name);
    //     const pho = sinCurso2.filter((e) => e.category === "photography");
    //     console.log("ESTA ES MI ACTION DE COL", pho);
    //     return {
    //       ...state,
    //       collectionPho: pho,
    //       collectionArt:[],
    //       collectionCol:[],
    //       collectionGam:[],
    //       collectionMus:[],
    //       collectionSpo:[]
    //     };
    //     case "GET_COLLECTION_GAM":
    //     const sinCur2 = action.payload;
    //     const sinCurso3 = sinCur2.filter((e) => e.name);
    //     const gam = sinCurso3.filter((e) => e.category === "games");
    //     console.log("ESTA ES MI ACTION DE COL", gam);
    //     return {
    //       ...state,
    //       collectionPho: [],
    //       collectionArt:[],
    //       collectionCol:[],
    //       collectionGam:gam,
    //       collectionMus:[],
    //       collectionSpo:[]
    //     };
    //     case "GET_COLLECTION_MUS":
    //       const sinCur3 = action.payload;
    //       const sinCurso4 = sinCur3.filter((e) => e.name);
    //       const mus = sinCurso4.filter((e) => e.category === "music");
    //       console.log("ESTA ES MI ACTION DE COL", mus);
    //       return {
    //         ...state,
    //         collectionPho: [],
    //         collectionArt:[],
    //         collectionCol:[],
    //         collectionGam:[],
    //         collectionSpo:[],
    //         collectionMus:mus
    //       };
    //       case "GET_COLLECTION_SPO":
    //         const sinCur4 = action.payload;
    //         const sinCurso5 = sinCur4.filter((e) => e.name);
    //         const spo = sinCurso5.filter((e) => e.category === "sports");
    //         console.log("ESTA ES MI ACTION DE COL", spo);
    //         return {
    //           ...state,
    //           collectionPho: [],
    //           collectionArt:[],
    //           collectionCol:[],
    //           collectionGam:[],
    //           collectionMus:[],
    //           collectionSpo:spo
    //         };

    case "RECOVER_PASSWORD":
      return {
        ...state,
        recoverPassword: action.payload,
      };
    case "GET_NFT":
      // const getInfo = action.payload
      // const getInfoRenderizar = getInfo.filter((e)=> e.name)
      // const getFinal = getInfoRenderizar.filter((e)=> e.name != "Brave CAT" && e.name != "Farmer Cat" && !e.image.includes("catsworld"))
      // console.log("soy", getFinal)
      const getInfo = action.payload;
      const cursor = getInfo[0].cursor;
      const getInfoF = getInfo.filter((e) => e.name);
      console.log("ESTE ES EL CURSOR 1:", cursor);
      return {
        ...state,
        cursor: cursor,
        allCards: getInfoF,
        cards: getInfoF,
        collection: [],
        nftPorName: [],
      };
    case "GET_NFT_HOME":
      // const getInfo = action.payload
      // const getInfoRenderizar = getInfo.filter((e)=> e.name)
      // const getFinal = getInfoRenderizar.filter((e)=> e.name != "Brave CAT" && e.name != "Farmer Cat" && !e.image.includes("catsworld"))
      // console.log("soy", getFinal)
      const getInfo1 = action.payload;
      const cursor1 = getInfo1[0].cursor;
      const getInfoF1 = getInfo1.filter((e) => e.name);
      console.log("ESTE ES EL CURSOR 1:", cursor1);
      return {
        ...state,
        cursor: cursor1,
        allCards: getInfoF1,
        cards: getInfoF1,
        collectionArt: [],
        collectionCol: [],
        collectionPho: [],
        collectionGam: [],
        collectionMus: [],
        collectionSpo: [],
      };
    case "GET_NFT_ALL20":
      const getInfo2 = action.payload;
      const cursor2 = getInfo2[0].cursor;
      const getInfoFinal = getInfo2.filter((e) => !e.cursor);
      console.log("ESTE ES EL CURSOR 2:", cursor2);
      return {
        ...state,
        cursor: cursor2,
        allCards: [...state.allCards, ...getInfoFinal],
        cards: [...state.cards, ...getInfoFinal],
        nftPorName: [],
      };
    case "GET_DETAILS":
      return {
        ...state,
        detail: action.payload,
      };
    case "CREATE_NFT_SUCCESS":
      return {
        ...state,
        nftCreados: [...state.nftCreados, action.payload],
        loading: false,
        error: false,
      };
    case "CREATE_ACOUNT_SUCCESS":
      console.log(
        "ESTO ES LO QUE ME LLEGA DE PAYLOAD DE LA CREACION DEL USUARIO",
        action.payload
      );
      return {
        ...state,
        user: [action.payload, ...state.user],
        userRegister: true,
        loading: false,
        error: false,
      };
    case "CREATE_NFT":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CREATE_ACOUNT":
      return {
        ...state,
        loading: true,
        error: false,
      };
    case "CREATE_NFT_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "CREATE_ACOUNT_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };
    case "RES_STATE":
      return {
        ...state,
        detail: [],
      };
    case "ADD_TO_CART":
      console.log(action.payload);
      return {
        ...state,
        cartProducts: action.payload,
      };

    case "REMOVE_ONE_FROM_CART":
      return {
        ...state,
        cartProducts: state.cartProducts.filter((e) => e !== action.payload),
      };
    case "CLEAN_CART":
      return {
        ...state,
        cartProducts: [],
      };
    case "CONTADOR":
      return {
        ...state,
        contador: action.payload,
      };
    case "LOGIN_SUCCESS":
      const profile = action.payload.config.data;
      if (profile) {
        localStorage.setItem("profiles", JSON.stringify(profile));
      }
      console.log("ACTION PAYLOAD DE SUCCESS", profile);
      return {
        ...state,
        userIsAuthenticated: true,
        error: false,
        userData: profile,
      };
    case "LOGIN_DATA":
      return {
        ...state,
        userData: action.payload,
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        error: true,
      };

    case "ADD_FAVORITE":
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorite: state.favorite.filter((e) => e !== action.payload),
      };

    case "GET_PROFILE":
      return {
        ...state,
        profile: [action.payload],
      };
    case "GET_PROFILE_GOOGLE":
      return {
        ...state,
        profileGoogle: action.payload,
      };

    case "UPDATED_PROFILE_BY_ID":
      return {
        ...state,
        profile: action.payload,
      };

    case "REGISTER_USER_REQUEST": {
      return {
        ...state,
        useGoogle: {},
        userInfo: {},
        error: false,
        loading: true,
        userIsAuthenticated: true,
      };
    }
    case "REGISTER_USER_SUCCESS": {
      const profileGoogle = action.payload;
      console.log("ESTE ES EL REGISTER_USER_SUCCES", profileGoogle);
      if (profileGoogle) {
        localStorage.setItem("profileGoogle", JSON.stringify(profileGoogle));
      }
      return {
        ...state,
        useGoogle: profileGoogle,
        userInfo: profileGoogle,
        loading: false,
        error: false,
      };
    }
    case "REGISTER_USER_ERROR": {
      return {
        ...state,
        useGoogle: {},
        loading: false,
        error: true,
      };
    }
    case "USER_LOGIN_SUCCESS": {
      return {
        ...state,
        useGoogle: {},
        userInfo: action.payload,
        loading: false,
        error: false,
        // userIsAuthenticated: true,
        isAuth: true,
      };
    }
    case "SINGOUT_OK": {
      return {
        ...state,
        userIsAuthenticated: false,
      };
    }

    case "GET_USERS_DASHBOARD":
      return {
        ...state,
        usersDashboard: action.payload,
        // usersDashboard: [...state.usersDashboard],
        // userDashboard: [...state.userDashboard],
      };
      // case "SUSPEND_OR_UNSUSPEND_ACCOUNT":
      //   return {
      //     ...state,
      //     stateforsuspendedaccounts???: action.payload,
         
      //   };





    case "PUBLISH_MARKET":
      return {
        ...state,
        market: [action.payload, ...state.market],
      };

    // case "CHANGE_USER_TO_ADMIN":
    //   return {
    //     ...state,
    //     stateCUANDOcambiasDErol???
    //   }
    //   case "CHANGE_ADMIN_TO_USER":
    //   return {
    //     ...state,
    //     stateCUANDOcambiasDErol???
    //   }

    default:
      return state;
  }
}

// case "ORDER_BY_NAME":
//   if (action.payload === "desc") {
//     return {
//       ...state,
//       cards: [...state.cards].sort((a, b) =>
//         a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1
//       ),
//     };
//   } else {
//     return {
//       ...state,
//       cards: [...state.cards].sort((a, b) =>
//         a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
//       ),
//     };
//   };

// case "ORDER_BY_PRICE":
//   if (action.payload === "low") {
//     return {
//       ...state,
//       cards: [...state.cards].sort((a, b) => {
//         if (a.price > b.price) return 1;
//         if (a.price < b.price) return -1;
//         else return 0;
//       }),
//     };
//   } else {
//     return {
//       ...state,
//       cards: [...state.cards].sort((a, b) => {
//         if (a.price < b.price) return 1;
//         if (a.price > b.price) return -1;
//         else return 0;
//       }),
//     };
//   };
// case "GET_NFT_ALL2":
//   console.log("ESTA EN EL REDUCER 2", action.payload)
//   return{
//     ...state,
//     allCards:[...state.allCards,...action.payload],
//     cards:[...state.cards,...action.payload]
//   };
//   case "3":
//     console.log("ESTA EN EL REDUCER 2", action.payload)
//     return{
//       ...state,
//       allCards:[...state.allCards,...action.payload],
//       cards:[...state.cards,...action.payload]
//     };
