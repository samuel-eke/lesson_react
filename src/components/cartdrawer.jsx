import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

export default function CartDrawer({ 
  isCartOpen, 
  setIsCartOpen, 
  cart, 
  updateQuantity, 
  removeFromCart, 
  cartTotal, 
  navigateTo
}) {
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        onClick={() => setIsCartOpen(false)} 
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          <div className="p-6 border-b border-stone-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-rose-600" />
              <h2 className="text-lg font-bold text-stone-900">Your Hair Care Cart</h2>
            </div>
            <button 
              onClick={() => setIsCartOpen(false)} 
              className="p-2 text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 divide-y divide-stone-100">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <ShoppingBag className="w-12 h-12 text-stone-300 mx-auto" />
                <p className="text-stone-500 font-medium">Your cart is empty.</p>
                <button
                  onClick={() => { setIsCartOpen(false); navigateTo('gallery'); }}
                  className="text-xs font-bold text-rose-600 uppercase tracking-wider hover:underline"
                >
                  Browse Hair Products
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="py-4 flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 object-cover rounded-lg border border-stone-100"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-stone-900">{item.name}</h4>
                    <div className="text-xs text-stone-500 mt-0.5">${item.price.toFixed(2)} each</div>
                    
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 border border-stone-200 rounded text-stone-600 hover:bg-stone-100"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-semibold text-stone-800 px-2">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 border border-stone-200 rounded text-stone-600 hover:bg-stone-100"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-bold text-stone-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-rose-500 p-1 mt-2 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 border-t border-stone-100 bg-stone-50 space-y-4">
              <div className="flex justify-between items-center text-stone-600 text-sm">
                <span>Subtotal</span>
                <span className="font-semibold text-stone-900">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-stone-600 text-sm">
                <span>Shipping</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-semibold">Free</span>
              </div>
              <div className="border-t border-stone-200 pt-3 flex justify-between items-center text-base font-bold text-stone-900">
                <span>Total</span>
                <span className="text-rose-600">${cartTotal.toFixed(2)}</span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl shadow-md transition"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}