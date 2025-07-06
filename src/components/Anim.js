import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import img7 from '../images/img7.jpg';
import img8 from '../images/img8.jpg';
import img9 from '../images/img9.jpg';
import img10 from '../images/img10.jpg';
import img11 from '../images/img11.jpg';
import img12 from '../images/img12.jpg';
import img13 from '../images/img13.jpg';
import img14 from '../images/img14.jpg';
import img15 from '../images/img15.jpg';
import img16 from '../images/img16.jpg';

function Anim() {
  const imagesRef = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img1, img2, img3, img4, img5]; // Add all your images here

  useEffect(() => {
    gsap.fromTo(imagesRef.current, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        stagger: 0.2, 
        duration: 1 
      });
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="flex justify-center space-x-4  my-10">
      {currentIndex > 0 && (
        <button 
          onClick={prevImage} 
          className="rounded-lg shadow-lg text-2xl"
        >
          &lt;
        </button>
      )}

      <div className="flex overflow-hidden w-full p-2 m-5">
        <div 
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * (100 / Math.min(images.length, 3))}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              ref={el => imagesRef.current[index] = el}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-1/3 h-auto object-cover flex-shrink-0 p-2" // Adjust width as necessary
            />
          ))}
        </div>
      </div>

      {currentIndex < images.length - 1 && (
        <button 
          onClick={nextImage} 
          className="rounded-lg shadow-lg text-2xl"
        >
          &gt;
        </button>
      )}
    </div>
  );
}

export default Anim;
