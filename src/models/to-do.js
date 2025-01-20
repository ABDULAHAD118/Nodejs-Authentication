import mongoose from 'mongoose';

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ToDo = mongoose.model('ToDo', toDoSchema);

export default ToDo;