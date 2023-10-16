import styled from "@emotion/styled";
import NumberButton, { Button, StyledNumberButton } from "./NumberButton";
import CalcButton from "./CalcButton";
import { useAppDispatch } from "hooks/useAppDispatch";
import { remove, reset, result, write } from "store/reducers/EquationSlice";

const ButtonsGrid = styled.div`
	padding: 26px 20px;
	border-radius: 8px;
	background-color: var(--keypad-bg);

	display: grid;
	grid-template-rows: repeat(5, 1fr);
	grid-template-columns: repeat(4, 1fr);
	gap: max(min(25px, 2vmin), 14px) max(min(22px, 2vmin), 10px);
`;

type ButtonType = "del" | "reset" | "result";

const ActionButton = styled(Button)<{ buttonType: ButtonType }>`
	background-color: ${({ buttonType }) =>
		buttonType === "result" ? "var(--result-key-bg)" : "var(--option-key-bg)"};
	box-shadow: 0 3px
		${({ buttonType }) =>
			buttonType === "result"
				? "var(--result-key-shadow)"
				: "var(--option-key-shadow)"};
	color: ${({ buttonType }) =>
		buttonType === "result" ? "var(--text-result)" : "var(--white)"};
	font-size: 22px;

	${({ buttonType }) => buttonType === "result" && "grid-column: 3 / 5"};
	${({ buttonType }) => buttonType === "reset" && "grid-column: 1 / 3"};

	padding: 4px 0 0 0;

	&:active {
		background-color: ${({ buttonType }) =>
			buttonType === "result"
				? "var(--result-key-active)"
				: "var(--option-key-active)"};
	}
`;

const SeparatorButton = StyledNumberButton;

const Keypad = () => {
	const dispatch = useAppDispatch();

	return (
		<ButtonsGrid>
			<NumberButton number={7} />
			<NumberButton number={8} />
			<NumberButton number={9} />
			<ActionButton buttonType="del" onClick={() => dispatch(remove())}>
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
			<SeparatorButton onClick={() => dispatch(write(","))}>.</SeparatorButton>
			<NumberButton number={0} />
			<CalcButton sign="/" />
			<CalcButton sign="x" />
			<ActionButton buttonType="reset" onClick={() => dispatch(reset())}>
				<div>RESET</div>
			</ActionButton>
			<ActionButton buttonType="result" onClick={() => dispatch(result())}>
				<div>=</div>
			</ActionButton>
		</ButtonsGrid>
	);
};

export default Keypad;
