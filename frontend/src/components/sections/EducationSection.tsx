import React from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { educations } from "../../data/educations";
import { cn } from "../../utils/cn";
import { GraduationCap } from "lucide-react";

const EducationSection: React.FC = () => {
  const [isVisible, ref] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true,
  });

  return (
    <section
      id="education"
      ref={ref as React.RefObject<HTMLElement>}
      className="overflow-hidden py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300">
            A timeline of my education journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:translate-x-px"></div>

          {/* Timeline items */}
          {educations.map((education, index) => (
            <div
              key={education.id}
              className={cn(
                "relative mb-12 md:mb-16 transition-all duration-700 ease-out",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={cn(
                  "flex flex-col md:flex-row items-center",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Timeline bullet point */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center transform -translate-x-1/2 z-10 shadow-md">
                  <GraduationCap className="text-white" size={20} />
                </div>

                {/* Content */}
                <div
                  className={cn(
                    "w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0",
                    index % 2 === 0
                      ? "md:mr-0 md:ml-auto"
                      : "md:ml-0 md:mr-auto"
                  )}
                >
                  <div
                    className={cn(
                      "bg-gray-50 dark:bg-gray-800 rounded-lg p-3 shadow-lg hover:shadow-xl transition-shadow relative",
                      index % 2 === 0
                        ? "md:transform md:rotate-1"
                        : "md:transform md:-rotate-1"
                    )}
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {education.degree}
                    </h3>
                    <h4 className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                      {education.institution}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      {education.duration}, {education.location}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
