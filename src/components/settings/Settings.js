import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../context/gameContext";
import "./Settings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const { ipcRenderer } = window.require("electron");

const Settings = () => {
  const [lang, setLang] = useState("es");
  const { game, path, handlePath } = useContext(GameContext);
  const [pathing, setPathing] = useState(path);

  useEffect(() => {
    saveLang()
  }, [lang]);

  const changePath = (e) => {
    setPathing(e.target.value);
  };

  const savePath = (e) => {
    e.preventDefault();
    handlePath(pathing);
    let data = ["path", pathing];
    ipcRenderer.send("writeData", data);
  };

  const saveLang = () => {
    let data = ["lang", lang];
    ipcRenderer.send("writeData", data);
  };

  return (
    <div>
      <header className="headers">
        <h1 className={`title ${game}`}>Config</h1>
        <h2>Customize Launcher</h2>
      </header>

      <section className="gamesPath">
        <form onSubmit={savePath}>
          <label htmlFor="lol" className={`gameLabel ${game}`}>
            Lol
          </label>
          <input type="text" id="lol" value={pathing} onChange={changePath} />
          <button type="submit" className={`gameButton ${game}`}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </form>
        <form onSubmit={savePath}>
          <label htmlFor="val" className={`gameLabel ${game}`}>
            Val{" "}
          </label>
          <input type="text" id="val" value={pathing} onChange={changePath} />
          <button type="submit" className={`gameButton ${game}`}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </form>
        <form onSubmit={savePath}>
          <label htmlFor="lor" className={`gameLabel ${game}`}>
            Lor
          </label>
          <input type="text" id="lor" value={pathing} onChange={changePath} />
          <button type="submit" className={`gameButton ${game}`}>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </form>
      </section>

      <section className="language">
        <article
          onChange={() => setLang("es")}
          className={`langSwitcher ${game}`}
        >
          <label htmlFor="es">ES</label>
          <input type="radio" name="lang" id="es" />
        </article>
        <article
          onChange={() => setLang("en")}
          className={`langSwitcher ${game}`}
        >
          <label htmlFor="en">EN</label>
          <input type="radio" name="lang" id="em" />
        </article>
      </section>
    </div>
  );
};

export default Settings;
