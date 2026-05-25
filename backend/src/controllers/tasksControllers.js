
export const getALLTasks = (req, res) => {
    res.status(200).send('Nhiemvu can lam');
}
export const createTask = (req, res) => {
    res.status(201).json({ message: "Task created successfully" });
};
export const updateTask = (req, res) => {
    res.status(200).json({ message: `Task updated successfully` });
};
export const deleteTask = (req, res) => {
    res.status(200).json({ message: `Task deleted successfully` });
};