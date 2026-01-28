import { ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Athrv Cloud LTD",
    role: "Software Development Engineer",
    period: "SEP 2024 - DEC 2025",
    description:
      "Designed and developed cloud-native REST APIs using Flask and Spring Boot. Automated reporting pipelines reducing manual time by 60%. Implemented CI/CD pipelines with integrated code quality tools.",
  },
  {
    company: "Infosys LTD",
    role: "System Engineer",
    period: "DEC 2021 - FEB 2024",
    description:
      "Contributed to VERSO-ADC project for Mercedes-Benz. Developed controllers and business layers using Spring Boot and REST. Implemented Agile Scrum methodology for software development.",
  },
  {
    company: "Intellect Design Arena LTD",
    role: "System Trainee",
    period: "OCT 2020 - DEC 2021",
    description:
      "Contributed to DPST banking system development as a Backend Developer. Worked on automating banking systems through CBX Front Office and Back Office. Developed Jasper iReports for business requirements.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-16 noise-bg bg-gradient-to-br from-[#0a0a12] via-[#0d0d18] to-[#0a0a12]"
    >
      {/* Gradient glows */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Title */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              EXPERIENCE
            </h2>
            <div className="w-32 h-1 bg-[#00D4FF] mb-12" />

            {/* Experience Items */}
            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4">
                  {/* Chevron icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex text-[#00D4FF]">
                      <ChevronRight size={20} strokeWidth={3} className="-mr-2" />
                      <ChevronRight size={20} strokeWidth={3} />
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-[#00D4FF] font-mono text-sm mt-1">
                      {exp.role} {exp.period}
                    </p>
                    <p className="text-white/60 mt-3 leading-relaxed text-sm">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Large Year Display */}
          <div className="hidden lg:flex items-start justify-end">
            <div className="text-right">
              <p className="text-8xl xl:text-9xl font-bold text-outline tracking-tight">
                2020
              </p>
              <p className="text-8xl xl:text-9xl font-bold text-outline tracking-tight -mt-4">
                -
              </p>
              <p className="text-8xl xl:text-9xl font-bold text-outline tracking-tight -mt-4">
                2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom timeline decoration */}
      <div className="px-6 mt-12">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="w-2 h-2 rounded-full border border-white/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-white/10 to-white/20" />
          <div className="w-2 h-2 rounded-full border border-white/40" />
        </div>
      </div>
    </section>
  );
}
