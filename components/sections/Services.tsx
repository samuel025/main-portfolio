import { Code, Cloud, ArrowRight, Database } from "lucide-react"; // Changed Monitor to Database
import React from "react";

export default function Services() {
  return (
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
              icon: <Database className="w-7 h-7" />, // Changed icon
              title: "API Development",
              description:
                "Building robust and scalable RESTful APIs with secure authentication, documentation, and seamless third-party integrations.",
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
  );
}
