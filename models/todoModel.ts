import { model, Model, Schema } from 'mongoose';
import todoModelInterface from './todoModel.types';

const todoSchema = new Schema<todoModelInterface>({
	name: {
		type: String,
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const Todo: Model<todoModelInterface> = model('Todo', todoSchema);

export default Todo;
