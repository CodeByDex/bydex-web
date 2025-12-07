import Image from "next/image";

export default function Pottery() {
  const pieces = [
    {
      title: "Small Flower Pot with Drip Tray",
      description: "Glazed flower pot with a raw clay drip tray made with Standard Clay 760.",
      technique: "Wheel Thrown, Hand Glazed",
      image: "/images/pottery/Pottery-1.avif",
    },
    {
      title: "Cup Set",
      description: "Glazed set of cups from my 2nd and 3rd round of throwing Standard Clay 760 in 600 and 800 gram quantities.",
      technique: "Wheel Thrown, Hand Glazed",
      image: "/images/pottery/Pottery-2.avif",
    },
    {
      title: "Cup Set",
      description: "Glazed set of cups from my 1st round of throwing Standard Clay 760 at 400 grams.",
      technique: "Wheel Thrown, Hand Glazed",
      image: "/images/pottery/Pottery-3.avif",
    },
    {
      title: "Single Cup",
      description: "Single glazed cup from my third pottery class using a white stoneware clay body.",
      technique: "Wheel Thrown, Hand Glazed",
      image: "/images/pottery/Pottery-4.avif",
    },
    {
      title: "Cup Set",
      description: "Matching set of glazed cups from my third pottery class and first attempt at throwing matching pieces using a white stoneware clay body.",
      technique: "Wheel Thrown, Underglazed",
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
          A journey of growth, creativity and skillmanship through clay.
        </p>
      </section>

      {/* About Pottery */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          My Craft
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
          I started my pottery journey in late 2023 taking a beginner course are the Findlay Art League (FAL) with my friend David.
          Prior to that I had never thrown clay on a wheel and besides required art classes during my K-12 education had never done much with the fine arts.
          Since then I took a couple additional classes at FAL before joining the studio in 2025 and beginning my own practice.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          My practice currently is focusing on trying build my techincal skills while exploring different clay bodies.
          In class we used a very plastic smooth white stoneware and since starting my own practice have been working with a slightly grogged speckled brown stoneware (Standard Clay 769).
        </p>
      </section>

      {/* Techniques */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
          Techniques
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="background-orange rounded-lg p-6 border border-orange-300 dark:border-orange-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              Wheel Throwing
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              Creating symmetrical forms on the pottery wheel
            </p>
          </div>
          <div className="background-orange rounded-lg p-6 border border-orange-300 dark:border-orange-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              Reclaim
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              One of the things I like about clay is that it can be reclaimed and reused, so all time spent, even when a piece doesn't come out,
              still contributes to future work.
            </p>
          </div>
          <div className="background-orange rounded-lg p-6 border border-orange-300 dark:border-orange-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              Glazing
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              So far have only been hand glazing with commercial glazes but am researching mixing glazes to try dipping in the future.
            </p>
          </div>
          <div className="background-orange rounded-lg p-6 border border-orange-300 dark:border-orange-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-3">
              Firing
            </h3>
            <p className="text-slate-600 dark:text-slate-300">
              I've joined the studio committee that is responsible for the studio operations which includes firing the kiln.
              I'm using this to learn more about firing kilns and getting hands on experience.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
          Recent Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pieces.map((piece, index) => (
            <div
              key={index}
              className="background-slate border border-orange-200 dark:border-orange-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">
          Inspiration
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          As I am new to pottery I have been scouring resources for different techniques and educational content.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          There are a couple youtubers I have been gravitated to in particularly and seem to go back to their content quite a bit.
          They are:
          <ul className="list-disc list-inside mt-2">
            <li><a href="https://www.youtube.com/@floriangadsby" target="_blank" className="underline">Florian Gadsby</a></li>
            <li><a href="https://www.youtube.com/@OldForgeCreations" target="_blank" className="underline">Old Forge Creations</a></li>
          </ul>
        </p>
      </section>
    </main>
  );
}
