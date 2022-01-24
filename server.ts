import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect';
import todoRoute from './routes/todoRoute';

dotenv.config({ path: './config/.env' });

connectDB();

const app = express();

app.use('/api/v1/todo', todoRoute);

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is listening at port : ${PORT}`);
});
