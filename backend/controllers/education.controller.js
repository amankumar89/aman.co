export async function getEducation(req, res) {
  const education = await Education.find();
  return res.json(education);
}

export async function updateEducation(req, res) {
  const newEducation = new Education(req.body);
  const saved = await newEducation.save();
  return res.json(saved);
}