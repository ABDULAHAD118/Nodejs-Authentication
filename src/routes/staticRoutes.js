import express from 'express';
import ToDo from '../models/to-do.js';

const staticRouter = express.Router();

staticRouter.get('/', async (req, res) => {
    return res.render('index');
})
staticRouter.get('/ToDo', async (req, res) => {
    //Get all todos from database
    const todos = await ToDo.find();
    return res.render('ToDo', { todos });
})

export default staticRouter;