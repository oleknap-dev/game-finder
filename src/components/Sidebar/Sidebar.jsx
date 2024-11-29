import CategoryTile from "./CategoryTile";
import { useEffect, useState } from "react";

const API_KEY = "316b02e4cb72464d92ea018d43c541a0";
const url = `https://api.rawg.io/api/genres?key=${API_KEY}&page_size=40`;

function Sidebar() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const respone = await fetch(url);
        const data = await respone.json();
        setGenres(data.results);
      } catch (error) {
        console.error("Error while fething genres:", error);
      }
    }
    fetchGenres();
  }, []);

  return (
    <div>
      <h1>Genres:</h1>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <CategoryTile category={genre.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
