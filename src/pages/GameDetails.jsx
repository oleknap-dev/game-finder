import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function GameDetails() {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState();
  const [gameScreenShots, setGameScreenShots] = useState();
  const [gamePlatforms, setGamePlatforms] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = "316b02e4cb72464d92ea018d43c541a0";
  const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`;
  const screenShotsUrl = `https://api.rawg.io/api/games/${id}/screenshots?key=${API_KEY}`;

  useEffect(() => {
    async function fetchGameDetails() {
      try {
        const respone = await fetch(url);
        const data = await respone.json();
        setGameDetails(data);
        console.log(data.platforms);
        setGamePlatforms(data.platforms);
        const repsone2 = await fetch(screenShotsUrl);
        const data2 = await repsone2.json();
        setGameScreenShots(data2.results);
      } catch (error) {
        console.error(error, "error fetching gameDetails");
      } finally {
        setIsLoading(false);
      }
    }
    fetchGameDetails();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!gameDetails) return <p>Game Details not avaiable</p>;

  return (
    <div className="text-white">
      <h1>{gameDetails.name}</h1>
      <h3>About</h3>
      <div dangerouslySetInnerHTML={{ __html: gameDetails.description }}></div>
      <ul>
        {gameScreenShots.map((screenShot) => (
          <li key={screenShot.id}>
            <img src={screenShot.image} width={192} height={108}></img>
          </li>
        ))}
      </ul>
      <ul>
        {gamePlatforms.map((object) => (
          <li>{console.log(object.requirements.minimum)}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameDetails;
