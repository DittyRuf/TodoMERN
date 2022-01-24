import React, { useState } from 'react';
import EditTodo from '../../UI/EditTodo/EditTodo';
import styled from './Form.module.scss';
import Error from '../../UI/Error/Error';

const Form = () => {
	const [todo, setTodo] = useState('');
	const [isEmpty, setIsEmpty] = useState(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!todo.length) {
			return setIsEmpty(true);
		}

		setIsEmpty(false);
		setTodo('');
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(event.target.value);
	};

	console.log(isEmpty);

	return (
		<form className={styled.form} onSubmit={handleSubmit}>
			<EditTodo />
			<input
				onChange={handleChange}
				type='text'
				placeholder='Create a new todo...'
				className={styled.form__input}
				value={todo}
			/>
			{isEmpty && <Error />}
		</form>
	);
};

export default Form;
