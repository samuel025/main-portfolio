"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const TITLES = ["Backend Developer", "API Developer", "Spring Boot Developer"];

export default function Hero() {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 95;
    const currentTitle = TITLES[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1700);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        setCurrentText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentTitle.slice(0, prev.length + 1),
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 520);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0c0f12]">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>
        <div className="absolute top-32 right-10 h-96 w-96 rounded-full bg-amber-300/10 blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-emerald-400/10 blur-[140px]"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center pt-32 pb-16 px-6 lg:pt-40">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          <h1 className="text-balance text-5xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            I build resilient backends and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              modern APIs
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-pretty text-base text-slate-300 sm:text-lg">
            Hi, I&apos;m Olayemi Samuel. I design reliable systems, clean
            interfaces, and scalable integrations for teams that value clarity
            and performance.
          </p>

          <div className="flex h-8 items-center justify-center text-lg font-medium text-slate-300">
            <span className="tracking-wide">
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

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              View selected work
              <span className="text-base transition group-hover:translate-x-1">
                -&gt;
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white/90 transition hover:border-white/40 hover:bg-white/5"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Code Editor Screenshot Window */}
        <div className="relative mt-16 w-full max-w-5xl md:mt-24">
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-b from-white/10 to-transparent opacity-50 blur-sm"></div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#1e1e1e] shadow-2xl shadow-black/80 ring-1 ring-white/5">
            {/* Editor Top Bar */}
            <div className="flex h-11 w-full items-center border-b border-white/5 bg-[#2d2d2d] px-4">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
                <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <div className="mx-auto flex items-center justify-center space-x-2 text-xs text-white/40">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span>backend - workspace</span>
              </div>
            </div>

            {/* Editor Image Container */}
            <div className="relative aspect-video w-full sm:aspect-[16/8]">
              <Image
                src="/image.png"
                alt="VS Code Environment"
                fill
                priority
                className="object-cover object-top opacity-90 transition-opacity hover:opacity-100"
                sizes="(min-width: 1280px) 1000px, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
