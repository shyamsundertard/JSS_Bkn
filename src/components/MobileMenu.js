import { IoIosClose } from "react-icons/io";
import MobileNavLink from './MobileNavLink';
import { navigationItems } from '../data/navigationData';

const MobileMenu = ({ showMenu, onToggle }) => {
  if (!showMenu) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-tertiary/20 backdrop-blur-sm z-30" 
        onClick={onToggle}
      ></div>
      
      <div className="fixed top-16 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-surface shadow-2xl rounded-xl z-40 border border-muted overflow-hidden max-h-[calc(100vh-5rem)]">
        <div className="bg-gradient-to-r from-primary to-primary-dark p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg text-surface">मेन्यू</h2>
            <IoIosClose 
              size={28} 
              className="cursor-pointer text-surface hover:text-background transition-colors duration-200" 
              onClick={onToggle} 
            />
          </div>
        </div>
        <nav className="py-2 overflow-y-auto max-h-[calc(100vh-10rem)]">
        {navigationItems.map((item) => (
          <MobileNavLink 
            key={item.path}
            to={item.path}
            icon={item.icon}
            onClick={onToggle}
          >
            {item.label}
          </MobileNavLink>
        ))}
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
