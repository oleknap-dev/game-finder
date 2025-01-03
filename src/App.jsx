import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Genres from "./pages/Genres";
import Tags from "./pages/Tags";
import Platforms from "./pages/Platforms";
import GameDetails from "./pages/GameDetails";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:game" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
