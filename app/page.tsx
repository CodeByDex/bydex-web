import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/branding/Makers Mark.png"
            alt="Bydex Logo"
            width={120}
            height={120}
            priority
            className="dark:hidden"
          />
          <Image
            src="/branding/Makers Mark White.png"
            alt="Bydex Logo"
            width={120}
            height={120}
            priority
            className="hidden dark:block"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
          Welcome to Bydex
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
          Crafting digital experiences and beautiful ceramics
        </p>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          I&apos;m a passionate developer and potter who creates thoughtful solutions on the web 
          and meaningful pieces in clay. Explore my work below.
        </p>
      </section>

      {/* Portfolio Sections */}
      <section className="grid md:grid-cols-2 gap-12 py-16">
        {/* Web Development Section */}
        <div className="group cursor-pointer">
          <Link href="/web" className="block">
            <div className="background-slate rounded-lg p-8 h-64 flex flex-col justify-between hover:shadow-lg transition-shadow border border-orange-200 dark:border-orange-900">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Web Development
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Modern, responsive web applications built with React, Next.js, and TypeScript
                </p>
              </div>
              <div className="text-orange-600 dark:text-orange-400 font-semibold flex items-center">
                Explore Projects →
              </div>
            </div>
          </Link>
        </div>

        {/* Pottery Section */}
        <div className="group cursor-pointer">
          <Link href="/pottery" className="block">
            <div className="background-orange rounded-lg p-8 h-64 flex flex-col justify-between hover:shadow-lg transition-shadow border border-orange-300 dark:border-orange-700">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                  Pottery
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Hand-crafted ceramics and functional pottery pieces with unique designs
                </p>
              </div>
              <div className="text-orange-700 dark:text-orange-300 font-semibold flex items-center">
                View Gallery →
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-3xl font-bold mb-8 text-slate-900 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
          I combine technical expertise in web development with a passion for creating beautiful, 
          functional ceramics. My approach to both disciplines emphasizes clean design, attention to detail, 
          and creating work that resonates with people.
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          Whether it&apos;s building a responsive web application or throwing clay on a wheel, 
          I bring the same dedication to craftsmanship and problem-solving to every project.
        </p>
      </section>
    </main>
  );
}
