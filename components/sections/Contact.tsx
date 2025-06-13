import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">
            Contact
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let&apos;s discuss your project and see how I can help bring your
            ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/10 rounded-lg p-3">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a
                  href="mailto:sam_olayemi65@yahoo.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  sam_olayemi65@yahoo.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/10 rounded-lg p-3">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+2347045149800"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +234 704 514 9800
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/10 rounded-lg p-3">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-gray-400">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-white/5 border border-gray-800 rounded-lg focus:outline-none focus:border-blue-400 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
