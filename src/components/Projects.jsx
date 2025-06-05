import React from "react";
import SistemaVeterinaria from "../assets/systemveterinary.png";
import ResidencialVistaAlValle from "../assets/sitevistaalvalle.png";
import TheMajes from "../assets/sitewoocommerce.png";

const projects = [
  {
    title: "Sitio Web Residencial Vista al Valle",
    description:
      "Sitio web desarrollado en WordPress para un proyecto residencial con amenidades de lujo. Incluye galería de imágenes, formulario de contacto y secciones informativas sobre las características del residencial.",
    tech: ["WordPress", "Divi","Woody Snippets", "Slick Slider"],
    link: "https://residencialvistaalvalle.com/",
    image: ResidencialVistaAlValle,
  },
  {
    title: "Sistema Veterinario",
    description:
      "Sistema completo para la gestión de clínicas veterinarias desarrollado con CodeIgniter4 y Bootstrap. Incluye módulos para gestión de pacientes, citas, historiales médicos, inventario y facturación.",
    tech: ["CodeIgniter4", "Bootstrap", "Firebase"],
    link: "https://veterinariamimejoramigo.store/",
    image: SistemaVeterinaria,
    repo: "https://github.com/tu-repo/sistema-veterinario",
  },
  {
    title: "The Majes",
    description:
      "Sitio web desarrollado en WordPress con enfoque comercial. Cuenta con catálogo de productos, diseño responsive y administración sencilla con Elementor.",
    tech: ["WordPress", "Elementor"],
    link: "http://themajes.shop/",
    image: TheMajes,
  },
];

const Projects = () => (
  <section id="projects" className="fade-in-up bg-theme-section py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-16 relative w-fit mx-auto after:block after:w-16 after:h-1 after:bg-violet-600 after:mt-2 after:mx-auto">
        Proyectos
      </h2>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card-theme rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 grid md:grid-cols-[45%_55%] gap-0"
          >
            {/* Imagen */}
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contenido */}
            <div className="p-8 relative flex flex-col justify-between">
              {/* Círculo decorativo */}
              <div className="absolute bottom-[-20px] right-[-20px] w-32 h-32 rounded-full bg-violet-300/20 dark:bg-violet-500/10 z-0"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-theme-link dark:text-light-rv">
                  {project.title}
                </h3>
                <p className="text-theme-link dark:text-light-rv text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="skill-pill py-1 px-3 rounded-full text-xs font-semibold transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 items-center relative z-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-link hover:text-blue-500 text-sm flex items-center gap-2"
                >
                  Ver proyecto <i className="fas fa-arrow-right"></i>
                </a>
                {/* {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-link hover:text-blue-500 text-sm flex items-center gap-2"
                  >
                    Ver código <i className="fas fa-code"></i>
                  </a>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
