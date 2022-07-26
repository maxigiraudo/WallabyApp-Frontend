import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import axios from "axios";

import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { MoralisProvider } from "react-moralis";

axios.defaults.baseURL = process.env.REACT_APP || "http://localhost:4000";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MoralisProvider
          serverUrl="https://hzgmh0bhktiz.usemoralis.com:2053/server"
          appId="TvlbElMKEQ3ozadXOqUAthnvVYSIKgNIIrllWHBi"
        >
          <App />
        </MoralisProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
