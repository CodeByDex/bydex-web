import Image from "next/image";

export default function Pottery() {
  const pieces = [
    {
      title: "Handmade Bowl",
      description: "Functional ceramic bowl with natural glaze",
      technique: "Wheel Thrown",
      image: "/images/pottery/Pottery-1.avif",
    },
    {
      title: "Plate Set",
      description: "Set of dinner plates with custom design",
      technique: "Hand Built",
      image: "/images/pottery/Pottery-2.avif",
    },
    {
      title: "Vase Collection",
      description: "Series of decorative vases in various sizes",
      technique: "Wheel Thrown",
      image: "/images/pottery/Pottery-3.avif",
    },
    {
      title: "Sculptural Piece",
      description: "Abstract ceramic sculpture with textured finish",
      technique: "Hand Built",
      image: "/images/pottery/Pottery-4.avif",
    },
    {
      title: "Functional Vessels",
      description: "Set of serving vessels with earthy glaze",
      technique: "Wheel Thrown",
      image: "/images/pottery/Pottery-5.avif",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <section className="py-12 border-b border-orange-200 dark:border-orange-900 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Pottery
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300">
          Hand-crafted ceramics and functional pottery pieces
        </p>
      </section>

      {/* About Pottery */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          My Craft
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          Each piece I create is carefully crafted on the wheel or by hand, 
          combining traditional techniques with contemporary design. I focus on creating 
          functional pottery that is beautiful and meant to be used.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          I work with high-fire stoneware and explore different glazing techniques to create 
          unique finishes that highlight the natural qualities of the clay.
        </p>
      </section>

      {/* Techniques */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          Techniques
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              Wheel Throwing
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Creating symmetrical forms on the pottery wheel
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              Hand Building
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Sculpting and constructing organic forms by hand
            </p>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/30 rounded-lg p-6 border border-orange-200 dark:border-orange-800">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              Glazing
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Exploring colors and finishes through glazing techniques
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
          Recent Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pieces.map((piece, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 border border-orange-200 dark:border-orange-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64 w-full bg-slate-200">
                <Image
                  src={piece.image}
                  alt={piece.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {piece.title}
                  </h3>
                  <span className="bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100 text-xs px-3 py-1 rounded-full">
                    {piece.technique}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {piece.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
