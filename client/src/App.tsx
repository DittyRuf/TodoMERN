import Header from './components/Header/Header';
import TodoList from './components/TodoApp/TodoApp';
import Wrapper from './components/UI/Wrapper/Wrapper';
import themeContext from './store';
import todoContext from './store/todos';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoProp from './components/TodoApp/Todo/Todo.types';

const App = () => {
	const [theme, setTheme] = useState('light');
	const [todos, setTodos] = useState<TodoProp[] | null>([]);

	const fetchData = async () => {
		const { data } = await axios.get('http://localhost:3000/api/v1/todo');
		const { todos } = data.data;
		setTodos(todos);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<themeContext.Provider value={{ theme, setTheme }}>
			<todoContext.Provider value={{ todos, setTodos }}>
				<Wrapper theme={theme}>
					<Header />
					<TodoList />
				</Wrapper>
			</todoContext.Provider>
		</themeContext.Provider>
	);
};

export default App;
