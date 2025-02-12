import React from 'react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css' // Ensure CoreUI styles are imported

export const Carousel = () => {
  return (
    <div className="w-screen h-screen"> {/* Makes carousel cover the full screen */}
      <CCarousel controls  indicators  interval={3000} pause={false} dark>
        <CCarouselItem>
          <CImage 
            className="w-full h-screen object-cover" 
            src="maz.jpg" 
            alt="slide 1" 
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage 
            className="w-full h-screen object-cover" 
            src="library.jpg"  
            alt="slide 2"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage 
            className="w-full h-screen object-cover" 
            src="office.jpg"  
            alt="slide 3"
          />
        </CCarouselItem>
      </CCarousel>
    </div>
  )
}
