import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center content-center">
      <div className="bg-green-600 relative my-5 rounded-3xl flex items-center justify-between px-6 w-4/5">
        <div className="py-4 z-10 font-extrabold text-xl text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <Link to="/">Game Browser</Link>
        </div>
        <ul className="absolute inset-0 text-black flex flex-row m-0 space-x-8 justify-center items-center py-4 font-medium text-lg">
          <li>
            <Link to="/genres">Genres</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/platforms">Platforms</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
