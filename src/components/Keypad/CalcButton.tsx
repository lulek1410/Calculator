import { StyledNumberButton } from "./NumberButton";

interface CalcButtonProps {
	sign: "/" | "x" | "+" | "-";
}

const StyledCalcButton = StyledNumberButton;

const CalcButton = ({ sign }: CalcButtonProps) => {
	return <StyledCalcButton>{sign}</StyledCalcButton>;
};

export default CalcButton;
