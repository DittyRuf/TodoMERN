import styled from './../TodoApp.module.scss';
import sunSVG from './../../../assets/svg/icon-sun.svg';
import moonSVG from './../../../assets/svg/icon-moon.svg';
import { useContext } from 'react';
import themeContext from '../../../store';

const TodoHeading = () => {
	const { setTheme, theme } = useContext(themeContext);

	const handleClick = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<section className={styled.todoapp__heading}>
			<h1 className={styled.todoapp__title}>Todo</h1>
			<button className={styled.todoapp__button} onClick={handleClick}>
				<img src={theme === 'light' ? sunSVG : moonSVG} alt='' />
			</button>
		</section>
	);
};

export default TodoHeading;
