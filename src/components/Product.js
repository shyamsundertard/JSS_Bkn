import React from 'react';

export default function Product() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-gray-200'>
      <div className='bg-white shadow-lg rounded-lg p-8 text-center'>
        <h1 className='text-5xl font-bold mb-4'>Our Products</h1>
        <p className='text-xl mb-6'>
          Discover innovative solutions designed to enhance your experience.
        </p>
        <p className='text-lg'>
          Explore our diverse range of products tailored for your needs.
        </p>
        <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600'>
          Learn More
        </button>
      </div>
    </div>
  );
}
