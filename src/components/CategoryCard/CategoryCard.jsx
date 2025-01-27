function CategoryCard({ categoryName, categoryImage, categoryId }) {
  return (
    <div className="flex relative items-center justify-center w-96 h-64">
      <div
        className="w-96 h-64 bg-center bg-cover opacity-55 rounded-xl"
        style={{ backgroundImage: `url(${categoryImage})` }}
      ></div>
      <button className="w-48 h-16 bg-white absolute bg-opacity-25 text-base font-bold">
        {categoryName}
      </button>
    </div>
  );
}

export default CategoryCard;
