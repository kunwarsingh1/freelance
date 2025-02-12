// import React from 'react'
// import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
// import '@coreui/coreui/dist/css/coreui.min.css' // Ensure CoreUI styles are imported

// export const Carousel = () => {
//   return (
//     <div className="w-screen h-screen"> {/* Makes carousel cover the full screen */}
//       <CCarousel controls  indicators  interval={3000} pause={false} dark>
//         <CCarouselItem>
//           <CImage 
//             className="w-full h-screen object-cover" 
//             src="maz.jpg" 
//             alt="slide 1" 
//           />
//         </CCarouselItem>
//         <CCarouselItem>
//           <CImage 
//             className="w-full h-screen object-cover" 
//             src="library.jpg"  
//             alt="slide 2"
//           />
//         </CCarouselItem>
//         <CCarouselItem>
//           <CImage 
//             className="w-full h-screen object-cover" 
//             src="office.jpg"  
//             alt="slide 3"
//           />
//         </CCarouselItem>
//       </CCarousel>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

interface CarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const TestimonialCarousel: React.FC<CarouselProps> = ({
  testimonials,
  autoPlay = false,
  autoPlayInterval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative w-full h-90 bg-[#4A5D23]/5  mx-auto px-4 py-16 rounded-xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#DCD7C9]/30 opacity-75 blur-lg transform rotate-45"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#A27B5C]/20 opacity-75 blur-lg transform -rotate-45"></div>

      <div className="relative bg-[#F9F5EB] rounded-lg shadow-xl  p-8 mx-auto w-full h-full border border-[#4A5D23]/10">
        <h2 className="text-3xl font-bold text-center mb-12  text-[#4A5D23]">
          Our Client Testimonials
        </h2>

        <div className="relative px-8 overflow-hidden">
          <div 
            className={`transform transition-all duration-500 ease-in-out ${
              isAnimating 
                ? direction === 'right' 
                  ? '-translate-x-full opacity-0' 
                  : 'translate-x-full opacity-0'
                : 'translate-x-0 opacity-100'
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#A27B5C]/20 transform transition-transform duration-500 hover:scale-105">
                <img
                  src={testimonials[currentIndex].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-[#4A5D23]">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-[#3C3C3C] italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 'right' : 'left');
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 ease-in-out ${
                  index === currentIndex 
                    ? 'w-6 h-2 bg-[#4A5D23]' 
                    : 'w-2 h-2 bg-[#4A5D23]/30'
                } rounded-full hover:bg-[#4A5D23]/50`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F9F5EB] shadow-lg flex items-center justify-center hover:bg-[#DCD7C9] transition-all duration-300 border border-[#A27B5C]/20 transform hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-[#4A5D23]" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#F9F5EB] shadow-lg flex items-center justify-center hover:bg-[#DCD7C9] transition-all duration-300 border border-[#A27B5C]/20 transform hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-[#4A5D23]" />
          </button>
        </div>
      </div>
    </div>
  );
};