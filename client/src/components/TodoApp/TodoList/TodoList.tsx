import styled from './../TodoApp.module.scss';
import Todo from './../Todo/Todo';
import TodoActions from '../TodoActions/TodoActions';
import { useContext } from 'react';
import todoContext from '../../../store/todos';

const TodoList = () => {
	const { todos } = useContext(todoContext);

	return (
		<section className={styled.todoapp__todolist}>
			{todos!.length &&
				todos?.map(({ completed, name }, idx) => (
					<Todo key={idx} name={name} completed={completed} />
				))}
			<TodoActions />
		</section>
	);
};

export default TodoList;
