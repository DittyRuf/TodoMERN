import styled from './Todo.module.scss';
import EditTodo from '../../UI/EditTodo/EditTodo';
import TodoProp from './Todo.types';

const Todo = ({ name, completed }: TodoProp) => {
	return (
		<div className={styled.todo}>
			<EditTodo completed={completed} />
			<h2 className={styled.todo__title}>{name}</h2>
		</div>
	);
};

export default Todo;
