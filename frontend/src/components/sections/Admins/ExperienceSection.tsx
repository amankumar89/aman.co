import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Space,
  Typography,
  Tag,
  DatePicker,
} from "antd";
import { Briefcase, Plus, Edit, Trash2, Save } from "lucide-react";
import styled from "styled-components";
import { Experience } from "../../types/dashboard";
import dayjs from "dayjs";

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
`;

const ExperienceItem = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #1890ff;
    box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
  }

  .experience-header {
    display: flex;
    justify-content: between;
    align-items: flex-start;
    margin-bottom: 16px;

    .main-info {
      flex: 1;

      h4 {
        color: #1f2937;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .company {
        color: #1890ff;
        font-weight: 500;
        margin-bottom: 8px;
      }

      .dates {
        color: #6b7280;
        font-size: 14px;
      }
    }

    .actions {
      display: flex;
      gap: 8px;
    }
  }

  .description {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const ExperienceSection: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      startDate: "2022-01-01",
      endDate: "2024-12-01",
      description:
        "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL", "Docker"],
    },
    {
      id: "2",
      company: "StartupXYZ",
      position: "Frontend Developer",
      startDate: "2020-06-01",
      endDate: "2021-12-01",
      description:
        "Built responsive web interfaces and mobile applications. Collaborated with designers to implement pixel-perfect UIs.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "React Native"],
    },
  ]);

  const [editingExperience, setEditingExperience] = useState<Experience | null>(
    null
  );
  const [form] = Form.useForm();

  const handleSaveExperience = (values: any) => {
    const experienceData: Experience = {
      ...values,
      id: editingExperience?.id || Date.now().toString(),
      startDate: values.startDate?.format("YYYY-MM-DD"),
      endDate: values.endDate?.format("YYYY-MM-DD"),
      technologies:
        values.technologies?.split(",").map((tech: string) => tech.trim()) ||
        [],
    };

    if (editingExperience) {
      setExperiences(
        experiences.map((exp) =>
          exp.id === editingExperience.id ? experienceData : exp
        )
      );
    } else {
      setExperiences([...experiences, experienceData]);
    }

    setEditingExperience(null);
    form.resetFields();
  };

  const handleEdit = (experience: Experience) => {
    setEditingExperience(experience);
    form.setFieldsValue({
      ...experience,
      startDate: dayjs(experience.startDate),
      endDate: dayjs(experience.endDate),
      technologies: experience.technologies.join(", "),
    });
  };

  const handleDelete = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      <SectionHeader>
        <Briefcase size={24} color="#1890ff" />
        <Title level={2} style={{ margin: 0 }}>
          Experience
        </Title>
      </SectionHeader>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <StyledCard
          title={editingExperience ? "Edit Experience" : "Add New Experience"}
          extra={
            <Button
              type="primary"
              icon={<Save size={16} />}
              onClick={() => form.submit()}
            >
              {editingExperience ? "Update" : "Add"} Experience
            </Button>
          }
        >
          <Form form={form} layout="vertical" onFinish={handleSaveExperience}>
            <Form.Item
              label="Company"
              name="company"
              rules={[{ required: true, message: "Company is required" }]}
            >
              <Input size="large" placeholder="Company name" />
            </Form.Item>

            <Form.Item
              label="Position"
              name="position"
              rules={[{ required: true, message: "Position is required" }]}
            >
              <Input size="large" placeholder="Job title" />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Start Date"
                name="startDate"
                rules={[{ required: true, message: "Start date is required" }]}
              >
                <DatePicker size="large" style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item label="End Date" name="endDate">
                <DatePicker size="large" style={{ width: "100%" }} />
              </Form.Item>
            </div>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Description is required" }]}
            >
              <TextArea
                rows={4}
                placeholder="Describe your role and achievements"
              />
            </Form.Item>

            <Form.Item
              label="Technologies (comma separated)"
              name="technologies"
            >
              <Input size="large" placeholder="React, Node.js, AWS, etc." />
            </Form.Item>

            {editingExperience && (
              <Button
                onClick={() => {
                  setEditingExperience(null);
                  form.resetFields();
                }}
              >
                Cancel
              </Button>
            )}
          </Form>
        </StyledCard>

        <StyledCard title="Experience List">
          <div style={{ maxHeight: "600px", overflowY: "auto" }}>
            {experiences.map((experience) => (
              <ExperienceItem key={experience.id}>
                <div className="experience-header">
                  <div className="main-info">
                    <h4>{experience.position}</h4>
                    <div className="company">{experience.company}</div>
                    <div className="dates">
                      {experience.startDate} - {experience.endDate || "Present"}
                    </div>
                  </div>
                  <div className="actions">
                    <Button
                      type="text"
                      icon={<Edit size={16} />}
                      onClick={() => handleEdit(experience)}
                    />
                    <Button
                      type="text"
                      danger
                      icon={<Trash2 size={16} />}
                      onClick={() => handleDelete(experience.id)}
                    />
                  </div>
                </div>
                <p className="description">{experience.description}</p>
                <div className="technologies">
                  {experience.technologies.map((tech) => (
                    <Tag key={tech} color="blue">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </ExperienceItem>
            ))}

            {experiences.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No experience added yet. Add your first experience above.
              </div>
            )}
          </div>
        </StyledCard>
      </div>
    </div>
  );
};

export default ExperienceSection;
