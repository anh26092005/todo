import express from 'express'
import { getALLTasks, createTask, updatedTask, deleteTask } from '../controllers/tasksControllers.js';
const router = express.Router();
router.get('/', getALLTasks);
router.post('/', createTask);
router.put('/:id', updatedTask);
router.delete('/:id', deleteTask);

export default router;