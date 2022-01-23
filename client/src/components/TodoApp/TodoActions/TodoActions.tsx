import styled from './TodoActions.module.scss';

const TodoActions = () => {
	return (
		<section className={styled.actions}>
			<p>3 items left</p>
			<div>
				<button className={styled.actions__button}>All</button>
				<button className={styled.actions__button}>Active</button>
				<button className={styled.actions__button}>Completed</button>
			</div>
			<button className={styled.actions__button}>Clear Completed</button>
		</section>
	);
};

export default TodoActions;
