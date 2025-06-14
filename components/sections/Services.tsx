import { Code, Cloud, Database, Wallet } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "API Development",
    description:
      "Building robust and scalable RESTful APIs with secure authentication, documentation, and seamless third-party integrations.",
    features: [
      "RESTful API Design",
      "Authentication & Authorization",
      "API Documentation",
      "Third-party Integrations",
    ],
    bgColor: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Full-stack development of modern web applications with robust backend systems and intuitive frontend interfaces.",
    features: [
      "Frontend Development",
      "Backend Development",
      "Database Design",
      "Performance Optimization",
    ],
    bgColor: "from-green-500/20 to-teal-500/20",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Web Hosting",
    description:
      "Secure and scalable hosting solutions with continuous deployment, monitoring, and maintenance services.",
    features: ["Cloud Deployment"],
    bgColor: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Web3 Development",
    description:
      "Building decentralized applications (dApps) with smart contracts, blockchain integration, and crypto wallet connectivity.",
    features: [
      "Smart Contracts",
      "dApp Development",
      "Wallet Integration",
      "Blockchain Solutions",
    ],
    bgColor: "from-purple-500/20 to-indigo-500/20",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized in building modern web applications with cutting-edge
            technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-visible rounded-2xl bg-white p-6 lg:p-8 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative z-10">
                {/* Icon - reduced sizes */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.bgColor} p-3 mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  {React.cloneElement(service.icon, {
                    className: "w-10 h-10 text-gray-800",
                  })}
                </div>

                {/* Content - adjusted text sizes */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <div className="mb-6">
                  <p className="text-gray-600 text-base whitespace-normal">
                    {service.description}
                  </p>
                </div>

                {/* Features - reduced spacing */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-blue-500 shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm whitespace-normal">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Background Gradient - reduced size */}
              <div
                className={`absolute top-0 right-0 -mr-12 -mt-12 w-36 h-36 rounded-full bg-gradient-to-br ${service.bgColor} opacity-50 transition-all duration-500 group-hover:scale-150`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
