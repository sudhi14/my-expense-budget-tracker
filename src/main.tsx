import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./global.scss";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={{ theme: "light" }}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
