import { useNavigate } from "react-router-dom";

function GameCard({ gameName, gameImage, gameId }) {
  const navigate = useNavigate();

  const handleGameClick = (gameId) => {
    navigate(`/games/${gameId}`);
  };

  return (
    <div>
      <button onClick={() => handleGameClick(gameId)}>
        <p>{gameName}</p>
        <img src={gameImage} width={300} height={150}></img>
      </button>
    </div>
  );
}

export default GameCard;
