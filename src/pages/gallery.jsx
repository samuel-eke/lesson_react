import { Filter, Plus, Star } from "lucide-react";
import { hairproducts } from "../data/db";

export default function GalleryPage({ selectedCategory, setSelectedCategory, addToCart }) {
  const categories = ['All', ...new Set(hairproducts.map(p => p.category))];
  const filteredProducts = selectedCategory === 'All' 
    ? hairproducts 
    : hairproducts.filter(p => p.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">Hair Care Collection</h1>
        <p className="text-stone-600">
          Handcrafted formulations and luxury salon products designed to nourish, protect, and style all hair types.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        <Filter className="w-4 h-4 text-stone-400 mr-2 hidden sm:inline-block" />
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-200 ${
              selectedCategory === cat
                ? 'bg-rose-500 text-white shadow'
                : 'bg-white text-stone-600 hover:bg-rose-50 border border-stone-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-2xl border border-rose-100 shadow-sm hover:shadow-lg transition duration-300 flex flex-col overflow-hidden group"
          >
            <div className="relative h-64 overflow-hidden bg-stone-100">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
              />
              <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-stone-200">
                {product.badge}
              </span>
            </div>

            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span>{product.category}</span>
                  <div className="flex items-center text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-current mr-1" />
                    <span className="font-semibold text-stone-700">{product.rating}</span>
                    <span className="text-stone-400 ml-1">({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-stone-900 group-hover:text-rose-600 transition">
                  {product.name}
                </h3>
                <p className="text-stone-600 text-sm mt-2 line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                <span className="text-xl font-bold text-stone-900">${product.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-rose-50 hover:bg-rose-500 text-rose-600 hover:text-white rounded-lg text-sm font-semibold transition duration-200 flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}