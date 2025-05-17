import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { User, MapPin, Mail, Phone } from "lucide-react";
import { skills } from "../../data/skills";
import { cn } from "../../utils/cn";

const AboutSection: React.FC = () => {
  const [isVisible, ref] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  const categories = ["Programming Languages", "Frontend", "Backend", "Database", "Tools"] as const;

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Bio */}
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            )}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform -rotate-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Software Engineer with over 2 years of
                experience, including 9 months of internship and 1.3 years as a
                full-time developer. My expertise lies in frontend development,
                where I’ve built and maintained scalable web applications using
                React, Next.js, TypeScript, JavaScript, Tailwind CSS, and the
                Ant Design (antd) library. I have hands-on experience
                integrating both REST APIs and GraphQL into modern web
                interfaces. While my professional background is primarily
                frontend-focused, I also possess foundational knowledge of
                backend technologies such as Node.js, Express, MongoDB, SQL,
                EJS, JWT, and API development. I'm continuously expanding my
                backend skills to become a well-rounded full-stack developer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <User
                    className="text-indigo-600 dark:text-indigo-400 mr-3"
                    size={18}
                  />
                  <span className="text-gray-800 dark:text-gray-200">
                    Aman Kumar
                  </span>
                </div>
                <div className="flex items-center">
                  <MapPin
                    className="text-indigo-600 dark:text-indigo-400 mr-3"
                    size={18}
                  />
                  <span className="text-gray-800 dark:text-gray-200">
                    Mumbai, India
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail
                    className="text-indigo-600 dark:text-indigo-400 mr-3"
                    size={18}
                  />
                  <span className="text-gray-800 dark:text-gray-200">
                    amank2070@gmail.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone
                    className="text-indigo-600 dark:text-indigo-400 mr-3"
                    size={18}
                  />
                  <span className="text-gray-800 dark:text-gray-200">
                    +91 8969384792
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Skills */}
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform rotate-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                My Skills
              </h3>

              <div className="space-y-8">
                {categories.map((category, categoryIndex) => (
                  <div
                    key={category}
                    className={cn(
                      "transition-all duration-700 ease-out",
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                  >
                    <h4 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                      {category}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {skills?.[category].map((skill, index) => (
                          <div
                            key={skill.name}
                            className={cn(
                              "group flex items-center gap-2 bg-white dark:bg-gray-700 rounded-xl p-3",
                              "hover:bg-indigo-50 dark:hover:bg-gray-600 transition-all duration-300",
                              "transform hover:-translate-y-1 hover:shadow-lg"
                            )}
                            style={{
                              animationDelay: `${
                                (categoryIndex * 4 + index) * 100
                              }ms`,
                              animation: isVisible
                                ? "fadeIn 0.5s ease-out forwards"
                                : "none",
                            }}
                          >
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-6 h-6 object-contain"
                            />
                            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                              {skill.name}
                            </span>
                          </div>
                        ))}
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
};

export default AboutSection;
