"use client";

import { Github, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0f12] text-white py-16 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="text-xl font-bold tracking-tight text-white mb-2">
              olayemi<span className="text-white/40">.dev</span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Building digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/samuel025"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-2.5 rounded-xl hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://twitter.com/0xuell"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-2.5 rounded-xl hover:bg-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About", "Services", "Work", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/50 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white/90 uppercase tracking-widest mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-white/50">
              <li>Lagos, Nigeria</li>
              <li>samolayemi3@gmail.com</li>
              <li>+234 704 514 9800</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>
            © {new Date().getFullYear()} Olayemi Samuel. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div> All
              systems normal
            </span>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-[#11151a] border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all shadow-xl backdrop-blur-md"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
