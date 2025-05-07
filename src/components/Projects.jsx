import React from "react";
import SistemaVeterinaria from "../assets/sistema_veterinaria.png";
import ResidencialVistaAlValle from "../assets/residencialvistaalvalle.png";
import TheMajes from "../assets/themajes.png";

const projects = [
  {
    title: "Sitio Web Residencial Vista al Valle",
    description: "Sitio web desarrollado en Wordpress.",
    tech: ["Wordpress", "Divi"],
    link: "https://residencialvistaalvalle.com/",
    image: ResidencialVistaAlValle,
  },
  {
    title: "Sistema Veterinario",
    description:
      "Sistema veterinario desarrollado en CodeIgniter4 y Bootstrap.",
    tech: ["CodeIgniter4", "Bootstrap", "Firebase"],
    link: "https://veterinariamimejoramigo.store/",
    image: SistemaVeterinaria,
  },
  {
    title: "The Majes",
    description: "Sitio web desarrollado en Wordpress.",
    tech: ["Wordpress", "Elementor"],
    link: "http://themajes.shop/",
    image: TheMajes,
  },
];

const Projects = () => (
  <section id="projects" className="fade-in-up bg-theme-section py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-12 relative w-fit mx-auto after:block after:w-16 after:h-1 after:bg-violet-600 after:mt-2 after:mx-auto">
        Proyectos
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative h-[500px] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            {/* Imagen como fondo */}
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
            />

            {/* Contenido flotante */}
            <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md text-white p-4">
              <h3 className="text-lg font-bold mb-1">{project.title}</h3>
              <p className="text-sm mb-2">{project.description}</p>

              <div className="flex flex-wrap items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white/20 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium underline"
                >
                  Ver proyecto{" "}
                  <i className="fas fa-arrow-up-right-from-square ml-1 text-xs"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
