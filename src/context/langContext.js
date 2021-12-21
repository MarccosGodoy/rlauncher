import { createContext, useEffect, useState } from "react";

const LangContext = createContext();

const translations = {
  es: {},
  en: {},
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
