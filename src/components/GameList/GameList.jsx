import { useState, useEffect } from "react";

const API_KEY = "316b02e4cb72464d92ea018d43c541a0";
const url = `https://api.rawg.io/api/games?key=${API_KEY}`;

function GameList({ genre }) {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGames() {
      try {
        const url = genre
          ? `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}`
          : `https://api.rawg.io/api/games?key=${API_KEY}`;
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
  }, [genre]);

  if (isLoading) return <p>Loading...</p>;
  if (!games.length) return <p>No games found</p>;

  return (
    <>
      <h1>Games:</h1>
      <h2>Genre: {genre}</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.background_image} width={100} height={50} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default GameList;
