import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function GameDetails() {
  const { game } = useParams();
  const [gameDetails, setGameDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "316b02e4cb72464d92ea018d43c541a0";
  const url = `https://api.rawg.io/api/games/${game}?key=${API_KEY}`;

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const respone = await fetch(url);
        const data = await respone.json();
        setGameDetails(data);
      } catch (error) {
        console.error(error, "error fetching gameDetails");
      } finally {
        setIsLoading(false);
      }
    }
    fetchGameDetails();
  }, []);
  console.log(gameDetails);

  if (isLoading) return <p>Loading...</p>;
  if (!gameDetails) return <p>Game Details not avaiable</p>;

  return (
    <div>
      <h1>Title: {gameDetails.name}</h1>
      <img src={gameDetails.background_image} width={200} height={100}></img>
      <img
        src={gameDetails.background_image_additional}
        width={200}
        height={100}
      ></img>
      <p>Description: {gameDetails.description_raw}</p>
    </div>
  );
}

export default GameDetails;
