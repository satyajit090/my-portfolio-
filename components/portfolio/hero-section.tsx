import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden noise-bg bg-gradient-to-br from-[#0a0a12] via-[#0d0d18] to-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <p className="font-mono text-[#00D4FF] text-sm tracking-wider mb-4">
                Hello !!!
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                I'm Satyajit Behera
              </h1>
            </div>

            <div className="inline-block px-4 py-2 bg-[#00D4FF] text-[#0a0a12]">
              <span className="font-mono text-sm font-semibold tracking-wider">
                BACKEND DEVELOPER | JAVA | SPRING BOOT | AWS
              </span>
            </div>

            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              I specialize in developing scalable backend systems and cloud-native
              applications for modern enterprises. Leveraging microservices
              architecture and AWS, I turn complex technical challenges into
              robust, efficient, and high-performance solutions.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://linkedin.com/in/satyajit-behera-5447621a0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition"
              >
                <Github size={20} />
              </a>

              <a
                href="mailto:beherasatyajit090@gmail.com"
                className="p-3 rounded-full border border-[#00D4FF]/30 text-[#00D4FF] hover:bg-[#00D4FF]/10 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
                <Image
                  src="/images/image.png"
                  alt="Satyajit Behera"
                  fill
                  className="object-cover object-top rounded-lg grayscale"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-16 lg:mt-24">
          <StatBadge value="4+" label="YEARS OF SERVICE" />
          <StatBadge value="5+" label="PROJECTS" />
          <StatBadge value="3" label="COMPANIES" />

          {/* DOWNLOAD CV – SAME STYLE + ANIMATION */}
          <a href="/cv/Satyajit_Behera_Resume.pdf" download>
            <StatBadge value="⬇️" label="DOWNLOAD CV" isAnimated />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatBadge({
  value,
  label,
  isAnimated = false,
}: {
  value: string;
  label: string;
  isAnimated?: boolean;
}) {
  return (
    <div
      className={`relative px-6 py-3 rounded-full border bg-white/5 backdrop-blur-sm cursor-pointer transition-all
      ${
        isAnimated
          ? "border-white/30 animate-pulse hover:shadow-[0_0_18px_rgba(255,255,255,0.15)] hover:-translate-y-1"
          : "border-white/20 hover:bg-white/10"
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`font-mono text-xl font-bold text-white ${
            isAnimated ? "animate-bounce" : ""
          }`}
        >
          {value}
        </span>

        <span className="font-mono text-xs text-white/60 tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}
