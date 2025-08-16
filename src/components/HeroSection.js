import HeroDetails from './HeroDetails';
import Anim from './Anim';
import img1 from '../images/logo-collage.png'
function HeroSection() {
  return (
    <>
      <div className='flex flex-col items-center justify-center m-4 sm:m-6 md:m-8 lg:m-10 text-center'>
        <img src={img1} alt="जन शिक्षण संस्थान, बीकानेर" className='mb-10 md:h-40 md:w-90 scale-110 bg-transparent px-4'/>
        <h1 className='text-primary-dark text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide mb-3 sm:mb-4'>
          जन शिक्षण संस्थान, बीकानेर
        </h1>
        <h2 className='text-tertiary text-sm sm:text-xl md:text-2xl font-semibold leading-tight tracking-wide mb-2'>
          सौजन्य : कौशल विकास एवं उद्यमिता मंत्रालय, भारत सरकार
        </h2>
        <h3 className='text-tertiary text-md sm:text-xl md:text-2xl font-medium leading-tight tracking-wide mb-4'>
          संचालनः बीकानेर प्रौढ़ शिक्षण समिति, बीकानेर
        </h3>
        <h4 className='text-tertiary text-lg sm:text-xl md:text-2xl font-medium leading-tight tracking-wide'>
          “हुनर की शक्ति - बेरोजगारी से मुक्ति"
        </h4>
      </div>
      <Anim />
      <HeroDetails />
    </>
  );
}

export default HeroSection;
