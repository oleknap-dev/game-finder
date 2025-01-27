import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "316b02e4cb72464d92ea018d43c541a0";
const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

function Genres() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGenres(data.results);
      } catch (error) {
        console.error("Error fetching genres", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!genres.length) return <p>No genres found</p>;

  const handleGenreClick = (genre) => {
    navigate(`/games?genre=${genre}`);
  };

  return (
    <div className="text-white">
      <h2>Genres:</h2>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>
            <button onClick={() => handleGenreClick(genre.slug)}>
              {genre.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Genres;
