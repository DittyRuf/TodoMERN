import styled from './TodoApp.module.scss';
import TodoHeading from './TodoTitle/TodoHeading';

const TodoApp = () => {
	return (
		<section className={styled.todoapp}>
			<TodoHeading />
			<h1>Todo</h1>
			<h1>Todo</h1>
			<h1>Todo</h1>
			<h1>Todo</h1>
			<h1>Todo</h1>
			<h1>Todo</h1>
		</section>
	);
};

export default TodoApp;
