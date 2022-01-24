import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Todo from '../client/src/components/TodoApp/Todo/Todo';

const createNewTodo = expressAsyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {}
);

const getAllTodos = expressAsyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		res.send({ message: 'HI' });
	}
);

export { getAllTodos };
