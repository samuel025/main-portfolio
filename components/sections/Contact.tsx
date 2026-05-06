import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-[#0c0f12] text-white border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/70 mb-4">
            Contact
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Let&apos;s discuss your project and see how I can help bring your
            ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8 md:col-span-2">
            <div className="flex items-start space-x-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white/70" />
              </div>
              <div className="pt-1">
                <h3 className="font-semibold mb-1 text-white/90">Email</h3>
                <a
                  href="mailto:sam_olayemi65@yahoo.com"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  samolayemi3@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white/70" />
              </div>
              <div className="pt-1">
                <h3 className="font-semibold mb-1 text-white/90">Phone</h3>
                <a
                  href="tel:+2347045149800"
                  className="text-white/50 hover:text-white transition-colors"
                >
                  +234 704 514 9800
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white/70" />
              </div>
              <div className="pt-1">
                <h3 className="font-semibold mb-1 text-white/90">Location</h3>
                <p className="text-white/50">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 md:col-span-3 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 bg-[#0c0f12] border border-white/10 rounded-xl focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder:text-white/30"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 bg-[#0c0f12] border border-white/10 rounded-xl focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder:text-white/30"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-4 bg-[#0c0f12] border border-white/10 rounded-xl focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder:text-white/30"
              />
            </div>
            <div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-5 py-4 bg-[#0c0f12] border border-white/10 rounded-xl focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all text-white placeholder:text-white/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
