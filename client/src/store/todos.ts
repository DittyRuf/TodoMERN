import { createContext } from 'react';
import TodoProp from './../components/TodoApp/Todo/Todo.types';

interface todoContextProp {
	todos?: TodoProp[] | null;
	setTodos?: (todos: TodoProp[]) => void | null;
}

const todoContext = createContext<todoContextProp>({
	todos: [],
	setTodos: () => {},
});

export default todoContext;
