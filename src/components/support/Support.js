import React, { useContext } from "react";
import GameContext from "../../context/gameContext";
import "./Support.css";

const { ipcRenderer } = window.require("electron");

const Support = () => {
  const { game } = useContext(GameContext);

  const paypal = () => {
    ipcRenderer.send("paypal");
  };

  const card = ()=>{
    ipcRenderer.send("card");

  }
  return (
    <div>
      <header className="headers">
        <h1 className={`title ${game}`}>Donar</h1>
        <h2>Apoya el proyecto</h2>
      </header>
      <section className="support">
        <ul className="supportUl">
          <li className={`supportButton ${game}`} onClick={card}>Card</li>
          <li className={`supportButton ${game}`} onClick={paypal}>
            Paypal
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Support;
