import Image from "next/image";
import { techIcons } from "@/lib/constants";

export default function About() {
  return (
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
                <p className="text-blue-100 mb-6">Backend Developer</p>

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
                  passionate Web Developer with expertise in building modern web
                  applications. I love coding, playing games, and listening to
                  music. I am always eager to learn new technologies and take on
                  challenging projects.
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
  );
}
