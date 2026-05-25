import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log('Connected to MongoDB');


    } catch (error) {
        console.error('Error connecting to mongodb', error);
        process.exit(1); //exit process with failure


    }
}