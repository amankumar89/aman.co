import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
import {
  User,
  // Info,
  Zap,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Palette,
  LogOut,
} from "lucide-react";
import { MenuSection } from "../sections/Admins/types";

const { Sider } = Layout;

interface SidebarProps {
  activeSection: MenuSection;
  onSectionChange: (section: MenuSection) => void;
}

const menuItems = [
  {
    key: "hero" as MenuSection,
    icon: Palette,
    title: "Hero Section",
    description: "Main banner & intro",
  },
  {
    key: "aboutme" as MenuSection,
    icon: User,
    title: "About Me",
    description: "Personal information",
  },
  {
    key: "skills" as MenuSection,
    icon: Zap,
    title: "Skills",
    description: "Technical abilities",
  },
  {
    key: "experience" as MenuSection,
    icon: Briefcase,
    title: "Experience",
    description: "Work history",
  },
  {
    key: "education" as MenuSection,
    icon: GraduationCap,
    title: "Education",
    description: "Academic background",
  },
  {
    key: "projects" as MenuSection,
    icon: FolderOpen,
    title: "Projects",
    description: "Portfolio showcase",
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    // For example: redirect to login page, clear auth tokens, etc.
  };

  return (
    <StyledSider width={280} theme="dark">
      <MenuContainer>
        <Logo>Portfolio Admin</Logo>
        <div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.key;

            return (
              <MenuCard
                key={item.key}
                $isActive={isActive}
                onClick={() => onSectionChange(item.key)}
              >
                <IconWrapper $isActive={isActive}>
                  <Icon size={20} color={isActive ? "white" : "#1890ff"} />
                </IconWrapper>
                <div>
                  <MenuText>{item.title}</MenuText>
                  <MenuDescription>{item.description}</MenuDescription>
                </div>
              </MenuCard>
            );
          })}
        </div>

        <LogoutButton>
          <LogoutCard onClick={handleLogout}>
            <div className="logout-icon">
              <LogOut size={16} color="white" />
            </div>
            <div className="logout-text">Logout</div>
          </LogoutCard>
        </LogoutButton>
      </MenuContainer>
    </StyledSider>
  );
};

export default Sidebar;

const StyledSider = styled(Sider)`
  background: #001529 !important;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
`;

const MenuContainer = styled.div`
  padding: 24px 16px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
  padding: 16px 0;
  border-bottom: 1px solid #1f2937;
`;

const MenuCard = styled.div<{ $isActive: boolean }>`
  background: ${(props) => (props.$isActive ? "#1890ff" : "#1f2937")};
  border: 1px solid ${(props) => (props.$isActive ? "#40a9ff" : "#374151")};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    background: ${(props) => (props.$isActive ? "#40a9ff" : "#374151")};
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #1890ff;
  }
`;

const LogoutButton = styled.div`
  margin-top: auto;
  padding-top: 24px;
  border-top: 1px solid #1f2937;
`;

const LogoutCard = styled.div`
  background: #dc2626;
  border: 1px solid #ef4444;
  border-radius: 12px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: #ef4444;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(220, 38, 38, 0.25);
  }

  .logout-icon {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logout-text {
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
`;

const IconWrapper = styled.div<{ $isActive: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${(props) =>
    props.$isActive ? "rgba(255, 255, 255, 0.2)" : "rgba(24, 144, 255, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const MenuText = styled.div`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

const MenuDescription = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  margin-top: 2px;
`;
