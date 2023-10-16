import styled from "@emotion/styled";

export const Button = styled.button`
	border: none;
	border-radius: 8px;
	cursor: pointer;
	padding: 18px min(max(2.5vw, 20px), 30px) 14px min(max(2.5vw, 20px), 30px);
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
	return (
		<StyledNumberButton>
			<div>{number}</div>
		</StyledNumberButton>
	);
};

export default NumberButton;
