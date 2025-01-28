import { useSearchParams } from "react-router-dom";
import GameList from "../components/GameList/GameList";

function Games() {
  const [searchParams] = useSearchParams();
  const platform = searchParams.get("platform");
  const genre = searchParams.get("genre");

  return (
    <div>
      <GameList platform={platform} genre={genre} />
    </div>
  );
}

export default Games;
