import Header from './components/Header/Header';
import TodoList from './components/TodoApp/TodoApp';
import Wrapper from './components/UI/Wrapper/Wrapper';
import themeContext from './store';
import { useState } from 'react';

const App = () => {
	const [theme, setTheme] = useState('light');

	return (
		<themeContext.Provider value={{ theme, setTheme }}>
			<Wrapper theme={theme}>
				<Header />
				<TodoList />
			</Wrapper>
		</themeContext.Provider>
	);
};

export default App;
