import productk1 from '../images/productk1.jpeg';
import productk2 from '../images/productk2.jpeg';
import productk3 from '../images/productk3.jpeg';

import producta1 from '../images/producta1.jpeg';
import producta2 from '../images/producta2.jpeg';
import producta3 from '../images/producta3.jpeg'; 
import producta4 from '../images/producta4.jpeg';

export default function Product() {
  const khadyaPadarth = [
    {
      id: 1,
      name: "पापड़",
      image: productk1
    },
    {
      id: 2,
      name: "सांगरी",
      image: productk2
    },
    {
      id: 3,
      name: "बड़ी",
      image: productk3
    },
  ];

  const anyaPadarth = [
    {
      id: 4,
      name: "अन्य उत्पाद 1",
      image: producta1
    },
    {
      id: 5,
      name: "अन्य उत्पाद 2",
      image: producta2
    },
    {
      id: 6,
      name: "अन्य उत्पाद 3",
      image: producta3
    },
    {
      id: 7,
      name: "अन्य उत्पाद 4",
      image: producta4
    },
  ];

  return (
    <div className='w-full min-h-screen pb-12 pt-4 px-4 text-tertiary'>
      <div className='text-center mb-12'>
        <h1 className='text-5xl font-bold mb-4'>हमारे उत्पाद</h1>
        <p className='text-xl font-medium max-w-2xl mx-auto'>
          आपके अनुभव को बेहतर बनाने के लिए डिज़ाइन किए गए नवाचार समाधानों की खोज करें।
        </p>
      </div>

      <div className='max-w-6xl mx-auto mb-16 text-tertiary'>
        <h2 className='text-3xl font-bold text-center mb-8'>खाद्य पदार्थ:</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {khadyaPadarth.map((product) => (
            <div key={product.id} className='bg-primary-light rounded-lg shadow-2xl overflow-hidden border-2 border-primary hover:border-primary-dark hover:scale-105 hover:shadow-3xl transition-all duration-150 ease-in-out'>

              <div className='aspect-square overflow-hidden'>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className='w-full h-full object-cover'
                />
              </div>
              
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-gray-800 text-center'>
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-8'>अन्य पदार्थ:</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {anyaPadarth.map((product) => (
            <div key={product.id} className='bg-primary-light rounded-lg shadow-2xl overflow-hidden border-2 border-primary hover:border-primary-dark hover:scale-105 hover:shadow-3xl transition-all duration-150 ease-in-out'>

              <div className='aspect-square overflow-hidden'>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className='w-full h-full object-cover'
                />
              </div>
              
              <div className='p-6'>
                <h3 className='text-2xl font-semibold text-gray-800 text-center'>
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
