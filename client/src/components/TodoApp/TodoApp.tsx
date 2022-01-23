import styled from './TodoApp.module.scss';
import TodoHeading from './TodoHeading/TodoHeading';
import Form from './Form/Form';
import TodoList from './TodoList/TodoList';

const TodoApp = () => {
	return (
		<section className={styled.todoapp}>
			<TodoHeading />
			<Form />
			<TodoList />
		</section>
	);
};

export default TodoApp;
