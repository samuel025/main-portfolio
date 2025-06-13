"use client";
import { useState, useEffect } from "react";
import { useMemo } from "react";

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const titles = useMemo(
    () => ["Backend Developer", "API developer", "Django Developer"],
    []
  );

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentTitle.slice(0, prev.length + 1)
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, titles]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);
  // ... typing effect useEffects ...

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden bg-black">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.6)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full border border-gray-500/30 text-gray-300 text-sm font-medium bg-white/5">
            Welcome to my portfolio
          </span>
        </div>
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Olayemi Samuel
          </span>
        </h1>
        <div className="text-xl md:text-3xl text-gray-300 mb-12 h-16 flex items-center justify-center font-medium">
          <span>
            {currentText}
            <span
              className={`ml-1 text-white ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity`}
            >
              |
            </span>
          </span>
        </div>
        <div className="flex items-center justify-center space-x-6">
          <button className="px-8 py-4 rounded-full bg-white text-black font-medium transition-all hover:bg-gray-100 hover:shadow-xl hover:shadow-white/20">
            View My Work
          </button>
          <button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium transition-all hover:bg-white/10">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
}
