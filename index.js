import express from 'express';
import router from './src/routes/user.js'
import staticRouter from './src/routes/staticRoutes.js'
import connection from './src/config/database.js'
import 'dotenv/config'
const app = express();
const port = process.env.PORT;

// Connect to the database
connection(process.env.MONGODB_URI);

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Basic route
app.use('/users', router);

// Static route
app.use('/', staticRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});