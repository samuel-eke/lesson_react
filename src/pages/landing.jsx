import { ArrowRight, ChevronRight, Sparkles, Star, Scissors, Heart } from "lucide-react";
import { services } from "../data/db";

export default function LandingPage({ navigateTo }) {
	const getIcon = (iconName) => {
		switch (iconName) {
			case "Scissors":
				return Scissors;
			case "Sparkles":
				return Sparkles;
			case "Heart":
				return Heart;
			default:
				return Scissors;
		}
	};

	return (
		<div className="space-y-20 pb-16">
			{/* Hero Section */}
			<section className="relative bg-gradient-to-r from-rose-100/70 via-rose-50/50 to-amber-50/40 py-20 lg:py-28">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6 text-center md:text-left">
						<div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-800 text-xs font-semibold px-3 py-1.5 rounded-full">
							<Sparkles className="w-4 h-4" />
							<span>Premier Hair Styling & Care Experience</span>
						</div>
						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 leading-tight">
							Unveil Your Hair's{" "}
							<span className="text-rose-600 italic">True Radiance</span>
						</h1>
						<p className="text-lg text-stone-600 max-w-xl mx-auto md:mx-0">
							Experience bespoke cuts, vibrant colors, and luxurious treatments
							from master stylists. Pair your look with our curated salon-grade
							hair care collection.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
							<button
								onClick={() => navigateTo("contact")}
								className="w-full sm:w-auto px-8 py-3.5 bg-rose-600 text-white font-medium rounded-xl hover:bg-rose-700 shadow-lg shadow-rose-200 transition duration-200 flex items-center justify-center space-x-2">
								<span>Book Appointment</span>
								<ArrowRight className="w-4 h-4" />
							</button>
							<button
								onClick={() => navigateTo("gallery")}
								className="w-full sm:w-auto px-8 py-3.5 bg-white text-stone-800 font-medium rounded-xl border border-stone-200 hover:bg-stone-50 transition duration-200">
								Shop Products
							</button>
						</div>
					</div>

					<div className="relative flex justify-center">
						<div className="relative w-full max-w-md">
							<img
								src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
								alt="Hair Styling Salon"
								className="rounded-3xl shadow-2xl object-cover h-96 w-full"
							/>
							<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border border-rose-100">
								<div className="bg-amber-100 text-amber-600 p-2.5 rounded-xl">
									<Star className="w-6 h-6 fill-current" />
								</div>
								<div>
									<div className="font-bold text-stone-900 text-lg">
										4.9 / 5.0
									</div>
									<div className="text-xs text-stone-500">
										From 500+ Happy Clients
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-12">
					<h2 className="text-3xl font-serif font-bold text-stone-900 sm:text-4xl">
						Our Hair Services
					</h2>
					<p className="mt-3 text-stone-600">
						Expertly delivered treatments tailored to elevate your crown.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{services.map((srv, idx) => {
						const Icon = getIcon(srv.iconName);
						return (
							<div
								key={idx}
								className="bg-white p-8 rounded-2xl border border-rose-100 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
								<div>
									<div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-6">
										<Icon className="w-6 h-6" />
									</div>
									<h3 className="text-xl font-bold text-stone-900 mb-2">
										{srv.title}
									</h3>
									<p className="text-stone-600 text-sm leading-relaxed mb-6">
										{srv.desc}
									</p>
								</div>
								<div className="flex items-center justify-between border-t border-stone-100 pt-4">
									<span className="font-semibold text-rose-600">
										{srv.price}
									</span>
									<button
										onClick={() => navigateTo("contact")}
										className="text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-rose-600 flex items-center">
										Inquire <ChevronRight className="w-3.5 h-3.5 ml-1" />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section className="bg-stone-900 text-white py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
					<div className="space-y-4 text-center md:text-left">
						<span className="text-rose-400 font-semibold text-sm uppercase tracking-widest">
							Salon Quality At Home
						</span>
						<h2 className="text-3xl font-serif font-bold">
							Discover Our Signature Product Line
						</h2>
						<p className="text-stone-400 max-w-xl">
							Formulated with organic botanicals and nourishing oils to keep
							your locks salon-fresh every single day.
						</p>
					</div>
					<button
						onClick={() => navigateTo("gallery")}
						className="px-8 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-medium rounded-xl transition shadow-lg whitespace-nowrap">
						Explore Product Gallery
					</button>
				</div>
			</section>
		</div>
	);
}
