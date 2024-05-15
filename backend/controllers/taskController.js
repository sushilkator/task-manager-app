const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.createTask = async (req, res) => {
    const { title, description, status } = req.body;

    try {
        const task = new Task({ title, description, status, user: req.user.id });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.updateTask = async (req, res) => {
    const { title, description, status } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { title, description, status }, { new: true });
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
