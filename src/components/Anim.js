import { useEffect, useRef, useState } from 'react';
import img2 from '../images/img2.jpg';
import img5 from '../images/img5.jpg';
import img18 from '../images/img18.jpeg';
import img50 from '../images/img50.jpeg';
import { IoIosArrowBack , IoIosArrowForward } from "react-icons/io";

function Anim() {
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const images = [img2, img5, img18, img50];

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
      <div className="relative w-full h-72 sm:h-96 overflow-hidden rounded-lg">
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
                className="w-full h-full object-cover object-top flex-shrink-0 rounded-lg"
              />
            ))
          ) : (
            Array.from({ length: Math.ceil(images.length / 2) }, (_, groupIndex) => (
              <div key={groupIndex} className="w-full h-full flex flex-shrink-0 gap-4 px-10">
                {images.slice(groupIndex * 2, groupIndex * 2 + 2).map((image, index) => (
                  <img
                    key={groupIndex * 2 + index}
                    src={image}
                    alt={`Slide ${groupIndex * 2 + index + 1}`}
                    className="w-1/2 h-full object-cover object-top rounded-xl border-2 border-primary"
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
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary border-l-2 border-b-2 border-tertiary text-tertiary px-0 py-2 ml-1 text-3xl rounded-md hover:bg-opacity-75 transition-all duration-300"
        >
          <IoIosArrowBack />
        </button>

        <button 
          onClick={nextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary border-r-2 border-b-2 border-tertiary text-tertiary px-0 py-2 mr-1 text-3xl rounded-md hover:bg-opacity-75 transition-all duration-300"
        >
          <IoIosArrowForward />
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
    </div>
  );
}

export default Anim;
