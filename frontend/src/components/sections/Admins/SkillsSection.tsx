import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  Space,
  Typography,
  Progress,
  Tag,
  Select,
} from "antd";
import { Zap, Plus, Trash2, Save } from "lucide-react";
import styled from "styled-components";
import { Skill } from "../../types/dashboard";

const { Title } = Typography;
const { Option } = Select;

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

const SkillItem = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: #1890ff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.15);
  }
`;

const SkillContent = styled.div`
  flex: 1;

  .skill-name {
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const SkillsSection: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { id: "1", name: "React", level: 90, category: "Frontend" },
    { id: "2", name: "TypeScript", level: 85, category: "Language" },
    { id: "3", name: "Node.js", level: 80, category: "Backend" },
    { id: "4", name: "Python", level: 75, category: "Language" },
    { id: "5", name: "AWS", level: 70, category: "Cloud" },
    { id: "6", name: "PostgreSQL", level: 85, category: "Database" },
  ]);

  const [newSkill, setNewSkill] = useState<Partial<Skill>>({});

  const handleAddSkill = () => {
    if (newSkill.name && newSkill.level && newSkill.category) {
      const skill: Skill = {
        id: Date.now().toString(),
        name: newSkill.name,
        level: newSkill.level,
        category: newSkill.category,
      };
      setSkills([...skills, skill]);
      setNewSkill({});
    }
  };

  const handleDeleteSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  const skillCategories = [
    "Frontend",
    "Backend",
    "Language",
    "Database",
    "Cloud",
    "Tools",
    "Design",
  ];

  return (
    <div>
      <SectionHeader>
        <Zap size={24} color="#1890ff" />
        <Title level={2} style={{ margin: 0 }}>
          Skills Management
        </Title>
      </SectionHeader>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <StyledCard title="Manage Skills">
          <Space.Compact style={{ width: "100%" }}>
            <Input
              placeholder="Skill name"
              value={newSkill.name}
              onChange={(e) =>
                setNewSkill({ ...newSkill, name: e.target.value })
              }
            />
            <Select
              placeholder="Category"
              value={newSkill.category}
              onChange={(value) =>
                setNewSkill({ ...newSkill, category: value })
              }
              style={{ width: 140 }}
            >
              {skillCategories.map((cat) => (
                <Option key={cat} value={cat}>
                  {cat}
                </Option>
              ))}
            </Select>
            <Input
              type="number"
              placeholder="Level (1-100)"
              min={1}
              max={100}
              value={newSkill.level}
              onChange={(e) =>
                setNewSkill({ ...newSkill, level: parseInt(e.target.value) })
              }
              style={{ width: 120 }}
            />
            <Button
              type="primary"
              icon={<Plus size={16} />}
              onClick={handleAddSkill}
            >
              Add
            </Button>
          </Space.Compact>

          <div style={{ marginTop: 24 }}>
            {skills.map((skill) => (
              <SkillItem key={skill.id}>
                <SkillContent>
                  <div className="skill-name">
                    {skill.name}
                    <Tag color="blue">{skill.category}</Tag>
                  </div>
                  <Progress
                    percent={skill.level}
                    size="small"
                    strokeColor="#1890ff"
                  />
                </SkillContent>
                <Button
                  type="text"
                  danger
                  icon={<Trash2 size={16} />}
                  onClick={() => handleDeleteSkill(skill.id)}
                />
              </SkillItem>
            ))}
          </div>
        </StyledCard>

        <StyledCard title="Current Skills">
          <div style={{ maxHeight: "600px", overflowY: "auto" }}>
            {skills.map((skill) => (
              <SkillItem key={skill.id}>
                <SkillContent>
                  <div className="skill-name">
                    {skill.name}
                    <Tag color="blue">{skill.category}</Tag>
                  </div>
                  <Progress
                    percent={skill.level}
                    size="small"
                    strokeColor="#1890ff"
                  />
                </SkillContent>
                <Button
                  type="text"
                  danger
                  icon={<Trash2 size={16} />}
                  onClick={() => handleDeleteSkill(skill.id)}
                />
              </SkillItem>
            ))}

            {skills.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No skills added yet. Add your first skill above.
              </div>
            )}
          </div>
        </StyledCard>
      </div>
    </div>
  );
};

export default SkillsSection;
