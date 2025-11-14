export default function WebDevelopment() {
  const projects = [
    {
      title: "Project 1",
      description: "A modern web application built with React and TypeScript",
      technologies: ["React", "TypeScript", "Next.js"],
      link: "#",
    },
    {
      title: "Project 2",
      description: "Full-stack application with database and API",
      technologies: ["Next.js", "PostgreSQL", "API Design"],
      link: "#",
    },
    {
      title: "Project 3",
      description: "Responsive design with custom animations",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      link: "#",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <section className="py-12 border-b border-orange-200 dark:border-orange-900 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Web Development
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Modern, responsive web applications with clean code and great UX
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3">
              Frontend
            </h3>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Responsive Design</li>
            </ul>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="font-bold text-orange-700 dark:text-orange-300 mb-3">
              Backend
            </h3>
            <ul className="text-slate-600 dark:text-slate-300 space-y-2">
              <li>• Node.js</li>
              <li>• API Design</li>
              <li>• Database Design</li>
              <li>• Authentication</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block bg-white dark:bg-slate-800 border border-orange-200 dark:border-orange-800 rounded-lg p-6 hover:shadow-lg hover:border-orange-400 dark:hover:border-orange-600 transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100 text-xs px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
