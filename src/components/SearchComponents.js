import { IoIosSearch, IoIosClose } from "react-icons/io";

const SearchBar = ({ showSearch, searchRef, onClose }) => {
  if (!showSearch) return null;

  return (
    <div ref={searchRef} className="flex items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ml-2 md:ml-4">
      <input
        type="text"
        placeholder="खोजें..."
        className="p-2 md:p-3 border-b-2 border-muted focus:outline-none focus:border-primary-dark transition-all duration-300 w-full mr-2 rounded-md text-sm md:text-base bg-surface"
      />
      <div className="text-tertiary hover:text-primary-dark hover:bg-surface/10 rounded-lg cursor-pointer p-1" onClick={onClose}>
        <IoIosClose size={24} />
      </div>
    </div>
  );
};

const SearchIcon = ({ showSearch, onClick }) => {
  if (showSearch) return null;

  return (
    <div className="text-tertiary hover:text-surface cursor-pointer p-2" onClick={onClick}>
      <IoIosSearch size={20} className="sm:hidden" />
      <IoIosSearch size={24} className="hidden sm:block" />
    </div>
  );
};

export { SearchBar, SearchIcon };
