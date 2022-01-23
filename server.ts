import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: './config/.env' });

const app = express();

const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is listening at port : ${PORT}`);
});
