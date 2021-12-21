import { createContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [game, setGame] = useState("lol");
  const [path, setPath] = useState("");

  const handleGame = (g) => {
    setGame(g);
  };

  const handlePath = (p) => {
    setPath(p);
  };

  const data = {
    game,
    handleGame,
    path,
    handlePath,
  };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export { GameProvider };
export default GameContext;
