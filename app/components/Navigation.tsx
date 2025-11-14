import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-orange-200 dark:border-orange-900 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/branding/Makers Mark.png"
            alt="Bydex Logo"
            width={40}
            height={40}
            className="dark:hidden"
          />
          <Image
            src="/branding/Makers Mark White.png"
            alt="Bydex Logo"
            width={40}
            height={40}
            className="hidden dark:block"
          />
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            Bydex
          </span>
        </Link>
        <div className="flex gap-8">
          <Link href="/web" className="text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition">
            Web Development
          </Link>
          <Link href="/pottery" className="text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition">
            Pottery
          </Link>
        </div>
      </div>
    </nav>
  );
}
