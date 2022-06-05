import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);