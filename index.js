import express from 'express';
import router from './src/routes/user.js'
import staticRouter from './src/routes/staticRoutes.js'
import toDoRouter from './src/routes/to-do.js';
import connection from './src/config/database.js'
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config'
const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to the database
connection(process.env.MONGODB_URI);

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

// Basic route
app.use('/users', router);

//ToDo route
app.use('/to-do', toDoRouter);

// Static route
app.use('/', staticRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});