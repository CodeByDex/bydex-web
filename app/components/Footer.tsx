export default function Footer() {
  return (
    <footer className="bg-orange-50 dark:bg-orange-900/20 border-t border-orange-200 dark:border-orange-800 mt-16">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center text-slate-600 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} Bydex. All rights reserved.</p>
          <p className="text-sm mt-2">Crafted with care for web and clay.</p>
        </div>
      </div>
    </footer>
  );
}
