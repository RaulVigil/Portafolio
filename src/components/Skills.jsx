const skills = [
  { name: "React", level: 90 },
  { name: "Angular", level: 90 },
  { name: "Laravel", level: 80 },
  { name: "Codeigniter", level: 90 },
  { name: "PHP", level: 80 },
  { name: "JavaScript", level: 80 },
  { name: "MySQL", level: 65 },
  { name: "MongoDB", level: 60 },
  { name: "Tailwind", level: 90 },
  { name: "WordPress", level: 90 },
  { name: "Shopify", level: 70 },
  { name: "SEO", level: 100 },
  { name: "GitHub", level: 85 },
  { name: "Postman", level: 80 },
];

const Skills = () => (
  <section id="skills" className="fade-in-up bg-theme-section py-16 px-4">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-12 relative w-fit mx-auto after:block after:w-16 after:h-1 after:bg-violet-600 after:mt-2 after:mx-auto">
        Habilidades
      </h2>

      {/* Progress Bars */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 mb-12">
        {skills.map(({ name, level }) => (
          <div key={name}>
            <div className="flex justify-between mb-1">
              <span>{name}</span>
              <span>{level}%</span>
            </div>
            <div className="w-full h-2.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-violet-600"
                style={{ width: `${level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div> */}

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map(({ name }) => (
          <span
            key={name}
            className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
