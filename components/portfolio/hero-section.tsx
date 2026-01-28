import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden noise-bg bg-gradient-to-br from-[#0a0a12] via-[#0d0d18] to-[#0a0a12]">
      {/* Gradient glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Dot pattern decoration */}
              <div className="absolute -top-8 -right-8 w-32 h-32 dot-pattern opacity-60" />
              
              {/* Profile Image */}
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
                <Image
                  src="/images/image.png"
                  alt="Satyajit Behera"
                  fill
                  className="object-cover object-top rounded-lg grayscale"
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="font-mono text-[#00D4FF] text-sm tracking-wider mb-4">
                Hello !!!
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {"I'm Satyajit"}
                <br />
                Behera
              </h1>
            </div>

            <div className="inline-block px-4 py-2 bg-[#00D4FF] text-[#0a0a12]">
              <span className="font-mono text-sm font-semibold tracking-wider">
                BACKEND DEVELOPER | JAVA | SPRING BOOT | AWS
              </span>
            </div>

            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              I craft scalable backend systems and cloud-native applications 
              that power modern enterprises. With expertise in microservices 
              architecture and AWS, I transform complex requirements into 
              elegant, high-performance solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com/in/satyajit-behera-5447621a0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:beherasatyajit090@gmail.com"
                className="p-3 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-16 lg:mt-24">
          <StatBadge value="4+" label="YEARS OF SERVICE" />
          <StatBadge value="10+" label="PROJECTS" />
          <StatBadge value="3" label="COMPANIES" />
        </div>
      </div>

      {/* Bottom timeline decoration */}
      <div className="px-6 pb-6 mt-8">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="w-2 h-2 rounded-full border border-white/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-white/20 via-white/10 to-white/20" />
          <div className="w-2 h-2 rounded-full border border-white/40" />
        </div>
      </div>
    </section>
  );
}

function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-6 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xl font-bold text-white">{value}</span>
        <span className="font-mono text-xs text-white/60 tracking-wider">{label}</span>
      </div>
    </div>
  );
}
