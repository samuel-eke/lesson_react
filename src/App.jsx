import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import LandingPage from "./pages/landing";
import Header from "./components/header";
import GalleryPage from "./pages/gallery";
import ContactPage from "./pages/contact";
import CartDrawer from "./components/cartdrawer";
import Footer from "./components/footer";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [contactForm, setContactForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: 'General Inquiry',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  
  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id, delta) => {
    setCart(prevCart =>
      prevCart
        .map(item => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (contactForm.fullName && contactForm.email && contactForm.message) {
      setContactSubmitted(true);
    }
  };

  const resetContactForm = () => {
    setContactForm({
      fullName: '',
      email: '',
      phone: '',
      serviceInterest: 'General Inquiry',
      message: ''
    });
    setContactSubmitted(false);
  };

  const navigateTo = (page) => {
    setMobileMenuOpen(false);
    navigate(page === "landing" ? "/" : `/${page}`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-rose-50/30 text-stone-800 font-sans flex flex-col justify-between selection:bg-rose-200">
      <Header
        cartItemCount={cartItemCount}
        setIsCartOpen={setIsCartOpen}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage navigateTo={navigateTo} />} />
          <Route
            path="/gallery"
            element={
              <GalleryPage
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                addToCart={addToCart}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                contactForm={contactForm}
                handleContactChange={handleContactChange}
                handleContactSubmit={handleContactSubmit}
                contactSubmitted={contactSubmitted}
                resetContactForm={resetContactForm}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <CartDrawer
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        cartTotal={cartTotal}
        navigateTo={navigateTo}
      />

      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App