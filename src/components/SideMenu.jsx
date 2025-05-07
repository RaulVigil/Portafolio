const sections = [
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "skills", label: "Habilidades" },
  { id: "education", label: "Formación" },
  { id: "contact", label: "Contacto" },
];

const SideMenu = ({ isOpen, onClose }) => (
  <>
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-theme-panel shadow-lg transform transition-transform z-40 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <nav className="mt-20 px-6">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="block text-lg font-semibold py-2 text-theme-link hover:text-blue-600"
            onClick={onClose}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
    {isOpen && (
      <div
        className="fixed inset-0 bg-black opacity-50 z-30"
        onClick={onClose}
      ></div>
    )}
  </>
);

export default SideMenu;
