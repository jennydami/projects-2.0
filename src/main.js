
import React from "react";
import { createRoot } from "react-dom/client"; 
import App from "../App.jsx";
import "../App.css";
import "./style.css";

createRoot(document.getElementById("app")).render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App)
  )
);
