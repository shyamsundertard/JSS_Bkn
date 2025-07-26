import { Link, useLocation } from 'react-router-dom';

const MobileNavLink = ({ to, icon, children, onClick }) => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const getMobileLinkClasses = (path) => {
    const baseClasses = "block px-4 py-3 text-sm transition-all duration-200 border-b border-muted/30 relative";
    const activeClasses = "bg-gradient-to-r from-primary/5 to-primary/10 text-primary-dark font-semibold";
    const inactiveClasses = "text-tertiary hover:bg-background hover:text-primary-dark";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <Link 
      to={to} 
      className={getMobileLinkClasses(to)}
      onClick={onClick}
    >
      <span className="flex items-center">
        <span className="mr-3 text-base">{icon}</span>
        <span className="flex-1 leading-tight">{children}</span>
        {isActive(to) && <span className="w-2 h-2 bg-primary rounded-full"></span>}
      </span>
    </Link>
  );
};

export default MobileNavLink;
