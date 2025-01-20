import ToDo from '../models/to-do.js';

const createToDo = async (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }
    const todo = await ToDo.create({ title: title });
    if (todo) {
        const todos = await ToDo.find();
        return res.render("ToDo", { todos })
    }
    else {
        return res.status(500).json({ message: 'Failed to create To-Do' });
    }
}

const allToDo = async (req, res) => {
    const todos = await ToDo.find();
    if (todos) {
        return res.status(200).json(todos);
    }
    else {
        return res.status(404).json({ message: 'To-Do not found' });
    }
}

export { createToDo, allToDo }