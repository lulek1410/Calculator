import styled from "@emotion/styled";
import { useAppDispatch } from "hooks/useAppDispatch";
import { write } from "store/reducers/EquationSlice";

export const Button = styled.button`
	border: none;
	border-radius: 8px;
	cursor: pointer;
	padding: 18px clamp(20px, 2.5vw, 36px) 14px clamp(20px, 2.5vw, 36px);
`;

export const StyledNumberButton = styled(Button)`
	color: var(--text-key);
	background-color: var(--main-key-bg);
	box-shadow: 0 3px var(--main-key-shadow);
	&:active {
		background-color: var(--main-key-active);
	}
`;

interface NumberButtonProps {
	number: number;
}

const NumberButton = ({ number }: NumberButtonProps) => {
	const dispatch = useAppDispatch();

	return (
		<StyledNumberButton onClick={() => dispatch(write("" + number))}>
			<div>{number}</div>
		</StyledNumberButton>
	);
};

export default NumberButton;
