import React, { useState } from "react";
import { ConfigProvider, Layout } from "antd";
import Sidebar from "../components/layout/Sidebar";
import ContentArea from "../components/layout/ContentArea";

type MenuSection =
  | "hero"
  | "aboutme"
  | "skills"
  | "experience"
  | "education"
  | "projects";

const { Content } = Layout;

const theme = {
  token: {
    colorPrimary: "#1890ff",
    borderRadius: 8,
  },
};

const DashboardPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<MenuSection>("hero");

  return (
    <ConfigProvider theme={theme}>
      <Layout className="min-h-screen">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <Layout>
          <Content className="bg-gray-50">
            <ContentArea activeSection={activeSection} />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default DashboardPage;
