import { Scissors } from "lucide-react";

export default function Footer({ navigateTo }) {
  return (
    <footer className="bg-stone-900 text-stone-400 text-sm py-10 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
          <Scissors className="w-5 h-5 text-rose-500" />
          <span className="text-white font-serif font-bold text-lg">LuxeLocks Studio</span>
        </div>
        <p className="text-xs text-center md:text-left">
          Educational React SPA Project &bull; Built with React & Tailwind CSS
        </p>
        <div className="flex space-x-6 text-xs">
          <button onClick={() => navigateTo('landing')} className="hover:text-white">Home</button>
          <button onClick={() => navigateTo('gallery')} className="hover:text-white">Products</button>
          <button onClick={() => navigateTo('contact')} className="hover:text-white">Contact</button>
        </div>
      </div>
    </footer>
  );
}