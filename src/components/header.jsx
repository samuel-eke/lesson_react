import { Scissors } from "lucide-react";
import Navigation from "./navigation";
import { NavLink } from "react-router-dom";

function Header({
	cartItemCount,
	setIsCartOpen,
	mobileMenuOpen,
	setMobileMenuOpen,
}) {
	return (
		<>
			<header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
					<NavLink
						to="/"
						className="flex items-center space-x-2 cursor-pointer group">
						<div className="bg-rose-500 text-white p-2.5 rounded-full group-hover:bg-rose-600 transition duration-300">
							<Scissors className="w-5 h-5" />
						</div>
						<div>
							<span className="text-2xl font-serif font-bold tracking-tight text-stone-900 block leading-none">
								LuxeLocks
							</span>
							<span className="text-xs uppercase tracking-widest text-rose-500 font-semibold">
								Studio & Boutique
							</span>
						</div>
					</NavLink>
				</div>
				<div className="border-t border-rose-100">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between">
						<Navigation
							cartItemCount={cartItemCount}
							setIsCartOpen={setIsCartOpen}
							mobileMenuOpen={mobileMenuOpen}
							setMobileMenuOpen={setMobileMenuOpen}
						/>
					</div>
				</div>
			</header>
		</>
	);
}
export default Header;
