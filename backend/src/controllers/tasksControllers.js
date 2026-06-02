import Task from "../models/Task.js";

export const getALLTasks = async (req, res) => {
    try {

        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Loi khi goi getAllTasks', error);
        res.status(500).json({ message: 'Error fetching tasks' });
    }
};

export const createTask = async (req, res) => {

    try {
        const { title } = req.body;
        const task = new Task({ title });
        const newTask = await task.save();
        res.status(201).json({ newTask });
    } catch (error) {
        console.error('Loi khi goi createTask', error);
        res.status(500).json({ message: 'Error creating task' });

    }
};
export const updatedTask = async (req, res) => {
    try {
        const { title, status, completedAt } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, status, completedAt },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ updatedTask });

    } catch (error) {
        console.error('Loi khi goi updatedTask', error);
        res.status(500).json({ message: 'Error updating task' });
    }
};

export const deleteTask = (req, res) => {
    res.status(200).json({ message: `Task deleted successfully` });
};