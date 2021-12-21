import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Home.css";
import lolBackground from "../../assets/lolbackground.png";
import valBackground from "../../assets/valBackground.png";
import lorBackground from "../../assets/lorBackground.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import GameContext from "../../context/gameContext";

const { ipcRenderer } = window.require("electron");

const Home = () => {
  const { game, path, handlePath } = useContext(GameContext);
  const [img, setImg] = useState(lolBackground);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    changeImg();
  }, [game]);

  async function getData() {
    //Para recibir datos desde el ipc renderer se utiliza el invoke
    const response = await ipcRenderer.invoke("getData", "valorEnviado");
    const data = response.database;
    console.log(data);
    console.log(data.lang);
    console.log(data.path);
    handlePath(data.path);
  }

  function changeImg() {
    switch (game) {
      case "lol":
        setImg(lolBackground);
        break;
      case "val":
        setImg(valBackground);
        break;
      case "lor":
        setImg(lorBackground);
        break;
      default:
        setImg(lolBackground);
        break;
    }
  }

  const league = {
    path,
    options: ["--launch-product=league_of_legends", "--launch-patchline=live"],
  };
  const valo = {
    path,
    options: ["--launch-product=valorant", "--launch-patchline=live"],
  };
  const legends = {
    path,
    options: ["--launch-product=bacon", "--launch-patchline=live"],
  };

  const openGame = () => {
    switch (game) {
      case "lol":
        ipcRenderer.send("openGame", league);
        break;
      case "val":
        ipcRenderer.send("openGame", valo);

        break;
      case "lor":
        ipcRenderer.send("openGame", legends);
        break;
      default:
        ipcRenderer.send("openGame", league);
        break;
    }
  };

  return (
    <div className="home">
      <Navbar />
      <main>
        <img src={img} alt="background img" />
      </main>
      <footer>
        <ul className={`play ${game}`} onClick={openGame}>
          <li>
            <FontAwesomeIcon icon={faPlayCircle} />
          </li>
          <li>Jugar</li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
