import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center content-center">
      <div className="bg-green-400 text-gray-900 relative my-5 rounded-3xl flex items-center justify-between px-6 w-4/5">
        <div className="py-4 font-extrabold text-xl">
          <Link to="/">Game Finder</Link>
        </div>
        <ul className="absolute inset-0 flex flex-row m-0 space-x-8 justify-center items-center py-4 font-medium text-lg">
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
