import Mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true

    }
})