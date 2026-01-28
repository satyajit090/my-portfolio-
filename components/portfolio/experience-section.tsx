import { ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Athrv Cloud LTD",
    role: "Software Development Engineer",
    period: "SEP 2024 - DEC 2025",
    description: `
Athrv Cloud Platform is a microservices-based system designed to simplify and automate software delivery and operations for embedded applications.

It delivers key features such as automated code scanning, Unit Testing, Memory Testing, FOSS Analysis, notification services, and real-time dashboards while ensuring scalability, performance, and security.

The platform is built using Spring Boot (Java) to provide RESTful APIs for business logic, automation, and secure data processing.

The ReactJS frontend enables real-time dashboards, authentication workflows, and interactive user experiences with JWT-based access control.

AWS cloud services are leveraged for databases, storage, CDN, messaging, logging, and monitoring to deliver a fault-tolerant, event-driven architecture.

Role and Responsibilities:
• Designed and developed cloud-native REST APIs using Spring Boot  
• Automated PDF/CSV reporting pipelines, reducing manual effort by 60%  
• Implemented CI/CD pipelines with CPPUTest, Trivy, Flawfinder, SonarQube, and Valgrind  
• Used AWS services: S3, DynamoDB, SQS, Lambda, API Gateway, CloudWatch  
• Collaborated in Agile Scrum with cross-functional teams
`,
  },
  {
    company: "Infosys LTD",
    role: "System Engineer",
    period: "DEC 2021 - FEB 2024",
    description: `
Project: VERSO-ADC
Client: Mercedes-Benz

We developed invoicing systems to meet business and customer needs using Microservices, REST APIs, Spring Boot, and pub-sub architecture.

Role and Responsibilities:
• Contributed to analysis and development  
• Developed controllers and business layers using Spring Boot  
• Integrated downstream system APIs for invoice generation  
• Fixed bugs and implemented change requests  
• Worked in Agile Scrum methodology  
• Collaborated with business analysts and clients
`,
  },
  {
    company: "Intellect Design Arena LTD",
    role: "System Trainee",
    period: "OCT 2020 - DEC 2021",
    description: `
CBX application supports Corporate Banking services.

Role and Responsibilities:
• Backend development for banking systems  
• Automated front-office and back-office workflows  
• Worked with Spring Boot, SQL, Hibernate, JPA, Jasper iReport  
• Developed reports for SCF projects  
• Participated in code reviews and quality improvements
`,
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-16 noise-bg bg-gradient-to-br from-[#0a0a12] via-[#0d0d18] to-[#0a0a12]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              EXPERIENCE
            </h2>
            <div className="w-32 h-1 bg-[#00D4FF] mb-12" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex text-[#00D4FF]">
                      <ChevronRight size={20} strokeWidth={3} className="-mr-2" />
                      <ChevronRight size={20} strokeWidth={3} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-[#00D4FF] font-mono text-sm mt-1">
                      {exp.role} • {exp.period}
                    </p>
                    <pre className="text-white/60 mt-3 leading-relaxed text-sm whitespace-pre-wrap">
                      {exp.description}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-start justify-end">
            <div className="text-right">
              <p className="text-8xl xl:text-9xl font-bold text-outline">2020</p>
              <p className="text-8xl xl:text-9xl font-bold text-outline -mt-4">
                -
              </p>
              <p className="text-8xl xl:text-9xl font-bold text-outline -mt-4">
                2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
