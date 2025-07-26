import React, { useEffect, useRef, useState } from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
// import img7 from '../images/img7.jpg';
// import img8 from '../images/img8.jpg';
// import img9 from '../images/img9.jpg';
// import img10 from '../images/img10.jpg';
// import img11 from '../images/img11.jpg';
// import img12 from '../images/img12.jpg';
// import img13 from '../images/img13.jpg';
// import img14 from '../images/img14.jpg';
// import img15 from '../images/img15.jpg';
// import img16 from '../images/img16.jpg';

function Anim() {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const images = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          if (isMobile) {
            return (prevIndex + 1) % images.length;
          } else {
            const nextIndex = prevIndex + 2;
            return nextIndex >= images.length ? 0 : nextIndex;
          }
        });
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, images.length, isMobile]);

  const handleUserInteraction = (callback) => {
    setIsAutoPlaying(false);
    callback();
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  const nextImage = () => {
    handleUserInteraction(() => {
      setCurrentIndex((prevIndex) => {
        if (isMobile) {
          return (prevIndex + 1) % images.length;
        } else {
          const nextIndex = prevIndex + 2;
          return nextIndex >= images.length ? 0 : nextIndex;
        }
      });
    });
  };

  const prevImage = () => {
    handleUserInteraction(() => {
      setCurrentIndex((prevIndex) => {
        if (isMobile) {
          return (prevIndex - 1 + images.length) % images.length;
        } else {
          const prevIdx = prevIndex - 2;
          return prevIdx < 0 ? Math.max(0, Math.floor((images.length - 1) / 2) * 2) : prevIdx;
        }
      });
    });
  };

  const goToImage = (index) => {
    handleUserInteraction(() => {
      if (isMobile) {
        setCurrentIndex(index);
      } else {
        setCurrentIndex(Math.floor(index / 2) * 2);
      }
    });
  };

  return (
    <div className="relative w-full my-10">
      <div className="relative w-full h-64 sm:h-96 overflow-hidden rounded-lg">
        <div 
          ref={containerRef}
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ 
            transform: isMobile 
              ? `translateX(-${currentIndex * 100}%)` 
              : `translateX(-${Math.floor(currentIndex / 2) * 100}%)`
          }}
        >
          {isMobile ? (
            images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0 rounded-lg"
              />
            ))
          ) : (
            Array.from({ length: Math.ceil(images.length / 2) }, (_, groupIndex) => (
              <div key={groupIndex} className="w-full h-full flex flex-shrink-0 gap-8 px-10">
                {images.slice(groupIndex * 2, groupIndex * 2 + 2).map((image, index) => (
                  <img
                    key={groupIndex * 2 + index}
                    src={image}
                    alt={`Slide ${groupIndex * 2 + index + 1}`}
                    className="w-1/2 h-full object-cover rounded-lg"
                  />
                ))}
                {images.slice(groupIndex * 2, groupIndex * 2 + 2).length === 1 && (
                  <div className="w-1/2 h-full bg-muted flex items-center justify-center rounded-lg">
                    <span className="text-tertiary">No more images</span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <button 
          onClick={prevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-tertiary bg-opacity-50 text-surface p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-tertiary bg-opacity-50 text-surface p-3 rounded-full hover:bg-opacity-75 transition-all duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center space-x-3 mt-6">
        {images.map((_, index) => {
          let isActive = false;
          
          if (isMobile) {
            isActive = index === currentIndex;
          } else {
            const currentPairStart = Math.floor(currentIndex / 2) * 2;
            const currentPairEnd = Math.min(currentPairStart + 1, images.length - 1);
            isActive = index >= currentPairStart && index <= currentPairEnd;
          }
          
          return (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-primary-light border-[.5px] border-tertiary scale-125' 
                  : 'bg-muted hover:border-[.5px] hover:border-tertiary'
              }`}
            />
          );
        })}
      </div>

      <div className="text-center mt-4">
        <span className="text-tertiary text-sm">
          {isMobile ? (
            `${currentIndex + 1} / ${images.length}`
          ) : (
            `${Math.floor(currentIndex / 2) * 2 + 1}-${Math.min(Math.floor(currentIndex / 2) * 2 + 2, images.length)} / ${images.length}`
          )}
        </span>
      </div>
    </div>
  );
}

export default Anim;
