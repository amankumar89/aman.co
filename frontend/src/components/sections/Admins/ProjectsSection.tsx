import React, { useState } from "react";
import {
  Card,
  Form,
  Input,
  Button,
  // Space,
  Typography,
  Tag,
  Switch,
  Image,
} from "antd";
import {
  FolderOpen,
  // Plus,
  Edit,
  Trash2,
  Save,
  ExternalLink,
  Github,
} from "lucide-react";
import styled from "styled-components";
import { Project } from "./types";

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

const ProjectItem = styled.div`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #1890ff;
    box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;

    .main-info {
      flex: 1;

      h4 {
        color: #1f2937;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
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
    margin-bottom: 16px;
  }

  .project-links {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;

const ProjectsSection: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      githubUrl: "https://github.com/johndeveloper/ecommerce",
      liveUrl: "https://myecommerce.com",
      imageUrl:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      featured: true,
    },
    {
      id: "2",
      title: "Task Management App",
      description:
        "Collaborative task management tool with real-time updates, team collaboration, and project tracking.",
      technologies: ["React", "Firebase", "Material-UI", "WebSocket"],
      githubUrl: "https://github.com/johndeveloper/taskapp",
      liveUrl: "https://mytaskapp.com",
      imageUrl:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      featured: false,
    },
  ]);

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [form] = Form.useForm();

  const handleSaveProject = (values: any) => {
    const projectData: Project = {
      ...values,
      id: editingProject?.id || Date.now().toString(),
      technologies:
        values.technologies?.split(",").map((tech: string) => tech.trim()) ||
        [],
      featured: values.featured || false,
    };

    if (editingProject) {
      setProjects(
        projects.map((proj) =>
          proj.id === editingProject.id ? projectData : proj
        )
      );
    } else {
      setProjects([...projects, projectData]);
    }

    setEditingProject(null);
    form.resetFields();
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    form.setFieldsValue({
      ...project,
      technologies: project.technologies.join(", "),
    });
  };

  const handleDelete = (id: string) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  return (
    <div>
      <SectionHeader>
        <FolderOpen size={24} color="#1890ff" />
        <Title level={2} style={{ margin: 0 }}>
          Projects
        </Title>
      </SectionHeader>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <StyledCard
          title={editingProject ? "Edit Project" : "Add New Project"}
          extra={
            <Button
              type="primary"
              icon={<Save size={16} />}
              onClick={() => form.submit()}
            >
              {editingProject ? "Update" : "Add"} Project
            </Button>
          }
        >
          <Form form={form} layout="vertical" onFinish={handleSaveProject}>
            <Form.Item
              label="Project Title"
              name="title"
              rules={[{ required: true, message: "Project title is required" }]}
            >
              <Input size="large" placeholder="Project name" />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: "Description is required" }]}
            >
              <TextArea rows={3} placeholder="Describe your project" />
            </Form.Item>

            <Form.Item
              label="Technologies (comma separated)"
              name="technologies"
            >
              <Input
                size="large"
                placeholder="React, Node.js, PostgreSQL, etc."
              />
            </Form.Item>

            <Form.Item label="GitHub URL" name="githubUrl">
              <Input
                size="large"
                placeholder="https://github.com/username/project"
              />
            </Form.Item>

            <Form.Item label="Live Demo URL" name="liveUrl">
              <Input size="large" placeholder="https://yourproject.com" />
            </Form.Item>

            <Form.Item label="Project Image URL" name="imageUrl">
              <Input size="large" placeholder="URL to project screenshot" />
            </Form.Item>

            <Form.Item
              label="Featured Project"
              name="featured"
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>

            {editingProject && (
              <Button
                onClick={() => {
                  setEditingProject(null);
                  form.resetFields();
                }}
              >
                Cancel
              </Button>
            )}
          </Form>
        </StyledCard>

        <StyledCard title="Projects List">
          <div style={{ maxHeight: "600px", overflowY: "auto" }}>
            {projects.map((project) => (
              <ProjectItem key={project.id}>
                <div className="project-header">
                  <div className="main-info">
                    <h4>
                      {project.title}
                      {project.featured && <Tag color="gold">Featured</Tag>}
                    </h4>
                  </div>
                  <div className="actions">
                    <Button
                      type="text"
                      icon={<Edit size={16} />}
                      onClick={() => handleEdit(project)}
                    />
                    <Button
                      type="text"
                      danger
                      icon={<Trash2 size={16} />}
                      onClick={() => handleDelete(project.id)}
                    />
                  </div>
                </div>

                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: 120,
                      objectFit: "cover",
                      borderRadius: 8,
                      marginBottom: 12,
                    }}
                  />
                )}

                <p className="description">{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <Tag key={tech} color="blue">
                      {tech}
                    </Tag>
                  ))}
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <Button
                      type="link"
                      icon={<Github size={16} />}
                      href={project.githubUrl}
                      target="_blank"
                      style={{ padding: 0 }}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      type="link"
                      icon={<ExternalLink size={16} />}
                      href={project.liveUrl}
                      target="_blank"
                      style={{ padding: 0 }}
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </ProjectItem>
            ))}

            {projects.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No projects added yet. Add your first project above.
              </div>
            )}
          </div>
        </StyledCard>
      </div>
    </div>
  );
};

export default ProjectsSection;
