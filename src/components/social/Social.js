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
import LangContext from "../../context/langContext";

const { ipcRenderer } = window.require("electron");

const Social = () => {
  const { texts } = useContext(LangContext);
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
        <h1 className={`title ${game}`}>{texts.social}</h1>
        <h2>{texts.contact}</h2>
      </header>
      <section className="social">
        <ul className="socialUl">
          <li className={`socialContact ${game}`} onClick={youtube}>
            <abbr title="Youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </abbr>
          </li>
          <li className={`socialContact ${game}`}>
            <a href="mailto:maarcos29@gmail.com">
              <abbr title="Gmail">
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </abbr>
            </a>
          </li>
          <li className={`socialContact ${game}`} onClick={linkedin}>
            <abbr title="Linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </abbr>
          </li>
          <li className={`socialContact ${game}`} onClick={discord}>
            <abbr title="Discord">
              <FontAwesomeIcon icon={faDiscord} />
            </abbr>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Social;
