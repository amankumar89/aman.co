export async function getProject(req, res) {
  const project = await Project.find();
  return res.json(project);
}

export async function updateProject(req, res) {
  const newProject = new Project(req.body);
  const saved = await newProject.save();
  return res.json(saved);
}