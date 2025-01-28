import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard/CategoryCard";

const API_KEY = "316b02e4cb72464d92ea018d43c541a0";
const url = `https://api.rawg.io/api/genres?key=${API_KEY}`;

function Genres() {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setGenres(data.results);
      } catch (error) {
        console.error("Error fetching genres", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!genres.length) return <p>No genres found</p>;

  const handleGenreClick = (genre) => {
    navigate(`/games?genre=${genre}`);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-start">
        <h1 className="text-gray-200 font-extrabold text-7xl mb-8">Genres</h1>
        <div className="text-white flex justify-center">
          <ul className="grid grid-cols-3 gap-4">
            {genres.map((genre) => (
              <li key={genre.id}>
                <CategoryCard
                  categoryId={genre.id}
                  categoryName={genre.name}
                  categoryImage={genre.image_background}
                  navigate={() => handleGenreClick(genre.slug)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Genres;
