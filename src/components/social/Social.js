import React, { useContext } from "react";
import GameContext from "../../context/gameContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Social.css";

const { ipcRenderer } = window.require("electron");

const Social = () => {
  const { game } = useContext(GameContext);

  const youtube = () => {
    ipcRenderer.send("youtube");
  };
  const discord = () => {
    ipcRenderer.send("discord");
  };
  const linkedin = () => {
    ipcRenderer.send("linkedin");
  };

  return (
    <div>
      <header className="headers">
        <h1 className={`title ${game}`}>Social</h1>
        <h1>Contact Me</h1>
      </header>
      <section className="social">
        <ul className="socialUl">
          <li className={`socialContact ${game}`} onClick={youtube}>
            <FontAwesomeIcon icon={faYoutube} />
          </li>
          <li className={`socialContact ${game}`}>
            <a href="mailto:maarcos29@gmail.com">
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </a>
          </li>
          <li className={`socialContact ${game}`} onClick={linkedin}>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li className={`socialContact ${game}`} onClick={discord}>
            <FontAwesomeIcon icon={faDiscord} />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Social;
