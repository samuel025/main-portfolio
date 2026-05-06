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
    <section
      id="services"
      className="py-24 px-6 bg-[#0c0f12] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">My Services</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Specialized in building modern web applications with cutting-edge
            technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-8 transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.bgColor} p-3 mb-6 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center`}
                >
                  {React.cloneElement(service.icon, {
                    className: "w-8 h-8 text-white",
                  })}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <div className="mb-8">
                  <p className="text-white/60 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-emerald-400 shrink-0 mt-1"
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
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
