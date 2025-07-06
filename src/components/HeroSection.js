import React from 'react';
// import Card from './Card';
import Anim from './Anim';
import img1 from '../images/2024-09-22 (1).png'
function HeroSection() {
  return (
    <>
      <div className='flex flex-col items-center justify-center m-4 sm:m-6 md:m-8 lg:m-10'>
        <img src={img1} alt="जन शिक्षण संस्थान, बीकानेर" className='mb-8 md:h-40 md:w-90'/>
        <h1 className='text-red-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide mb-3 sm:mb-4'>
          जन शिक्षण संस्थान, बीकानेर
        </h1>
        <h2 className='text-purple-500 text-sm sm:text-xl md:text-2xl font-semibold leading-tight tracking-wide mb-2'>
          सौजन्य : कौशल विकास एवं उद्यमिता मंत्रालय, भारत सरकार
        </h2>
        <h3 className='text-blue-500 text-md sm:text-xl md:text-2xl font-medium leading-tight tracking-wide mb-4'>
          संचालनः बीकानेर प्रौढ़ शिक्षण समीती, बीकानेर
        </h3>
        <h4 className='text-purple-500 text-lg sm:text-xl md:text-2xl font-light leading-tight tracking-wide'>
          “हुनर की शक्ति - बेरोजगारी से मुक्ति
        </h4>
      </div>
      <Anim />
      {/* <Card /> */}
    </>
  );
}

export default HeroSection;
