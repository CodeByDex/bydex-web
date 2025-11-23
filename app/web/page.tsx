import Image from "next/image";

export default function WebDevelopment() {
  const projects = [
    {
      title: "Community LGBTQ+ Event Page",
      description: "Volunteer/community work I did to help highlight pride month events happening around the community.",
      technologies: ["TailwindCSS", "TypeScript", "Next.js"],
      link: "https://findlaypride.com/",
      image: "/images/web/pride.png",
    },
    {
      title: "Language Study Application",
      description: "Study app built mostly for personal use with the hope of replicating a study app that isn't available anymore.",
      technologies: ["Next.js", "TailwindCSS", "API Design"],
      link: "https://bydex-japan.vercel.app/",
      image: "/images/web/kanado.png",
    },
    {
      title: "Professional Services",
      description: "Class capstone project used to highlight team members abilities.",
      technologies: ["Next.js", "Tailwind CSS", "Heroku"],
      link: "https://www.oiodev.com/",
      image: "/images/web/oiodev.png",
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
          IT architect in my 9-5, enjoy still coding in my 5-9.
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="background-slate border border-orange-200 dark:border-orange-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
