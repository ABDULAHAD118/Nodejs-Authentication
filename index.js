import express from 'express';
import router from './routes/user.js';
import connection from "./connection.js"
import 'dotenv/config'
const app = express();
const port = process.env.PORT;

// Connect to the database
connection(process.env.MONGODB_URI);

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.use('/users', router)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});