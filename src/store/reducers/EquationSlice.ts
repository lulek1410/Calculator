import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const sign = "/x+-";

interface Equation {
	equation: string;
	isSignSet: boolean;
}

const initialState: Equation = {
	equation: "",
	isSignSet: false,
};

const isSign = (char: string) => {
	return sign.indexOf(char) > -1;
};

const calculate = (equation: string): string => {
	const [left, sign, right] = equation.replace(/,/gi, ".").split(" ");
	const [leftNum, rightNum] = [
		Number.parseFloat(left),
		Number.parseFloat(right),
	];
	let result = NaN;
	switch (sign) {
		case "+":
			result = leftNum + rightNum;
			break;
		case "-":
			result = leftNum - rightNum;
			break;
		case "x":
			result = leftNum * rightNum;
			break;
		case "/":
			result = leftNum / rightNum;
	}
	return result.toString().replace(/\./gi, ",");
};

const EquationSlice = createSlice({
	name: "equation",
	initialState,
	reducers: {
		write: (state, { payload }: PayloadAction<string>) => {
			if (isSign(payload)) {
				const elementAtIndexMinusTwo = state.equation.at(-2);
				if (elementAtIndexMinusTwo && isSign(elementAtIndexMinusTwo)) {
					state.equation = state.equation.slice(0, -3);
				} else if (state.isSignSet) {
					state.equation = calculate(state.equation);
				} else {
					state.isSignSet = true;
				}
				state.equation += " " + payload + " ";
			} else {
				state.equation += payload;
			}
		},
		remove: (state) => {
			const elementAtIndexMinusTwo = state.equation.at(-2);
			if (elementAtIndexMinusTwo && isSign(elementAtIndexMinusTwo)) {
				state.equation = state.equation.slice(0, -3);
				state.isSignSet = false;
			} else {
				state.equation = state.equation.slice(0, -1);
			}
		},
		reset: (state) => {
			state.equation = "";
			state.isSignSet = false;
		},
		result: (state) => {
			if (state.isSignSet && state.equation.at(-1) != " ") {
				state.equation = calculate(state.equation);
				state.isSignSet = false;
			}
		},
	},
});

export const { write, remove, reset, result } = EquationSlice.actions;
export default EquationSlice.reducer;
