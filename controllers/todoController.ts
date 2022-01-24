import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Todo from './../models/todoModel';

const createNewTodo = expressAsyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const { name, completed } = req.body;

		const newTodo = await Todo.create({ name, completed });

		res.status(201).send({
			data: {
				status: 'success',
				newTodo,
			},
		});
	}
);

const getAllTodos = expressAsyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const todos = await Todo.find({});

		res.status(201).send({
			data: {
				status: 'success',
				todos,
			},
		});
	}
);

export { getAllTodos, createNewTodo };
