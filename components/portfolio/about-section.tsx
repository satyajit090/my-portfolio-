export function AboutSection() {
  const skills = [
    "JAVA",
    "SPRING BOOT",
    "MICROSERVICES",
    "AWS",
    "REST APIs",
    "SQL",
  ];

  return (
    <section
      id="about"
      className="relative py-16 noise-bg bg-gradient-to-br from-[#0a0a12] via-[#0d0d18] to-[#0a0a12]"
    >
      {/* Gradient glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left - Decorative (2 cols) */}
          <div className="lg:col-span-2 relative flex items-center justify-center lg:justify-start">
            {/* Dot pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 dot-pattern opacity-40" />
            
            <p className="font-mono text-7xl md:text-8xl lg:text-9xl text-white/10 font-bold leading-none tracking-tight text-center lg:text-left">
              WHO
              <br />
              AM I
              <br />
              ?
            </p>
          </div>

          {/* Right - Content (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                MY BIOGRAPHY
              </h2>
              <div className="w-48 h-1 bg-[#00D4FF]" />
            </div>

            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Experienced Backend Developer with expertise in Java, Spring Boot
              and Microservices architecture, along with strong knowledge of AWS
              Cloud. Proficient in designing and developing RESTful APIs and
              cloud-native applications that power enterprise solutions.
            </p>

            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              {"I'm a passionate engineer who believes in mastering skills and "}
              working toward continuous progress and development. My journey
              spans across multiple organizations where I{"'"}ve contributed to
              building scalable, secure, and high-performance applications.
            </p>

            <div className="pt-2">
              <h3 className="text-lg font-semibold text-white mb-4">
                Skill & Interest
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-white/20 bg-white/5 font-mono text-sm text-white/80 tracking-wider hover:border-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
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
