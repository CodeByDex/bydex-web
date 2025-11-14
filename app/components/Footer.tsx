export default function Footer() {
  return (
    <footer className="bg-orange-50 dark:bg-orange-900 border-t border-orange-200 dark:border-orange-800 mt-16">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center text-slate-700 dark:text-slate-100">
          <p>&copy; {new Date().getFullYear()} Bydex. All rights reserved.</p>
          <p className="text-sm mt-2 text-slate-600 dark:text-slate-300">Crafted with care for web and clay.</p>
        </div>
      </div>
    </footer>
  );
}
