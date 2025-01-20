import express from 'express'
import { createToDo, allToDo } from '../controllers/to-do.js'

const toDoRouter = express.Router();

toDoRouter.post('/', createToDo);
toDoRouter.get('/', allToDo);


export default toDoRouter;