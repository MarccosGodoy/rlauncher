import React, { useContext } from "react";
import GameContext from "../../context/gameContext";
import "./Aside.css";
const Aside = ({switcher}) => {
  const { game } = useContext(GameContext);
  return (
    <aside className={`aside ${game}`}>
      <ul>
        <li onClick={()=>{switcher('settings')}}>Config</li>
        <li onClick={()=>{switcher('support')}}>Support</li>
        <li onClick={()=>{switcher('social')}}>Social</li>
        <li onClick={()=>{switcher('about')}}>About</li>
      </ul>
    </aside>
  );
};

export default Aside;
