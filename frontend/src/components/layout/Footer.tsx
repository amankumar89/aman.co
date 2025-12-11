import React from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { email, github, linkedin, twitter } from "../../data/socials";
import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Aman.co
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Bringing creative ideas to life with code. Let's build something
              amazing together.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href={github}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a
              href={twitter}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={20} />
            </a>
            <a
              href={linkedin}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Kr.Aman. All rights reserved.{" "}
            {/* <a
              href="/login"
              className="underline"
              aria-label="Login"
              // target="_blank"
              // rel="noopener noreferrer"
            >
              Admin Login
            </a> */}
            <Link to="/login" className="underline">Admin Login</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
