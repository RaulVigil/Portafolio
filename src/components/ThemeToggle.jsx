const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center z-50 transition duration-300 shadow-md ${
        theme === 'dark'
          ? 'bg-black-rv text-light-rv shadow-[0_0_10px_rgba(250,250,250,0.3)]'
          : 'bg-white-rv text-dark-rv shadow-[0_0_10px_rgba(0,0,0,0.1)]'
      }`}
      aria-label="Cambiar tema"
    >
      <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
    </button>
  );
};

export default ThemeToggle;
