import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WrapperFont } from "./styles/styled.ts";
import Lato from "./font/Lato-Thin.ttf";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WrapperFont>
      <App />
    </WrapperFont>
  </React.StrictMode>
);
