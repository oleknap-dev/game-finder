import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "316b02e4cb72464d92ea018d43c541a0";

function GameList({ genre, platform }) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  let url = `https://api.rawg.io/api/games?key=${API_KEY}`;

  if (genre) {
    url = `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}`;
  } else if (platform) {
    url = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${platform}`;
  }

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGames(data.results);
      } catch (error) {
        console.log("Error fetching games: ", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchGames();
  }, [genre, platform]);

  if (isLoading) return <p>Loading...</p>;
  if (!games.length) return <p>No games found</p>;

  const handleGameClick = (gameSlug) => {
    navigate(`/games/${gameSlug}`);
  };

  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <button onClick={() => handleGameClick(game.slug)}>
              {game.name}
            </button>
            <img src={game.background_image} width={100} height={50} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameList;
