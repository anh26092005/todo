import express from 'express'
import { getALLTasks, createTask, updateTask, deleteTask } from '../controllers/tasksControllers.js';
const router = express.Router();
router.get('/', getALLTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;