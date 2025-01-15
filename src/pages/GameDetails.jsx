import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReadMore from "../components/ReadMore/ReadMore";

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
        setGamePlatforms(data.platforms);
        console.log(data.platforms);
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
    <div className="flex flex-col text-white items-center">
      <h1 className="text-5xl font-extrabold">{gameDetails.name}</h1>
      <div className="my-16">
        <ul>
          {gameScreenShots.map((screenShot) => (
            <li key={screenShot.id}>
              <img src={screenShot.image} width={192} height={108}></img>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/3">
        <h2 className="text-xl font-bold mb-4">About</h2>
        <div
          className="font-sm [&>p]:mb-4"
          dangerouslySetInnerHTML={{ __html: gameDetails.description }}
        ></div>
      </div>
      <div className="w-1/3 mt-4">
        <h2 className="text-xl font-bold mb-4">Requirements :</h2>
        <ul>
          {gamePlatforms.map((object) => {
            if (object.platform.slug === "pc") {
              return (
                <li>
                  <ReadMore
                    text={
                      object.requirements.minimum +
                      "\n\n" +
                      object.requirements.recommended
                    }
                  />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default GameDetails;
