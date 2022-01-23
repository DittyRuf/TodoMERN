import EditTodo from '../../UI/EditTodo/EditTodo';
import styled from './Form.module.scss';

const Form = () => {
	return (
		<form className={styled.form}>
			<EditTodo />
			<input
				type='text'
				placeholder='Create a new todo...'
				className={styled.form__input}
			/>
		</form>
	);
};

export default Form;
