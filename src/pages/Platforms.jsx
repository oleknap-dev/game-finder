import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard/CategoryCard";

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
    <div className="flex justify-center">
      <div className="flex flex-col items-start">
        <h1 className="text-gray-200 font-extrabold text-7xl mb-8">
          Platforms
        </h1>
        <div className="text-white flex justify-center">
          <ul className="grid grid-cols-3 gap-4">
            {platforms.map((platform) => (
              <li key={platform.id}>
                <CategoryCard
                  categoryId={platform.id}
                  categoryName={platform.name}
                  categoryImage={platform.image_background}
                  navigate={() => handlePlatformClick(platform.id)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Platforms;
