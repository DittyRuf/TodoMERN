import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connect';
import todoRoute from './routes/todoRoute';
import morgan from 'morgan';
import cors from 'cors';
import globalErrorHandler, { notFound } from './controllers/errorController';

dotenv.config({ path: './config/.env' });

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.MODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use('/api/v1/todo', todoRoute);

app.all('*', notFound);

app.use(globalErrorHandler);

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is listening at port : ${PORT}`);
});
