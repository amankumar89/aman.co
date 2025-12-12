import React, { useState } from "react";
import { Card, Form, Input, Button, Typography } from "antd";
import { User, Save } from "lucide-react";
import styled from "styled-components";
import { AboutMeData } from "../../types/dashboard";

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

const AboutMeSection: React.FC = () => {
  const [form] = Form.useForm();
  const [, setAboutData] = useState<AboutMeData>({
    name: "John Developer",
    title: "Senior Full Stack Developer",
    bio: "I am a passionate developer with over 5 years of experience in creating modern web applications. I love turning ideas into reality through clean, efficient code.",
    location: "San Francisco, CA",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    profileImage:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
  });

  const handleSave = (values: AboutMeData) => {
    setAboutData(values);
    console.log("About me data saved:", values);
  };

  return (
    <div>
      <SectionHeader>
        <User size={24} color="#1890ff" />
        <Title level={2} style={{ margin: 0 }}>
          About Me
        </Title>
      </SectionHeader>

      <StyledCard
        title="Edit About Me Information"
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
            name: "John Developer",
            title: "Senior Full Stack Developer",
            bio: "I am a passionate developer with over 5 years of experience in creating modern web applications. I love turning ideas into reality through clean, efficient code.",
            location: "San Francisco, CA",
            email: "john@example.com",
            phone: "+1 (555) 123-4567",
            profileImage:
              "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
          }}
          onFinish={handleSave}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Name is required" }]}
          >
            <Input size="large" placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Professional Title"
            name="title"
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input size="large" placeholder="Your professional title" />
          </Form.Item>

          <Form.Item
            label="Bio"
            name="bio"
            rules={[{ required: true, message: "Bio is required" }]}
          >
            <TextArea rows={4} placeholder="Tell us about yourself" />
          </Form.Item>

          <Form.Item label="Location" name="location">
            <Input size="large" placeholder="City, State/Country" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: "email", message: "Please enter a valid email" }]}
          >
            <Input size="large" placeholder="your.email@example.com" />
          </Form.Item>

          <Form.Item label="Phone" name="phone">
            <Input size="large" placeholder="+1 (555) 123-4567" />
          </Form.Item>

          <Form.Item label="Profile Image URL" name="profileImage">
            <Input size="large" placeholder="URL to your profile photo" />
          </Form.Item>
        </Form>
      </StyledCard>
    </div>
  );
};

export default AboutMeSection;
