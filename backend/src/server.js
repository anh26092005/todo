import express from 'express';
import taskRoutes from './routes/taskroutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
// parse incoming JSON before routes so req.body is available in controllers
app.use(express.json());
app.use('/api/tasks', taskRoutes);
// provide a default port if PORT not set in .env

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });


});
