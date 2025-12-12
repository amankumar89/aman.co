import React from "react";
import styled from "styled-components";
import HeroSection from "../sections/Admins/HeroSection";
import AboutMeSection from "../sections/Admins/AboutMeSection";
import SkillsSection from "../sections/Admins/SkillsSection";
import ExperienceSection from "../sections/Admins/ExperienceSection";
import EducationSection from "../sections/Admins/EducationSection";
import ProjectsSection from "../sections/Admins/ProjectsSection";
import { MenuSection } from "../sections/Admins/types";

interface ContentAreaProps {
  activeSection: MenuSection;
}

const ContentWrapper = styled.div`
  padding: 32px;
  min-height: 100vh;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContentArea: React.FC<ContentAreaProps> = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "hero":
        return <HeroSection />;
      case "aboutme":
        return <AboutMeSection />;
      case "skills":
        return <SkillsSection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "projects":
        return <ProjectsSection />;
      default:
        return <HeroSection />;
    }
  };

  return <ContentWrapper>{renderContent()}</ContentWrapper>;
};

export default ContentArea;
