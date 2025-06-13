"use client";

import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Samuel<span className="text-blue-400">.</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Building digital experiences with modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-lg hover:bg-blue-600/10 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-lg hover:bg-blue-600/10 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-lg hover:bg-blue-600/10 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Services", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Lagos, Nigeria</li>
              <li>sam_olayemi65@yahoo.com</li>
              <li>+234 704 514 9800</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Samuel. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}
