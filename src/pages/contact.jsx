import { Check, Clock, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage({
  contactForm,
  handleContactChange,
  handleContactSubmit,
  contactSubmitted,
  resetContactForm
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">Get in Touch</h1>
        <p className="text-stone-600">
          Book a consultation, ask about our products, or drop by our studio for a transformation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Salon Details */}
        <div className="bg-stone-900 text-white p-8 rounded-2xl space-y-8 lg:col-span-1 shadow-xl">
          <div>
            <h2 className="text-2xl font-serif font-bold mb-4">Salon Info</h2>
            <p className="text-stone-400 text-sm leading-relaxed">
              We welcome walk-ins for product purchases and consultation. Hair styling requires booking in advance.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Studio Location</div>
                <div className="text-stone-400">123 Beauty Avenue, Suite 400<br />New York, NY 10001</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-stone-400">(555) 234-5678</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-stone-400">hello@luxelocks.com</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold">Opening Hours</div>
                <div className="text-stone-400">Tue - Sat: 9:00 AM - 7:00 PM<br />Sun - Mon: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Controls */}
        <div className="bg-white p-8 rounded-2xl border border-rose-100 shadow-sm lg:col-span-2">
          {contactSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900">Message Sent Successfully!</h3>
              <p className="text-stone-600 max-w-md mx-auto">
                Thank you for reaching out to LuxeLocks. A member of our styling team will get back to you within 24 hours.
              </p>
              <button
                onClick={resetContactForm}
                className="mt-4 px-6 py-2.5 bg-rose-600 text-white rounded-xl text-sm font-semibold hover:bg-rose-700 transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <h2 className="text-2xl font-serif font-bold text-stone-900 mb-6">Send Us a Message</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={contactForm.fullName}
                    onChange={handleContactChange}
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    required
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    placeholder="(555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Interest / Inquiry Type
                  </label>
                  <select
                    name="serviceInterest"
                    value={contactForm.serviceInterest}
                    onChange={handleContactChange}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition bg-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Hair Cut & Styling">Hair Cut & Styling</option>
                    <option value="Coloring & Balayage">Coloring & Balayage</option>
                    <option value="Hair Products Question">Hair Products Question</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Your Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                  placeholder="Tell us about your hair goals or how we can help you..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl shadow-md shadow-rose-200 transition duration-200"
              >
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}