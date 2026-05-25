import express from 'express';
import taskRoutes from './routes/taskroutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();
connectDB();
const app = express();
app.use('/api/tasks', taskRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
