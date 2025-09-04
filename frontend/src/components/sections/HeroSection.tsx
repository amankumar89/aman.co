import React, { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { email, github, linkedin } from "../../data/socials";
// import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    setTimeout(() => {
      title.classList.add("animate-in");
    }, 100);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10 z-0">
        <svg
          className="w-full h-full"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            className="text-indigo-300 dark:text-indigo-700"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            style={{ transitionDelay: "200ms" }}
          >
            {/* <span className="block text-gray-900 dark:text-gray-100">Full Stack Software Engineer</span> */}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent inline-block mt-2">
              MERN Stack Developer
            </span>
          </h1>

          <p
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl opacity-0 translate-y-8 animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            Passionate about building scalable, high-performance web
            applications using modern technologies. Expertise in the MERN stack,
            RESTful API design, and end-to-end development of production-ready
            solutions. Committed to clean code, agile practices, and delivering
            impactful user experiences.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            {/* <Button size="lg">
              View My Projects
            </Button> */}
            {/* <Button variant="outline" size="lg">
              Download Resume
            </Button> */}
          </div>

          <div
            className="mt-10 flex items-center space-x-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "800ms" }}
          >
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <Github size={22} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
