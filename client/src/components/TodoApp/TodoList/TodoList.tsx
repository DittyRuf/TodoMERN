import styled from './../TodoApp.module.scss';
import Todo from './../Todo/Todo';
import TodoActions from '../TodoActions/TodoActions';

const TodoList = () => {
	return (
		<section className={styled.todoapp__todolist}>
			<Todo />
			<Todo />
			<Todo />
			<Todo />
			<Todo />
			<Todo />
			<Todo />
			<TodoActions />
		</section>
	);
};

export default TodoList;
