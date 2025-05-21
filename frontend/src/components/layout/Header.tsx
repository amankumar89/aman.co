import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavItem } from "../../types";
import { cn } from "../../utils/cn";
import ThemeToggle from "../ThemeToggle";

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  // { label: "Admin Login", href: "/login" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md py-3 shadow-md"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent"
        >
          Aman.co
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col justify-center pt-8 p-8 space-y-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="justify-items-end m-[-1rem] text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
            aria-label="Toggle menu"
          >
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xl text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/login"
            className="text-xl text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium"
            onClick={() => setIsOpen(false)}
          >
            Admin Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
