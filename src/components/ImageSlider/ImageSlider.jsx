import { useState } from "react";

function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  let image = images[currentIndex].image;
  const max = images.length - 1;
  const min = 0;

  const nextImage = () =>
    setCurrentIndex((prev) => (prev !== max ? prev + 1 : min));

  const prevImage = () =>
    setCurrentIndex((prev) => (prev !== min ? prev - 1 : max));

  return (
    <div className="flex flex-row">
      <button onClick={prevImage}>previous</button>
      <img src={image} />
      <button onClick={nextImage}>next</button>
    </div>
  );
}

export default ImageSlider;
