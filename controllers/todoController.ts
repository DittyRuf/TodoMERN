import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';

const getAllTodos = expressAsyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		res.send({ message: 'HI' });
	}
);

export { getAllTodos };
