import { useState } from 'react';
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
import img17 from '../images/img17.jpeg';
import img18 from '../images/img18.jpeg'; 
import img19 from '../images/img19.jpeg';
import img20 from '../images/img20.jpeg';
import img21 from '../images/img21.jpeg';
import img22 from '../images/img22.jpeg';
import img23 from '../images/img23.jpeg';
import img24 from '../images/img24.jpeg';
import img25 from '../images/img25.jpeg';
import img26 from '../images/img26.jpeg';
import img27 from '../images/img27.jpeg';
import img28 from '../images/img28.jpeg';
import img29 from '../images/img29.jpeg';
import img30 from '../images/img30.jpeg';
import img31 from '../images/img31.jpeg';
import img32 from '../images/img32.jpeg';
import img33 from '../images/img33.jpeg';
import img34 from '../images/img34.jpeg';
import img35 from '../images/img35.jpeg';
import img36 from '../images/img36.jpeg';
import img37 from '../images/img37.jpeg';
import img38 from '../images/img38.jpeg';
import img39 from '../images/img39.jpeg';
import img40 from '../images/img40.jpeg';
import img41 from '../images/img41.jpeg';
import img42 from '../images/img42.jpeg';
import img43 from '../images/img43.jpeg';
import img44 from '../images/img44.jpeg';
import img45 from '../images/img45.jpeg';
import img46 from '../images/img46.jpeg';
import img47 from '../images/img47.jpeg';
import img48 from '../images/img48.jpeg';
import img49 from '../images/img49.jpeg';
import img50 from '../images/img50.jpeg';
import img51 from '../images/img51.jpeg';
import img52 from '../images/img52.jpeg';
import img53 from '../images/img53.jpeg';

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 16;
  
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8,
    img9, img10, img11, img12, img13, img14, img15, img16,
    img17, img18, img19, img20, img21, img22,
    img23, img24, img25, img26, img27, img28,
    img29, img30, img31, img32, img33, img34,
    img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46,
    img47, img48, img49, img50, img51, img52,
    img53
  ];

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-8 text-tertiary">फोटो गैलरी</h2>
      
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mb-8">
        {currentImages.map((img, index) => (
          <div key={startIndex + index} className="break-inside-avoid mb-4 overflow-hidden rounded-md shadow-lg bg-surface transition-transform duration-100 hover:scale-105 cursor-pointer">
            <img
              src={img}
              alt={`Gallery item ${startIndex + index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center space-y-4">

        <div className="flex items-center space-x-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === 0
                ? 'bg-muted text-tertiary cursor-not-allowed'
                : 'bg-surface border border-tertiary text-tertiary hover:bg-primary-light transform hover:scale-105'
            }`}
          >
            ← Previous
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-10 h-10 rounded-lg font-medium transition-all duration-100 ${
                  index === currentPage
                    ? 'bg-primary-light border border-tertiary text-tertiary scale-110'
                    : 'bg-surface text-gray-700 hover:border hover:border-tertiary'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-100 ${
              currentPage === totalPages - 1
                ? 'bg-muted text-tertiary cursor-not-allowed'
                : 'bg-surface border border-tertiary text-tertiary hover:bg-primary-light transform hover:scale-105'
            }`}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
