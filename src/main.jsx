import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { WrapperFont } from "./styles/styled.ts";
import Lato from "./font/Lato-Regular.ttf"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WrapperFont>
      <App />
    </WrapperFont>
  </React.StrictMode>
);
