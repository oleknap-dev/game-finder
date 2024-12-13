import { useSearchParams } from "react-router-dom";
import GameList from "../components/GameList/GameList";

function Games() {
  const [searchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <GameList genre={genre} />
    </div>
  );
}

export default Games;
