import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './../config/.env' });

const connectDB = async () => {
	try {
		await connect(
			process.env.MONGO_URL?.replace(
				'<PASSWORD>',
				process.env.MONGO_PASSWORD as string
			) as string
		);
		console.log(`Connected with DB 😻`);
	} catch (err) {
		return err;
	}
};

export default connectDB;
