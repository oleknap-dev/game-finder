function CategoryCard({ categoryName, categoryImage, categoryId, navigate }) {
  return (
    <div className="flex relative items-center justify-center w-80 h-48">
      <div
        className="w-80 h-48 bg-center bg-cover opacity-55 rounded-xl"
        style={{ backgroundImage: `url(${categoryImage})` }}
      ></div>
      <button
        className="w-40 h-14 bg-white absolute bg-opacity-25 text-base font-bold hover:bg-opacity-20 active:bg-opacity-25"
        onClick={navigate}
      >
        {categoryName}
      </button>
    </div>
  );
}

export default CategoryCard;
