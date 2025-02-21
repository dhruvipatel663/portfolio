"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type SliderDataType = {
  slide: Slide[];
};
type Slide = {
  title: string;
  description: string;
  image: string;
};

export default function Carousel({
  sliderData,
  autoSlide = false,
  autoSlideInterval = 3000,
}: {
  sliderData: SliderDataType;
  autoSlide?: boolean;
  autoSlideInterval?: number;
}) {
  const [curr, setCurr] = useState(0);

  const prev = useCallback(
    () =>
      setCurr((curr) => (curr === 0 ? sliderData.slide.length - 1 : curr - 1)),
    [sliderData.slide.length]
  );

  const next = useCallback(
    () =>
      setCurr((curr) => (curr === sliderData.slide.length - 1 ? 0 : curr + 1)),
    [sliderData.slide.length]
  );

  const handleDotClick = (current: number) => {
    if (current >= sliderData.slide.length) {
      setCurr(0);
    } else {
      setCurr(current);
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);
  return (
    <div className="min-w-full">
      <div className="flex justify-center">
        <h2 className="text-4xl font-black">Work History</h2>
      </div>
      <div className="overflow-hidden relative mt-10 mb-10">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {sliderData.slide.map((s: Slide, index: number) => {
            return (
              <div
                key={index}
                className="min-w-full slider-container md:px-30 md:py-300 px-20 pt-100 pb-200"
              >
                <h2 className="text-sm/9">{s.title}</h2>
                <p>{s.description}</p>
              </div>
            );
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>

        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {sliderData.slide.map((_: Slide, i: number) => (
              <div
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50 cursor-pointer"}
            `}
                key={i}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
