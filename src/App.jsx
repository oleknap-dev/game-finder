import { useState, useEffect } from "react";

const genre = "rpg";
const platform = 4; //pc

const API_KEY = "316b02e4cb72464d92ea018d43c541a0";
const url = `https://api.rawg.io/api/games?key=${API_KEY}&page_size=40`;

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      let allGames = [];
      let nextPage = url;
      let callCounter = 0;
      try {
        while (nextPage && callCounter < 2) {
          const respone = await fetch(nextPage);
          const data = await respone.json();
          console.log(data.next);
          allGames = allGames.concat(data.results);
          nextPage = data.next;
          console.log(data.results);
          callCounter++;
        }
        setGames(allGames);
      } catch (error) {
        console.log("Error fetching games: ", error);
      }
    }
    fetchGames();
  }, []);

  return (
    <div>
      <h1>Games:</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <h2>{game.name}</h2>
            <img src={game.background_image} width={400} height={200} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
