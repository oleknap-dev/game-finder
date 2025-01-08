import { useNavigate } from "react-router-dom";

function GameCard({ gameName, gameImage, gameId }) {
  const navigate = useNavigate();

  const handleGameClick = (gameId) => {
    navigate(`/games/${gameId}`);
  };

  return (
    <div className="flex flex-col bg-gray-800 w-96 h-64 items-center rounded-xl">
      <div className="rounded-xl">
        <button onClick={() => handleGameClick(gameId)}>
          <img
            className="rounded-t-xl w-96 h-48 object-cover"
            src={gameImage}
          ></img>
        </button>
      </div>
      <div className="mt-3 font-bold text-white">
        <button onClick={() => handleGameClick(gameId)}>{gameName}</button>
      </div>
    </div>
  );
}

export default GameCard;
