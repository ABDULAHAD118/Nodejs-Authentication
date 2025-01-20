import express from 'express';

const staticRouter = express.Router();


staticRouter.get('/', async (req, res) => {
    return res.render('index.html');
})

export default staticRouter;