import mongoose from 'mongoose';

const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },

}, { timestamps: true });

const ToDo = mongoose.model('ToDo', toDoSchema);

export default ToDo;