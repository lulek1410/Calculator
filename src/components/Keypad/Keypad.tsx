import styled from "@emotion/styled";
import NumberButton, { Button, StyledNumberButton } from "./NumberButton";
import CalcButton from "./CalcButton";

const ButtonsGrid = styled.div`
	padding: 26px 20px;
	border-radius: 8px;
	background-color: var(--keypad-bg-1);

	display: grid;
	grid-template-rows: repeat(5, 1fr);
	grid-template-columns: repeat(4, 1fr);
	gap: max(min(25px, 2vmin), 14px) max(min(22px, 2vmin), 10px);
`;

type ButtonType = "del" | "reset" | "result";

const ActionButton = styled(Button)<{ buttonType: ButtonType }>`
	background-color: ${({ buttonType }) =>
		buttonType === "result"
			? "var(--result-key-bg-1)"
			: "var(--option-key-bg-1)"};
	box-shadow: 0 3px
		${({ buttonType }) =>
			buttonType === "result"
				? "var(--result-key-shadow-1)"
				: "var(--option-key-shadow-1)"};
	color: var(--white);
	font-size: 22px;

	${({ buttonType }) => buttonType === "result" && "grid-column: 3 / 5"};
	${({ buttonType }) => buttonType === "reset" && "grid-column: 1 / 3"};

	padding: 4px 0 0 0;

	&:active {
		background-color: ${({ buttonType }) =>
			buttonType === "result"
				? "var(--result-key-active-1)"
				: "var(--option-key-active-1)"};
	}
`;

const SeparatorButton = StyledNumberButton;

const Keypad = () => {
	return (
		<ButtonsGrid>
			<NumberButton number={7} />
			<NumberButton number={8} />
			<NumberButton number={9} />
			<ActionButton buttonType="del">
				<div>DEL</div>
			</ActionButton>
			<NumberButton number={4} />
			<NumberButton number={5} />
			<NumberButton number={6} />
			<CalcButton sign="+" />
			<NumberButton number={1} />
			<NumberButton number={2} />
			<NumberButton number={3} />
			<CalcButton sign="-" />
			<SeparatorButton>.</SeparatorButton>
			<NumberButton number={0} />
			<CalcButton sign="/" />
			<CalcButton sign="x" />
			<ActionButton buttonType="reset">
				<div>RESET</div>
			</ActionButton>
			<ActionButton buttonType="result">
				<div>=</div>
			</ActionButton>
		</ButtonsGrid>
	);
};

export default Keypad;
