import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const sign = "/x+-";

type Operator = "/" | "x" | "-" | "+" | "";

interface Equation {
	currentNum: string;
	operator: Operator;
	previousNum: string;
}

const initialState: Equation = {
	currentNum: "",
	operator: "",
	previousNum: "",
};

const isSign = (char: string) => {
	return sign.indexOf(char) > -1;
};

const formatResult = (result: number): string => {
	const resultStr = result.toString().replace(/\./gi, ",");
	if (resultStr.length > 12) {
		return result
			.toFixed(11 - resultStr.indexOf(","))
			.toString()
			.replace(/\./gi, ",");
	}
	return resultStr;
};

const calculate = (equation: Equation): number => {
	const { currentNum, operator, previousNum } = equation;

	const [leftNum, rightNum] = [
		Number.parseFloat(previousNum.replace(/,/gi, ".")),
		Number.parseFloat(currentNum.replace(/,/gi, ".")),
	];
	let result = NaN;
	switch (operator) {
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
	return result;
};

const EquationSlice = createSlice({
	name: "equation",
	initialState,
	reducers: {
		write: (state, { payload }: PayloadAction<string>) => {
			if (state.currentNum.length >= 12 && !isSign(payload)) {
				alert("max character count is 12");
			} else if (isSign(payload)) {
				if (state.currentNum && state.previousNum && state.operator) {
					state.previousNum = formatResult(calculate(state));
					state.currentNum = "";
					state.operator = payload as Operator;
				} else if (
					state.currentNum.length === 0 &&
					!state.previousNum &&
					payload === "-"
				) {
					state.currentNum += payload;
				} else {
					state.operator = payload as Operator;
					if (!state.previousNum) {
						[state.previousNum, state.currentNum] = [state.currentNum, ""];
					}
				}
			} else {
				state.currentNum += payload;
			}
		},
		remove: (state) => {
			if (state.currentNum === "Infinity" || state.currentNum === "-Infinity") {
				state.currentNum = "";
			} else {
				state.currentNum = state.currentNum.slice(0, -1);
			}
		},
		reset: (state) => {
			state.currentNum = "";
			state.previousNum = "";
			state.operator = "";
		},
		result: (state) => {
			if (state.operator && state.previousNum && state.currentNum) {
				state.currentNum = formatResult(calculate(state));
				state.previousNum = "";
				state.operator = "";
			}
		},
	},
});

export const { write, remove, reset, result } = EquationSlice.actions;
export default EquationSlice.reducer;
