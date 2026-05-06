import Image from "next/image";
import { techIcons } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 bg-[#0c0f12] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            About Me
            <div className="w-16 h-1 bg-white/20 mx-auto mt-6 rounded-full"></div>
          </h2>
        </div>

        <div className="bg-[#11151a] rounded-[32px] border border-white/5 overflow-hidden">
          <div className="grid lg:grid-cols-5 gap-0">
            {/* Left Column - Profile Card */}
            <div className="lg:col-span-2 p-10 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center items-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center w-full text-center">
                <div className="relative w-44 h-44 mb-8">
                  <Image
                    src="/image.png"
                    alt="Profile"
                    width={176}
                    height={176}
                    className="rounded-full object-cover w-full h-full border-2 border-white/10 grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-2 right-2 bg-emerald-400 w-4 h-4 rounded-full border-2 border-[#11151a]"></div>
                </div>
                <h3 className="text-3xl font-semibold mb-2 text-white">
                  Olayemi Samuel
                </h3>
                <p className="text-white/50 font-medium tracking-wide text-sm uppercase mb-10">
                  Backend Developer
                </p>

                <div className="space-y-4 w-full text-left bg-white/5 rounded-2xl p-5 border border-white/5">
                  <div className="flex items-center space-x-4 text-white/70">
                    <svg
                      className="w-5 h-5 text-white/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span className="text-sm">samolayemi3@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 text-white/70">
                    <svg
                      className="w-5 h-5 text-white/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <span className="text-sm">07045149800</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - About & Skills */}
            <div className="lg:col-span-3 p-10 lg:p-14">
              <div className="prose max-w-none prose-invert">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Background
                </h3>
                <p className="text-white/60 leading-relaxed mb-12 text-lg">
                  My name is Olayemi Samuel, welcome to my portfolio. I am a
                  passionate Web Developer with expertise in building modern web
                  applications. I love coding, playing games, and listening to
                  music. I am always eager to learn new technologies and take on
                  challenging projects.
                </p>

          

                <h3 className="text-xl font-semibold text-white mb-6">
                  Technical Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { name: "Python", icon: techIcons.Python },
                    { name: "Django", icon: techIcons.Django },
                    { name: "JavaScript", icon: techIcons.JavaScript },
                    { name: "HTML/CSS", icon: techIcons.HTML },
                    { name: "React.js", icon: techIcons.React },
                    { name: "NextJS", icon: techIcons.Next },
                    { name: "Git", icon: techIcons.Git },
                    { name: "MongoDB", icon: techIcons.MongoDB },
                    { name: "PostgreSQL", icon: techIcons.PostgreSQL },
                    { name: "Spring Boot", icon: techIcons.SpringBoot },
                    { name: "Apache Kafka", icon: techIcons.Kafka },
                    { name: "Redis", icon: techIcons.Redis },
                  ].map((tech) => (
                    <div
                      key={tech.name}
                      className="group flex items-center justify-center space-x-3 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <Image
                        src={tech.icon}
                        alt={`${tech.name} icon`}
                        width={24}
                        height={24}
                        className="w-6 h-6 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all"
                      />
                      <span className="font-medium text-sm text-white/60 group-hover:text-white/90">
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
