const BurgerMenu = ({ onClick, isOpen }) => (
    <button
      onClick={onClick}
      aria-label="Menú"
      className="fixed top-4 left-4 z-50 w-10 h-10 flex items-center justify-center bg-transparent border-none text-theme-link"
    >
      <div className="relative w-6 h-6">
        <span
          className={`absolute h-[3px] w-full bg-current rounded transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-45 top-2.5' : 'top-0'
          }`}
        ></span>
        <span
          className={`absolute h-[3px] w-full bg-current rounded transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0' : 'top-2.5'
          }`}
        ></span>
        <span
          className={`absolute h-[3px] w-full bg-current rounded transition-transform duration-300 ease-in-out ${
            isOpen ? '-rotate-45 top-2.5' : 'top-5'
          }`}
        ></span>
      </div>
    </button>
  );
  
  export default BurgerMenu;
  