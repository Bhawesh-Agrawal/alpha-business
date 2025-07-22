'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
};

const ImageSlider: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollPrev = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    emblaApi?.scrollPrev();
  };

  const scrollNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event from bubbling up
    emblaApi?.scrollNext();
  };

  return (
    <div className="relative w-full h-full">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((imgSrc, index) => (
            <div className="relative flex-[0_0_100%] h-full" key={index}>
              <img
                className="w-full h-full object-contain"
                src={imgSrc}
                alt={`Product image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- CONDITIONAL UI: Only show controls if there is more than one slide --- */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full p-2 text-gray-800 bg-white/60 backdrop-blur-sm border border-white/20 shadow-md transition-all hover:bg-white/80 active:scale-95 z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-2 text-gray-800 bg-white/60 backdrop-blur-sm border border-white/20 shadow-md transition-all hover:bg-white/80 active:scale-95 z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;