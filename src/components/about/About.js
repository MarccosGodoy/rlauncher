import React, { useContext } from "react";
import GameContext from "../../context/gameContext";
import "./About.css";
const About = () => {
  const { game } = useContext(GameContext);
  return (
    <div>
      <header className="headers">
        <h1 className={`title ${game}`}>About</h1>
        <h2>Disclamer</h2>
      </header>
      <section className="disclamer">
        <p>
          Este proyecto es "Open Source", no se distribuye con fines de lucro.{" "}
          <br />
          Si de alguna manera incumple las normas de riot sera descontinuado
          automáticamente. <br /> <br />
        </p>
      </section>
    </div>
  );
};

export default About;
