import { useState, useRef, useEffect } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import img2 from '../images/bharat_sarkar_logo.png';
import img1 from '../images/logo-collage.png';
import NavLink from './NavLink';
import NavSeparator from './NavSeparator';
import { SearchBar, SearchIcon } from './SearchComponents';
import MobileMenu from './MobileMenu';
import { navigationItems } from '../data/navigationData';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const searchRef = useRef(null);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleCloseClick = () => {
    setShowSearch(false);
  };

  const toggleMenu = () => {
    setShowMenu(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };

    if (showSearch) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSearch]);

  return (
    <header className="bg-primary w-full sticky top-0 z-50">
      <div className="flex items-center justify-between p-2 md:px-4 lg:px-6">
        <div className="flex items-center flex-shrink-0">
          <img src={img1} alt="Logo 1" className="h-6 sm:h-8 md:h-10 lg:h-12 mx-1 md:mx-2" />
          <img src={img2} alt="Logo 2" className="h-6 sm:h-8 md:h-10 lg:h-12 mx-1 md:mx-2" />
        </div>

        {!showSearch && (
          <nav className="hidden lg:flex flex-grow justify-center items-center">
            <div className="flex flex-wrap justify-center items-center">
              {navigationItems.map((item, index) => (
                <div key={item.path} className="flex items-center">
                  <NavLink to={item.path}>{item.label}</NavLink>
                  {index < navigationItems.length - 1 && <NavSeparator />}
                </div>
              ))}
            </div>
          </nav>
        )}

        <SearchBar showSearch={showSearch} searchRef={searchRef} onClose={handleCloseClick} />

        <div className="flex items-center space-x-2">
          <SearchIcon showSearch={showSearch} onClick={handleSearchClick} />

          <div className="relative lg:hidden">
            <div className="text-tertiary hover:text-primary-dark cursor-pointer p-2 rounded-md hover:bg-surface/10 transition-all duration-200" onClick={toggleMenu}>
              <RxDropdownMenu size={24} />
            </div>

            <MobileMenu showMenu={showMenu} onToggle={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
