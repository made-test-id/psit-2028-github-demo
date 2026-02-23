const taskService = require('../services/taskService');

function getAllTasks(req, res) {
  const tasks = taskService.listTasks();
  res.json(tasks);
}

function getTask(req, res) {
  const task = taskService.getTaskById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }
  return res.json(task);
}

function createTask(req, res) {
  const { title } = req.body;
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ message: 'Title is required and must be a string' });
  }
  const created = taskService.createTask({ title });
  return res.status(201).json(created);
}

function updateTask(req, res) {
  const { title, completed } = req.body;
  if (title !== undefined && typeof title !== 'string') {
    return res.status(400).json({ message: 'Title must be a string' });
  }
  if (completed !== undefined && typeof completed !== 'boolean') {
    return res.status(400).json({ message: 'Completed must be a boolean' });
  }

  const updated = taskService.updateTask(req.params.id, { title, completed });
  if (!updated) {
    return res.status(404).json({ message: 'Task not found' });
  }

  return res.json(updated);
}

function deleteTask(req, res) {
  const deleted = taskService.deleteTask(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: 'Task not found' });
  }
  return res.status(204).send();
}

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};

