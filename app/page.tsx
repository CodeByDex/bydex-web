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
            alt="ByDex Logo"
            width={120}
            height={120}
            priority
            className="dark:hidden"
          />
          <Image
            src="/branding/Makers Mark White.png"
            alt="ByDex Logo"
            width={120}
            height={120}
            priority
            className="hidden dark:block"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
          Welcome to ByDex
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
          Serial Hobbyest with Community at Heart
        </p>
        <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
          Welcome to a look into my creative pursuits and passions 
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
                  Hand-crafted ceramics
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
          I enjoy creative expression and learning new skils that allow me to do that be that passion projects building web pages, 
          volunteering with a sister city exchange program, or one of my many hands-on hobbies like fiber and ceramic arts. 
        </p>
      </section>
    </main>
  );
}
