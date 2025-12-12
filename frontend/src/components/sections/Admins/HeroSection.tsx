import React, { useState } from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { Palette, Save } from "lucide-react";
import styled from "styled-components";
import { HeroData } from "../../types/dashboard";

const { Title } = Typography;
const { TextArea } = Input;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const StyledCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: none;

  .ant-card-head {
    border-bottom: 1px solid #f0f0f0;
    padding: 20px 24px;
  }

  .ant-card-body {
    padding: 32px 24px;
  }
`;

const HeroSection: React.FC = () => {
  const [form] = Form.useForm();
  const [, setHeroData] = useState<HeroData>({
    title: "John Developer",
    subtitle: "Full Stack Developer & UI/UX Designer",
    description:
      "Passionate about creating beautiful, functional digital experiences that make a difference.",
    backgroundImage:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    ctaText: "View My Work",
  });

  const handleSave = (values: HeroData) => {
    setHeroData(values);
    console.log("Hero data saved:", values);
  };

  return (
    <div>
      <SectionHeader>
        <Palette size={24} color="#1890ff" />
        <Title level={2} style={{ margin: 0 }}>
          Hero Section
        </Title>
      </SectionHeader>

      <StyledCard
        title="Edit Hero Content"
        extra={
          <Button
            type="primary"
            icon={<Save size={16} />}
            onClick={() => form.submit()}
          >
            Save Changes
          </Button>
        }
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            title: "John Developer",
            subtitle: "Full Stack Developer & UI/UX Designer",
            description:
              "Passionate about creating beautiful, functional digital experiences that make a difference.",
            backgroundImage:
              "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
            ctaText: "View My Work",
          }}
          onFinish={handleSave}
        >
          <Form.Item
            label="Main Title"
            name="title"
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input size="large" placeholder="Enter your name or main title" />
          </Form.Item>

          <Form.Item
            label="Subtitle"
            name="subtitle"
            rules={[{ required: true, message: "Subtitle is required" }]}
          >
            <Input size="large" placeholder="Your professional title" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Description is required" }]}
          >
            <TextArea rows={4} placeholder="Brief description about yourself" />
          </Form.Item>

          <Form.Item label="Call-to-Action Text" name="ctaText">
            <Input size="large" placeholder="Button text" />
          </Form.Item>

          <Form.Item label="Background Image URL" name="backgroundImage">
            <Input size="large" placeholder="URL to hero background image" />
          </Form.Item>
        </Form>
      </StyledCard>
    </div>
  );
};

export default HeroSection;
