import React, { useState } from "react";
import { Card, Form, Input, Button, Space, Typography, Tag } from "antd";
import { GraduationCap, Plus, Edit, Trash2, Save } from "lucide-react";
import styled from "styled-components";
import { Education } from "../../types/dashboard";

const { Title } = Typography;

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

const EducationItem = styled.div`
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

  .education-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;

    .main-info {
      flex: 1;

      h4 {
        color: #1f2937;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 4px;
      }

      .institution {
        color: #1890ff;
        font-weight: 500;
        margin-bottom: 4px;
      }

      .field {
        color: #6b7280;
        font-size: 14px;
      }
    }

    .actions {
      display: flex;
      gap: 8px;
    }
  }

  .education-details {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .dates {
      color: #6b7280;
      font-size: 14px;
    }

    .gpa {
      background: #f0f9ff;
      color: #0369a1;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 600;
    }
  }
`;

const EducationSection: React.FC = () => {
  const [educations, setEducations] = useState<Education[]>([
    {
      id: "1",
      institution: "Stanford University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startYear: "2018",
      endYear: "2022",
      gpa: "3.8",
    },
    {
      id: "2",
      institution: "MIT",
      degree: "Master of Science",
      field: "Software Engineering",
      startYear: "2022",
      endYear: "2024",
      gpa: "3.9",
    },
  ]);

  const [editingEducation, setEditingEducation] = useState<Education | null>(
    null
  );
  const [form] = Form.useForm();

  const handleSaveEducation = (values: any) => {
    const educationData: Education = {
      ...values,
      id: editingEducation?.id || Date.now().toString(),
    };

    if (editingEducation) {
      setEducations(
        educations.map((edu) =>
          edu.id === editingEducation.id ? educationData : edu
        )
      );
    } else {
      setEducations([...educations, educationData]);
    }

    setEditingEducation(null);
    form.resetFields();
  };

  const handleEdit = (education: Education) => {
    setEditingEducation(education);
    form.setFieldsValue(education);
  };

  const handleDelete = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  return (
    <div>
      <SectionHeader>
        <GraduationCap size={24} color="#1890ff" />
        <Title level={2} style={{ margin: 0 }}>
          Education
        </Title>
      </SectionHeader>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <StyledCard
          title={editingEducation ? "Edit Education" : "Add New Education"}
          extra={
            <Button
              type="primary"
              icon={<Save size={16} />}
              onClick={() => form.submit()}
            >
              {editingEducation ? "Update" : "Add"} Education
            </Button>
          }
        >
          <Form form={form} layout="vertical" onFinish={handleSaveEducation}>
            <Form.Item
              label="Institution"
              name="institution"
              rules={[{ required: true, message: "Institution is required" }]}
            >
              <Input size="large" placeholder="University/School name" />
            </Form.Item>

            <Form.Item
              label="Degree"
              name="degree"
              rules={[{ required: true, message: "Degree is required" }]}
            >
              <Input
                size="large"
                placeholder="Bachelor of Science, Master of Arts, etc."
              />
            </Form.Item>

            <Form.Item
              label="Field of Study"
              name="field"
              rules={[
                { required: true, message: "Field of study is required" },
              ]}
            >
              <Input
                size="large"
                placeholder="Computer Science, Engineering, etc."
              />
            </Form.Item>

            <div className="grid grid-cols-2 gap-4">
              <Form.Item
                label="Start Year"
                name="startYear"
                rules={[{ required: true, message: "Start year is required" }]}
              >
                <Input size="large" placeholder="2020" />
              </Form.Item>

              <Form.Item label="End Year" name="endYear">
                <Input
                  size="large"
                  placeholder="2024 or leave empty if ongoing"
                />
              </Form.Item>
            </div>

            <Form.Item label="GPA (optional)" name="gpa">
              <Input size="large" placeholder="3.8" />
            </Form.Item>

            {editingEducation && (
              <Button
                onClick={() => {
                  setEditingEducation(null);
                  form.resetFields();
                }}
              >
                Cancel
              </Button>
            )}
          </Form>
        </StyledCard>

        <StyledCard title="Education List">
          <div style={{ maxHeight: "600px", overflowY: "auto" }}>
            {educations.map((education) => (
              <EducationItem key={education.id}>
                <div className="education-header">
                  <div className="main-info">
                    <h4>{education.degree}</h4>
                    <div className="institution">{education.institution}</div>
                    <div className="field">{education.field}</div>
                  </div>
                  <div className="actions">
                    <Button
                      type="text"
                      icon={<Edit size={16} />}
                      onClick={() => handleEdit(education)}
                    />
                    <Button
                      type="text"
                      danger
                      icon={<Trash2 size={16} />}
                      onClick={() => handleDelete(education.id)}
                    />
                  </div>
                </div>
                <div className="education-details">
                  <div className="dates">
                    {education.startYear} - {education.endYear || "Present"}
                  </div>
                  {education.gpa && (
                    <div className="gpa">GPA: {education.gpa}</div>
                  )}
                </div>
              </EducationItem>
            ))}

            {educations.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No education records added yet. Add your first education above.
              </div>
            )}
          </div>
        </StyledCard>
      </div>
    </div>
  );
};

export default EducationSection;
