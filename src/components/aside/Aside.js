import React, { useContext } from "react";
import GameContext from "../../context/gameContext";
import LangContext from "../../context/langContext";
import "./Aside.css";
const Aside = ({switcher}) => {
  const {texts} = useContext(LangContext)
  const { game } = useContext(GameContext);

  return (
    <aside className={`aside ${game}`}>
      <ul>
        <li onClick={()=>{switcher('settings')}}>{texts.config}</li>
        <li onClick={()=>{switcher('support')}}>{texts.support}</li>
        <li onClick={()=>{switcher('social')}}>{texts.social}</li>
        <li onClick={()=>{switcher('about')}}>{texts.about}</li>
      </ul>
    </aside>
  );
};

export default Aside;
