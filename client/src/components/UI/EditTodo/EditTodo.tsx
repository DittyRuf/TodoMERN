import styled from './EditTodo.module.scss';
import checkIcon from './../../../assets/svg/icon-check.svg';
import { useState } from 'react';
import EditTodoProps from './EditTodo.types';

const EditTodo = ({ completed }: EditTodoProps) => {
	const [edited, setEdited] = useState('');

	const handleClick = () => {
		setEdited(edited === '' ? '--complete' : '');
	};

	const modified = (completed || edited) && `edit__button${edited}`;

	console.log(modified);

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
