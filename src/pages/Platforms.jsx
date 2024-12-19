import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "316b02e4cb72464d92ea018d43c541a0";
const url = `https://api.rawg.io/api/platforms?key=${API_KEY}`;

function Platforms() {
  const [platforms, setPlatforms] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const respone = await fetch(url);
        const data = await respone.json();
        setPlatforms(data.results);
      } catch (error) {
        console.error("Error fetching platforms", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!platforms.length) return <p>No platforms found</p>;

  const handlePlatformClick = (platform) => {
    navigate(`/games?platform=${platform}`);
  };

  return (
    <div>
      <ul>
        {platforms.map((platform) => (
          <li key={platform.id}>
            <button onClick={() => handlePlatformClick(platform.id)}>
              {platform.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Platforms;
