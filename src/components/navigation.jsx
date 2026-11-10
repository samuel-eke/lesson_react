import { Menu, ShoppingBag, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home & Services", end: true },
  { to: "/gallery", label: "Hair Products" },
  { to: "/contact", label: "Contact Us" },
];

function Navigation({
  setIsCartOpen,
  cartItemCount,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  return (
    <>
    
      <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
        {links.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-rose-500 ${
                isActive
                  ? "text-rose-600 font-semibold border-b-2 border-rose-500 pb-1"
                  : "text-stone-600"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative p-2.5 text-stone-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition"
          aria-label="Shopping Cart"
        >
          <ShoppingBag className="w-6 h-6" />
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              {cartItemCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-rose-600"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-rose-100 px-4 pt-2 pb-4 space-y-2">
          {links.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block w-full text-left py-2 px-3 rounded-md ${
                  isActive ? "bg-rose-100 text-rose-700" : "text-stone-700 hover:bg-rose-50"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}

export default Navigation;