import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { LangProvider } from "./context/langContext";
import { GameProvider } from "./context/gameContext";

ReactDOM.render(
  <LangProvider>
    <GameProvider>
      <App />
    </GameProvider>
  </LangProvider>,

  document.getElementById("root")
);
