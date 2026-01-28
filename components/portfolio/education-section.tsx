export function EducationSection() {
  return (
    <section
      id="education"
      className="relative py-16 noise-bg bg-gradient-to-br from-[#0a0a12] via-[#0d0d18] to-[#0a0a12]"
    >
      {/* Gradient glows */}
      {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" /> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Title and Description */}
          <div>
            {/* Large Year Display - Mobile Hidden */}
            <div className="hidden lg:block mb-12">
              <p className="text-7xl xl:text-8xl font-bold text-outline tracking-tight">
                2015 - 2019
              </p>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              EDUCATION
            </h2>
            <div className="w-32 h-1 bg-[#00D4FF] mb-8" />

            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              In the realm of technology, I have pursued knowledge with passion
              and dedication. The foundation laid during my academic years has
              been strengthened through continuous learning and hands-on
              experience. My quest for mastery remains eternal, with the
              ever-evolving world of software development fueling my growth.
            </p>
          </div>

          {/* Right - Education Cards */}
          <div className="space-y-8">
            <EducationCard
              degree="Bachelor of Technology"
              field="Computer Science and Engineering"
              institution="KMBB College of Engineering and Technology"
              location="Khorda, Odisha"
              period="2015 - 2019"
              score="CGPA: 7.63"
            />

            <EducationCard
              degree="Higher Secondary (10+2)"
              field="Science"
              institution="Gourav College of Science and Commerce"
              location="Bhubaneswar, Odisha"
              period="2013 - 2015"
              score="69.8%"
            />

            <EducationCard
              degree="Secondary Education (10th)"
              field="General Studies"
              institution="GC High School"
              location="Nuagarh, Odisha"
              period="2012 - 2013"
              score="66.6%"
            />
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

function EducationCard({
  degree,
  field,
  institution,
  location,
  period,
  score,
}: {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}) {
  return (
    <div className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#00D4FF]/30 transition-all group">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl font-bold text-white group-hover:text-[#00D4FF] transition-colors">
          {degree}
        </h3>
        <span className="font-mono text-[#00D4FF] text-sm whitespace-nowrap">
          {period}
        </span>
      </div>
      <p className="text-white/80 mb-2">{field}</p>
      <p className="text-white/60 text-sm">
        {institution}, {location}
      </p>
      <div className="mt-4 pt-4 border-t border-white/10">
        <span className="font-mono text-[#00D4FF] text-sm">{score}</span>
      </div>
    </div>
  );
}
