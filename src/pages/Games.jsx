import { useSearchParams } from "react-router-dom";
import GameList from "../components/GameList/GameList";

function Games() {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");
  const platform = searchParams.get("platform");

  return (
    <div>
      <GameList genre={genre} platform={platform} />
    </div>
  );
}

export default Games;
