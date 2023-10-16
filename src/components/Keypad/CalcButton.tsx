import { useAppDispatch } from "hooks/useAppDispatch";
import { StyledNumberButton } from "./NumberButton";
import { write } from "store/reducers/EquationSlice";

interface CalcButtonProps {
	sign: "/" | "x" | "+" | "-";
}

const StyledCalcButton = StyledNumberButton;

const CalcButton = ({ sign }: CalcButtonProps) => {
	const dispatch = useAppDispatch();
	return (
		<StyledCalcButton onClick={() => dispatch(write(sign))}>
			{sign}
		</StyledCalcButton>
	);
};

export default CalcButton;
