export function SkillsSection() {
  const skillCategories = [
    {
      title: "Backend Development:",
      skills: "Java, Spring Boot, Hibernate, JPA, REST APIs, Microservices Architecture, Maven",
    },
    {
      title: "Cloud Platforms:",
      skills: "AWS S3, DynamoDB, Lambda, API Gateway, CloudWatch, SQS, GCP",
    },
    {
      title: "Databases:",
      skills: "MySQL, Oracle, DynamoDB (NoSQL), Performance Tuning, Query Optimization",
    },
    {
      title: "DevOps & Tools:",
      skills: "CI/CD Pipelines, GitHub, Postman, Docker, SonarQube, Trivy, Linux",
    },
    {
      title: "Web Technologies:",
      skills: "HTML5, CSS, RESTful Services, API Integration",
    },
    {
      title: "Methodologies:",
      skills: "Agile, Scrum, JIRA, Code Reviews, Cross-functional Collaboration",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-16 noise-bg bg-gradient-to-br from-[#0a0a12] via-[#0d0d18] to-[#0a0a12]"
    >
      {/* Gradient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            SKILLS & INTERESTS
          </h2>
          <div className="w-32 h-1 bg-[#00D4FF]" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                <span className="text-[#00D4FF] mr-2">·</span>
                {category.title}
              </h3>
              <p className="text-white/60 leading-relaxed pl-4">
                {category.skills}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <HighlightCard
            number="01"
            title="Cloud-Native"
            description="Building scalable applications with AWS services and microservices architecture"
          />
          <HighlightCard
            number="02"
            title="Performance"
            description="Code optimization, concurrency handling, and efficient memory management"
          />
          <HighlightCard
            number="03"
            title="Quality"
            description="CI/CD automation, code reviews, and maintaining high code quality standards"
          />
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

function HighlightCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#00D4FF]/30 transition-colors group">
      <span className="font-mono text-[#00D4FF] text-sm">{number}</span>
      <h4 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-[#00D4FF] transition-colors">
        {title}
      </h4>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
