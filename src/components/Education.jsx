const educationList = [
  {
    institution: 'UNIVO',
    title: 'Ingeniería en Sistemas Informáticos',
    year: '2023',
    description:
      'Formación completa en desarrollo de software, bases de datos, redes y sistemas operativos.',
    icon: 'fa-graduation-cap',
  },
  {
    institution: 'Kodigo',
    title: 'Bootcamp Full Stack Junior',
    year: '2022',
    description:
      'Programa intensivo de desarrollo web con enfoque práctico en tecnologías modernas.',
    icon: 'fa-user-graduate',
  },
];

const Education = () => (
  <section id="education" className="fade-in-up bg-theme-section py-16 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-12 relative w-fit mx-auto after:block after:w-16 after:h-1 after:bg-violet-600 after:mt-2 after:mx-auto">
        Formación
      </h2>

      <div className="flex flex-col gap-8">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-xl card-theme p-6 shadow-md border border-gray-200 dark:border-gray-700"
          >
            {/* Icono */}
            <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white text-xl shadow-md shrink-0 mt-1">
              <i className={`fas ${edu.icon}`}></i>
            </div>

            {/* Contenido */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg">{edu.institution}</h3>
                <span className="text-sm opacity-70">{edu.year}</span>
              </div>
              <p className="text-violet-600 font-medium mb-1">{edu.title}</p>
              <p className="text-sm">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
