import "./App.css";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Config from "./pages/config/Config";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/config" element={<Config />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
