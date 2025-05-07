const About = () => (
  <section id="about" className="fade-in-up bg-theme-section px-4 py-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-12 relative w-fit mx-auto after:block after:w-16 after:h-1 after:bg-violet-600 after:mt-2 after:mx-auto">
        Sobre mí
      </h2>

      <div className="card-theme p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <p className=" text-lg leading-relaxed mb-6">
          Soy Ingeniero en Sistemas con experiencia en <strong>React</strong>,{" "}
          <strong>Laravel</strong>,<strong> WordPress</strong> y{" "}
          <strong>Shopify</strong>. Me especializo en desarrollar soluciones
          digitales que combinan diseño atractivo con funcionalidad robusta,
          optimizadas para una excelente experiencia de usuario.
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Next.js",
            "Laravel",
            "WordPress",
            "Shopify",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="skill-pill py-2 px-4 rounded-full text-sm font-semibold transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
