import express from 'express'
import { createToDo, allToDo, deleteToDo } from '../controllers/to-do.js'

const toDoRouter = express.Router();

toDoRouter.post('/', createToDo);
toDoRouter.get('/', allToDo);
toDoRouter.delete('/:id', deleteToDo);

export default toDoRouter;