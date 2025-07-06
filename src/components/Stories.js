import React from 'react';

export default function Stories() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen bg-gradient-to-r from-purple-500 to-blue-500'>
      <div className='bg-white shadow-lg rounded-lg p-8 text-center'>
        <h1 className='text-5xl font-bold text-gray-800 mb-4'>Our Stories</h1>
        <p className='text-xl text-gray-600 mb-6'>
          Inspiring narratives that connect us all.
        </p>
        <p className='text-lg text-gray-500 mb-8'>
          Dive into our collection of stories that celebrate experiences and achievements.
        </p>
        <button className='mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600'>
          Read More
        </button>
      </div>
    </div>
  );
}
