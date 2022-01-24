import { model, Model, Schema } from 'mongoose';
import todoModelInterface from './todoModel.types';

const todoSchema = new Schema<todoModelInterface>({
	name: {
		type: String,
		required: [true, 'A todo name is required!'],
	},
	completed: {
		type: Boolean,
		default: false,
	},
});

const Todo: Model<todoModelInterface> = model('Todo', todoSchema);

export default Todo;
