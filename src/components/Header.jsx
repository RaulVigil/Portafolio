const Header = () => (
  <header className="bg-gradient-to-r from-purple-700 to-violet-500 text-white py-24 text-center relative shadow-lg">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold mb-4">Raúl Santos</h1>
      <p className="text-xl mb-8">
        Desarrollador Full Stack apasionado por crear experiencias digitales
        impactantes
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="https://github.com/RaulVigil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-white text-violet-700 font-semibold rounded-md shadow hover:bg-violet-100 transition"
        >
          <i className="fab fa-github text-lg"></i>
          Ver GitHub
        </a>
        <a
          href="/tu-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-violet-700 font-semibold rounded-md shadow hover:bg-violet-100 transition"
        >
          Descargar CV
        </a>
      </div>
    </div>
  </header>
);

export default Header;
