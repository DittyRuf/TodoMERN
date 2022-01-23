import styled from './Wrapper.module.scss';
import WrapperProps from './Wrapper.types';

const Wrapper = ({ children, theme }: WrapperProps) => {
	return <main className={`${styled.wrapper} ${theme}`}>{children}</main>;
};

export default Wrapper;
