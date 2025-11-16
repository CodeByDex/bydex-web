import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="background-orange border-b accent-border sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/branding/Makers Mark.png"
            alt="ByDex Logo"
            width={40}
            height={40}
            className="dark:hidden"
          />
          <Image
            src="/branding/Makers Mark White.png"
            alt="ByDex Logo"
            width={40}
            height={40}
            className="hidden dark:block"
          />
          <span className="text-2xl font-bold text-slate-700 dark:text-slate-100 accent-text">
            ByDex
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/web" className="text-slate-700 dark:text-slate-300 hover:accent-strong transition">
            Web
          </Link>
          <Link href="/pottery" className="text-slate-700 dark:text-slate-300 hover:accent-strong transition">
            Pottery
          </Link>
        </div>
      </div>
    </nav>
  );
}
