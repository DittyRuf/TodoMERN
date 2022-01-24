import styled from './EditTodo.module.scss';
import checkIcon from './../../../assets/svg/icon-check.svg';
import { useState } from 'react';

const EditTodo = () => {
	const [edited, setEdited] = useState('');

	const handleClick = () => {
		setEdited(edited === '' ? '--complete' : '');
	};

	const modified = `edit__button${edited}`;

	return (
		<div className={styled.edit}>
			<button
				className={`${styled.edit__button} ${edited && styled[modified]}`}
				onClick={handleClick}
			>
				<img src={checkIcon} alt='' />
			</button>
		</div>
	);
};

export default EditTodo;
