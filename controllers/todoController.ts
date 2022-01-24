import { Request, Response, NextFunction } from 'express';

const getAllTodos = async (req: Request, res: Response, next: NextFunction) => {
	res.send({ message: 'HI' });
};

export { getAllTodos };
