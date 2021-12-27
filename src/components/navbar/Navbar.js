import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import lol from "../../assets/lol.png";
import lor from "../../assets/lor.png";
import val from "../../assets/val.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faTimes,
  faWindowMinimize,
} from "@fortawesome/free-solid-svg-icons";
import GameContext from "../../context/gameContext";
import LangContext from "../../context/langContext";

const { ipcRenderer } = window.require("electron");

const Navbar = () => {
  const { texts } = useContext(LangContext);
  const { handleGame, game } = useContext(GameContext);

  const handleClose = () => {
    ipcRenderer.send("close");
  };

  const handleMinimize = () => {
    ipcRenderer.send("minimize");
  };

  return (
    <nav className={`nav ${game}`}>
      <ul className="gamesUl">
        <li
          onClick={() => {
            handleGame("lol");
          }}
          className={game === "lol" ? "lol active" : "lol"}
        >
          <Link to="/">
            <abbr title="League of Legends">
              <img src={lol} alt="" />
            </abbr>
          </Link>
        </li>
        <li
          onClick={() => {
            handleGame("val");
          }}
          className={game === "val" ? "val active" : "val"}
        >
          <Link to="/">
            <abbr title="Valorant">
              <img src={val} alt="" />
            </abbr>
          </Link>
        </li>
        <li
          onClick={() => {
            handleGame("lor");
          }}
          className={game === "lor" ? "lor active" : "lor"}
        >
          <Link to="/">
            <abbr title="Legends of Runeterra">
              <img src={lor} alt="" />
            </abbr>
          </Link>
        </li>
      </ul>
      <div className="drag"></div>
      <ul className="actions">
        <li>
          <Link to="/config">
            <abbr title={texts.config}><FontAwesomeIcon icon={faCog} /></abbr>
          </Link>
        </li>
        <li onClick={handleMinimize}>
          <FontAwesomeIcon icon={faWindowMinimize} />
        </li>
        <li onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
