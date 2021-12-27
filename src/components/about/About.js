import React, { useContext, useEffect, useState } from "react";
import GameContext from "../../context/gameContext";
import LangContext from "../../context/langContext";
import "./About.css";
const About = () => {
  const { texts, language } = useContext(LangContext);
  const { game } = useContext(GameContext);

  const spanish = (
    <p>
      Este proyecto es "Open Source", no se distribuye con fines de lucro.
      <br />
      Si de alguna manera incumple las normas de riot sera descontinuado
      automáticamente. <br /> <br />
    </p>
  );

  const english = (
    <p>
      This proyect is "Open Source", it is not distributed for profit.
      <br />
      If it violates the riot rules in any way, it will be automatically
      discontinued. <br /> <br />
    </p>
  );

  const [content, setContent] = useState(spanish);

  useEffect(() => {
    if (language === "es") {
      setContent(spanish);
    } else if (language === "en") {
      setContent(english);
    }
  }, [language]);

  return (
    <div>
      <header className="headers">
        <h1 className={`title ${game}`}>{texts.about}</h1>
        <h2>{texts.disclamer}</h2>
      </header>
      <section className="disclamer">{content}</section>
    </div>
  );
};

export default About;
