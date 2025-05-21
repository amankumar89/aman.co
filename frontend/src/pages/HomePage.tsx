import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";

const HomePage = () => {
  return (
    <div className="w-screen min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
