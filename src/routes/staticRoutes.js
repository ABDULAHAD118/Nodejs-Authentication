import express from 'express';
import ToDo from '../models/to-do.js';

const staticRouter = express.Router();

staticRouter.get('/login', async (req, res) => {
    return res.render('login');
})
staticRouter.get('/', async (req, res) => {
    if (!req.user) {
        return res.redirect('/login');
    }
    //Get all todos from database
    const todos = await ToDo.find({ createdBy: req.user._id });
    return res.render('ToDo', { todos });
})

export default staticRouter;