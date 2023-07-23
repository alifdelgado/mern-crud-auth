import Task from "../schemas/task.schema.js";

export const findAllTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user_id }).populate("user");
  return res.status(200).json(tasks);
};

export const findTask = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    user: req.user_id,
  }).populate("user");
  if (!task) return res.status(404).json({ message: "Task not found" });
  return res.status(200).json(task);
};

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description, user: req.user_id });
  await task.save();
  return res.status(201).json(task);
};

export const updateTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
    },
    { new: true }
  );
  return res.status(200).json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findOneAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  return res.sendStatus(204);
};
