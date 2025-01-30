import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <div className="flex flex-row relative overflow-hidden rounded-md">
      <img className="w-[768px] aspect-video opacity-75" src={image} />
      <button
        className="absolute top-1/2 -translate-y-1/2 left-1 w-12 h-12 pl-[3px]
        rounded-full  bg-slate-300 bg-opacity-25 hover:bg-opacity-20 active:bg-opacity-25"
        onClick={prevImage}
      >
        <ChevronLeft size={40} />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 right-1 w-12 h-12 pl-[6px]
        rounded-full  bg-slate-300 bg-opacity-25 hover:bg-opacity-20 active:bg-opacity-25"
        onClick={nextImage}
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}

export default ImageSlider;
