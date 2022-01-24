import styled from './Error.module.scss';

const Error = () => {
	return (
		<div className={styled.error}>
			<p className={styled.error__message}>Input can't be empty!</p>
		</div>
	);
};

export default Error;
