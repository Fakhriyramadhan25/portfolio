import { ReactNode } from "react";
import { FaGraduationCap, FaMapMarkedAlt, FaCode } from "react-icons/fa";

export default function About({ title }: { title: ReactNode }) {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center bg-primary px-6 py-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute -left-20 top-20 h-64 w-64 animate-pulse rounded-full bg-highlight blur-3xl"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute -right-20 bottom-20 h-96 w-96 animate-pulse rounded-full bg-highlight blur-3xl"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        ></div>
      </div>

      {/* Container */}
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Title */}
        {title && (
          <h2 className="mb-16 text-center text-4xl font-bold text-text lg:text-6xl">
            {title}
          </h2>
        )}

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-[300px,1fr]">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="group relative">
              <div className="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-highlight to-highlight/50 opacity-75 blur-lg transition duration-1000 group-hover:opacity-100"></div>
              <img
                src="face.jpg"
                className="relative h-64 w-64 rounded-full border-4 border-highlight object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105 lg:h-72 lg:w-72"
                alt="Fakhriy Ramadhan"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Educational Background */}
            <div className="rounded-2xl border border-highlight/20 bg-secondary/30 p-8 backdrop-blur-sm transition-all duration-300 hover:border-highlight/40 hover:shadow-[0_0_30px_rgba(var(--highlight-rgb),0.2)]">
              <div className="mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-4xl text-highlight" />
                <h3 className="text-2xl font-bold text-text lg:text-3xl">
                  Educational <span className="text-highlight">Background</span>
                </h3>
              </div>

              <div className="space-y-4">
                {[
                  {
                    degree: "MSc. Smart Cities & Communities",
                    institution: "Heriot Watt University",
                    years: "2021-2023",
                    delay: "0s",
                  },
                  {
                    degree: "MSc. ICT",
                    institution: "International Hellenic University",
                    years: "2021-2023",
                    delay: "0.1s",
                  },
                  {
                    degree: "BE. Geodetic and Geomatic",
                    institution: "Institut Teknologi Bandung",
                    years: "2015-2019",
                    delay: "0.2s",
                  },
                ].map((edu, index) => (
                  <div
                    key={index}
                    className="group/item relative overflow-hidden rounded-xl border border-highlight/10 bg-primary/50 p-5 transition-all duration-300 hover:border-highlight/30 hover:bg-primary/70 hover:shadow-lg"
                    style={{ animationDelay: edu.delay }}
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-highlight opacity-0 transition-opacity duration-300 group-hover/item:opacity-100"></div>
                    <div className="pl-4">
                      <h4 className="mb-1 text-lg font-semibold text-text">
                        {edu.degree}
                      </h4>
                      <p className="text-text/70">{edu.institution}</p>
                      <p className="mt-1 text-sm text-highlight">{edu.years}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
