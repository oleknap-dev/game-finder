import { Link } from "react-router";

function Navbar() {
  return (
    <div>
      <ul>
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
  );
}

export default Navbar;
