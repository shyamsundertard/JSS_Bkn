import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch, IoIosClose } from "react-icons/io";
import { RxDropdownMenu } from "react-icons/rx";
import img2 from '../images/bharat_sarkar_logo-removebg-preview.png';
import img1 from '../images/jss_navlogo-removebg-preview.png';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleSearchClick = () => {
    setShowSearch(true);
    clearTimeout(timer);
  };

  const handleCloseClick = () => {
    setShowSearch(false);
  };

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  const handleMouseEnter = () => {
    clearTimeout(timer);
  };

  const handleMouseLeave = () => {
    if (showSearch) {
      setTimer(setTimeout(() => {
        setShowSearch(false);
      }, 500));
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  return (
    <header className="bg-gradient-to-r from-[#FFA500] to-[#FFCC80] w-full">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center">
          <img src={img1} alt="Logo 1" className="h-8 md:h-10 mx-2" />
          <img src={img2} alt="Logo 2" className="h-8 md:h-10 mx-2" />
        </div>

        <div className="relative">
          <div className="md:hidden">
            <div className="text-gray-700 hover:text-blue-500 cursor-pointer p-1 pl-20 ml-10 m-4 -mr-2" onClick={toggleMenu}>
              <RxDropdownMenu size={24} />
            </div>
          </div>

          {showMenu && (
            <div className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-48 z-10">
              <div className="flex justify-between items-center p-1 md:pt-0 pt-4">
                <h2 className="font-semibold">Menu</h2>
                <IoIosClose size={24} className="cursor-pointer" onClick={toggleMenu} />
              </div>
              <nav className="flex flex-col space-y-2 p-2 ">
                <Link to="/" className="text-sm text-gray-700 hover:text-blue-500">मुख पृष्ठ</Link>
                <Link to="/introduction" className="text-sm text-gray-700 hover:text-blue-500">परिचय</Link>
                <Link to="/board" className="text-sm text-gray-700 hover:text-blue-500">प्रबंध मंडल</Link>
                <Link to="/annual-plan" className="text-sm text-gray-700 hover:text-blue-500">वार्षिक कार्ययोजना</Link>
                <Link to="/achievements" className="text-sm text-gray-700 hover:text-blue-500">उपलब्धियाँ</Link>
                <Link to="/gallery" className="text-sm text-gray-700 hover:text-blue-500">गैलरी</Link>
                <Link to="/product" className="text-sm text-gray-700 hover:text-blue-500">तयार उत्पाद</Link>
                <Link to="/educommittee" className="text-sm text-gray-700 hover:text-blue-500">बीकानेर प्रोढ शिक्षण समीती</Link>
                <Link to="/stories" className="text-sm text-gray-700 hover:text-blue-500">सफलता की कहानी</Link>
              </nav>
            </div>
          )}
        </div>

        {showSearch ? (
          <div className="flex items-center w-full max-w-lg ml-4 ">
            <input
              type="text"
              placeholder="Type to search..."
              className="p-1 md:m-0 m-2  border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-300 w-full mr-2 rounded-md"
              onFocus={handleMouseEnter}
            />
            <div className="text-gray-700 hover:text-blue-500 cursor-pointer p-1 md:pt-0 pt-2" onClick={handleCloseClick}>
              <IoIosClose size={24} />
            </div>
          </div>
        ) : (
          <nav className=" md:flex flex-grow justify-center space-x-5 mb-4 md:mb-0 ">
            <div className='hidden md:flex md:flex flex-grow justify-center space-x-5 mb-4 md:mb-0 md:mt-2'>
            <Link to="/" className="text-sm text-gray-700 font-semibold hover:text-white transition duration-300 ease-in-out">मुख पृष्ठ</Link>
            <Link to="/introduction" className="text-sm text-gray-700 font-semibold hover:text-white transition duration-300 ease-in-out">परिचय</Link>
            <Link to="/board" className="text-sm text-gray-700 font-semibold hover:text-white transition duration-300 ease-in-out">प्रबंध मंडल</Link>
            <Link to="/annual-plan" className="text-sm text-gray-700 font-semibold hover:text-white transition duration-300 ease-in-out">वार्षिक कार्ययोजना</Link>
            <Link to="/achievements" className="text-sm text-gray-700 font-semibold hover:text-white transition duration-300 ease-in-out">उपलब्धियाँ</Link>
            <Link to="/gallery" className="text-sm text-gray-700 font-semibold hover:text-white transition duration-300 ease-in-out">गैलरी</Link>
            <Link to="/product" className="text-sm text-gray-700 font-semibold hover:text-white transition duration-300 ease-in-out">तयार उत्पाद</Link>
            <Link to="/educommittee" className="text-sm text-gray-700 font-semibold hover:text-white transition duration-300 ease-in-out">बीकानेर प्रोढ शिक्षण समीती</Link>
            <Link to="/stories" className="text-sm text-gray-700 font-semibold hover:text-white transition duration-300 ease-in-out">सफलता की कहानी</Link>
            </div>
            <div className="text-gray-700 hover:text-blue-500 cursor-pointer p-1 md:pt-0 pt-4 mt-1" onClick={handleSearchClick}>
              <IoIosSearch size={24} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
