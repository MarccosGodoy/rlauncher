import { createContext, useEffect, useState } from "react";

const LangContext = createContext();

const translations = {
  es: {
    play: "Jugar",
    config: "Configuracion",
    support: "Apoyar",
    social: "Social",
    about: "Acerca de",
    customLauncher: "Personalizar Launcher",
    donate: "Donar",
    supportProject: "Apoyar el proyecto",
    card: "Tarjeta",
    paypal:"Paypal",
    contact: "Contactarme",
    disclamer: "Disclamer"

  },
  en: {
    play: "Play",
    config: "Config",
    support: "Support",
    social: "Social",
    about: "About",
    customLauncher: "Customize Launcher",
    donate: "Donate",
    supportProject: "Support the project",
    card: "Card",
    paypal:"Paypal",
    contact: "Contact Me",
    disclamer: "Disclamer"
  },
};

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");
  const [texts, setTexts] = useState(translations[language]);

  useEffect(() => {
    setTexts(translations[language]);
  }, [language]);

  const handleLanguage = (l) => {
    setLanguage(l);
  };

  const data = {
    texts,
    language,
    handleLanguage,
  };

  return <LangContext.Provider value={data}>{children}</LangContext.Provider>;
};

export { LangProvider };
export default LangContext;
