import { Request, Response, NextFunction } from 'express';
import AppError from '../utils/AppError';

const notFound = (req: Request, res: Response, next: NextFunction) => {
	return next(new AppError(`Can't find ${req.originalUrl} url on server`, 404));
};

const globalErrorHandler = (
	err: AppError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { message, status = 'fail', statusCode = 400 } = err;

	res.status(statusCode).send({
		error: {
			message,
			status,
			statusCode,
		},
	});
};

export { notFound };

export default globalErrorHandler;
