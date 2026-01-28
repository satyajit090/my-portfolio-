import React from "react"
import { Phone, Mail, MapPin, Linkedin, Github, Code2, Award } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-16 noise-bg bg-gradient-to-br from-[#0a0a12] via-[#0d0d18] to-[#0a0a12]"
    >
      {/* Gradient glows */}
      {/* <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            GET IN TOUCH
          </h2>
          <p className="font-mono text-[#00D4FF] text-lg italic">
            {"Let's Work Together"}
          </p>
        </div>

        {/* Contact Cards - Row 1 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-6">
          <ContactCard
            icon={<Phone className="w-7 h-7" />}
            title="Phone & Mobile"
            value="+91 8847816440"
            href="tel:+918847816440"
          />
          <ContactCard
            icon={<Mail className="w-7 h-7" />}
            title="Email"
            value="beherasatyajit090@gmail.com"
            href="mailto:beherasatyajit090@gmail.com"
          />
          <ContactCard
            icon={<MapPin className="w-7 h-7" />}
            title="Address"
            value="Bangalore, India"
          />
          <ContactCard
            icon={<Linkedin className="w-7 h-7" />}
            title="LinkedIn"
            value="@satyajit-behera"
            href="https://linkedin.com/in/satyajit-behera-5447621a0"
          />
        </div>

        {/* Contact Cards - Row 2 */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ContactCard
            icon={<Github className="w-7 h-7" />}
            title="GitHub"
            value="@satyajit090"
            href="https://github.com/satyajit090"
          />
          <ContactCard
            icon={<Code2 className="w-7 h-7" />}
            title="LeetCode"
            value="@beherasatyajit090"
            href="https://leetcode.com/u/beherasatyajit090/"
          />
          <ContactCard
            icon={<Award className="w-7 h-7" />}
            title="HackerRank"
            value="@beherasatyajit01"
            href="https://www.hackerrank.com/profile/beherasatyajit01"
          />
        </div>

        {/* Divider with dots */}
        <div className="flex items-center justify-center mt-12 mb-8">
          <div className="w-2 h-2 rounded-full border border-white/40" />
          <div className="w-64 md:w-96 h-px bg-gradient-to-r from-white/20 via-white/10 to-white/20 mx-4" />
          <div className="w-2 h-2 rounded-full border border-white/40" />
        </div>

        {/* Large Name Display */}
        <div className="text-center mb-8">
          <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold text-outline tracking-tight">
            SATYAJIT BEHERA
          </h3>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const Content = (
    <div className="flex flex-col items-center text-center p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#00D4FF]/30 transition-all group h-full">
      <div className="w-16 h-16 rounded-full border-2 border-[#00D4FF] flex items-center justify-center text-[#00D4FF] mb-4 group-hover:bg-[#00D4FF]/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm break-all">{value}</p>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block"
      >
        {Content}
      </a>
    );
  }

  return Content;
}
