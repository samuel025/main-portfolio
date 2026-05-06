"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeClick = () => {
    // Opens the PDF in a new tab
    window.open("/Olayemi_Samuel.pdf", "_blank");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0c0f12]/80 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold tracking-tight text-white">
            olayemi<span className="text-white/40">.dev</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Services", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative font-medium text-sm tracking-wide text-white/70 hover:text-white transition-colors"
                onClick={(e) => {
                  if (item === "Home") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                {item}
              </a>
            ))}
            <button
              onClick={handleResumeClick}
              className="px-5 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium transition-all hover:bg-white/10 hover:border-white/40"
            >
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
          >
            <svg
              className="w-6 h-6"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#11151a]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 py-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-6 space-y-4">
          {["Home", "About", "Services", "Work", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-white/70 hover:text-white font-medium text-sm tracking-wide transition-colors"
              onClick={(e) => {
                if (item === "Home") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              {item}
            </a>
          ))}
          <button
            onClick={handleResumeClick}
            className="w-full mt-4 px-6 py-2.5 rounded-lg bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:bg-white/20"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
}
