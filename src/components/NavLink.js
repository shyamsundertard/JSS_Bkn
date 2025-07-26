import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children, className = "" }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const getLinkClasses = (path) => {
    const baseClasses = "text-xs xl:text-sm 2xl:text-base font-semibold transition duration-400 ease-in-out px-3 py-2 rounded-lg whitespace-nowrap relative";
    const activeClasses = "text-tertiary bg-surface/10 shadow-sm ring-1 ring-surface/20";
    const inactiveClasses = "text-tertiary hover:text-surface hover:bg-surface/5";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses} ${className}`;
  };

  return (
    <Link to={to} className={getLinkClasses(to)}>
      {children}
    </Link>
  );
};

export default NavLink;
