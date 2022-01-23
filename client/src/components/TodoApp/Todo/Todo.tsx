import styled from './Todo.module.scss';
import EditTodo from '../../UI/EditTodo/EditTodo';

const Todo = () => {
	return (
		<div className={styled.todo}>
			<EditTodo />
			<h2 className={styled.todo__title}>Todo</h2>
		</div>
	);
};

export default Todo;
