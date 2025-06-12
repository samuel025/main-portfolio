"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { useState } from "react";
import { Monitor, Code, Cloud, ArrowRight } from "lucide-react";

// Add technology icons
const techIcons = {
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
  Django:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  Next: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const titles = React.useMemo(
    () => [
      "Backend Developer",
      "Full Stack Developer",
      "Software Engineer",
      "Django Expert",
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <div className="overflow-x-hidden w-full">
      {/* Enhanced Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              className={`text-2xl font-extrabold tracking-tight ${
                isScrolled ? "text-blue-600" : "text-white"
              }`}
            >
              <span className="text-blue-500">&lt;</span>
              Samuel
              <span className="text-blue-500">/&gt;</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["Home", "About", "Services", "Work", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`group relative font-medium text-sm tracking-wide ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30">
                Resume
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <svg
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
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
          className={`md:hidden absolute w-full bg-white/80 backdrop-blur-md transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 space-y-3">
            {["Home", "About", "Services", "Work", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-800 hover:text-blue-600 font-medium text-sm tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium transition-all hover:bg-blue-700">
              Resume
            </button>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-6 overflow-hidden bg-black">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-100">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/image.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(1px) brightness(0.6)", // Added brightness filter for darker effect
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

      <section
        id="about"
        className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              About Me
              <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0">
              {/* Left Column - Profile Card */}
              <div className="lg:col-span-2 p-8 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 mb-6">
                    <Image
                      src="/image.png"
                      alt="Profile"
                      width={160}
                      height={160}
                      className="rounded-full object-cover w-full h-full border-4 border-white/30"
                    />
                    <div className="absolute bottom-0 right-0 bg-green-400 w-5 h-5 rounded-full border-4 border-white"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Olayemi Samuel</h3>
                  <p className="text-blue-100 mb-6">Full Stack Developer</p>

                  <div className="space-y-3 w-full text-left">
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                      <span className="text-sm">sam_olayemi65@yahoo.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <span className="text-sm">07045149800</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - About & Skills */}
              <div className="lg:col-span-3 p-8">
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Background
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    My name is Olayemi Samuel, welcome to my portfolio. I am a
                    passionate Web Developer with expertise in building modern
                    web applications. I love coding, playing games, and
                    listening to music. I am always eager to learn new
                    technologies and take on challenging projects.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Technical Stack
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { name: "Python", icon: techIcons.Python },
                      { name: "Django", icon: techIcons.Django },
                      { name: "JavaScript", icon: techIcons.JavaScript },
                      { name: "HTML/CSS", icon: techIcons.HTML },
                      { name: "React.js", icon: techIcons.React },
                      { name: "NextJS", icon: techIcons.Next },
                      { name: "Git", icon: techIcons.Git },
                      { name: "Docker", icon: techIcons.Docker },
                      { name: "AWS", icon: techIcons.AWS },
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className="group flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300"
                      >
                        <Image
                          src={tech.icon}
                          alt={`${tech.name} icon`}
                          width={32}
                          height={32}
                          className="w-8 h-8 group-hover:scale-110 transition-transform"
                        />
                        <span className="font-medium text-gray-700 group-hover:text-blue-600">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-gray-100"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
              What I Can Do For You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized in building modern web applications with cutting-edge
              technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Monitor className="w-7 h-7" />,
                title: "Responsive Design",
                description:
                  "Creating fluid and adaptive web applications that provide seamless experience across all devices and screen sizes.",
              },
              {
                icon: <Code className="w-7 h-7" />,
                title: "Web Development",
                description:
                  "Full-stack development of modern web applications with robust backend systems and intuitive frontend interfaces.",
              },
              {
                icon: <Cloud className="w-7 h-7" />,
                title: "Web Hosting",
                description:
                  "Secure and scalable hosting solutions with continuous deployment, monitoring, and maintenance services.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Service Icon */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {React.cloneElement(service.icon, {
                      className:
                        "w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300",
                    })}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-blue-600 font-medium group/link">
                    <span className="mr-2">Learn More</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative Background */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-blue-600/5 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-blue-600/10" />
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center px-8 py-4 rounded-full bg-blue-600 text-white font-medium transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30">
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
