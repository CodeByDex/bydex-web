import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="bg-orange-50 dark:bg-orange-900 border-b border-orange-200 dark:border-orange-800 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
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
          <span className="text-2xl font-bold text-slate-700 dark:text-slate-100">
            Bydex
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/" className="text-slate-700 dark:text-slate-300 hover:text-orange-700 dark:hover:text-orange-300 transition">
            Home
          </Link>
          <Link href="/web" className="text-slate-700 dark:text-slate-300 hover:text-orange-700 dark:hover:text-orange-300 transition">
            Web Development
          </Link>
          <Link href="/pottery" className="text-slate-700 dark:text-slate-300 hover:text-orange-700 dark:hover:text-orange-300 transition">
            Pottery
          </Link>
        </div>
      </div>
    </nav>
  );
}
