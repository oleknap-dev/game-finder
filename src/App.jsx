import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Genres from "./pages/Genres";
import Tags from "./pages/Tags";
import Platforms from "./pages/Platforms";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/platforms" element={<Platforms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
