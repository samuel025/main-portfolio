import ProjectCard from "./ProjectCard";
import { Github } from "lucide-react";

const projects = [
  {
    title: "School Management System",
    description:
      "A comprehensive school management system with features for students, teachers, and administrators.",
    date: "July 2021",
    image: "school/ground.png",
    images: [
      "/school/ground.png",
      "/school/ground1.png",
      "/school/ground2.png",
    ], // Added images array
    gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
    github: "https://github.com/yourusername/school-management",
    demo: "https://school-demo.com",
    tags: ["React", "Django", "PostgreSQL"],
  },
  {
    title: "Online Ecommerce Website",
    description:
      "A full-featured ecommerce platform with payment integration and order management.",
    date: "September 2021",
    image: "ecom/ecommerce.png",
    images: ["/ecom/ecom2.png", "/ecom/ecom3.png", "/ecom/ecommerce.png"], // Added images array
    gradient: "bg-gradient-to-br from-green-500 to-blue-600",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
    tags: ["NextJS", "Stripe", "TailwindCSS"],
  },
  {
    title: "A micro-blog app",
    description:
      "A full-featured ecommerce platform with payment integration and order management.",
    date: "September 2021",
    image: "ecom/ecommerce.png",
    images: ["/ecom/ecom2.png", "/ecom/ecom3.png", "/ecom/ecommerce.png"], // Added images array
    gradient: "bg-gradient-to-br from-green-500 to-blue-600",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
    tags: ["NextJS", "Stripe", "TailwindCSS"],
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            Portfolio
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works. Each project is carefully crafted
            with attention to detail and modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
