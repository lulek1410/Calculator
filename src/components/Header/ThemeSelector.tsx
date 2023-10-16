import styled from "@emotion/styled";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { Theme, nextTheme } from "store/reducers/ThemeSlice";

const ThemeSwitch = styled.div<{ theme: Theme }>`
	--width: 55px;
	position: relative;
	width: var(--width);
	height: 20px;
	border-radius: calc(var(--width) / 2);
	background-color: var(--keypad-bg);
	cursor: pointer;

	&::before {
		--size: 12px;
		content: "";
		position: absolute;
		top: 4px;
		left: 4px;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		background-color: var(--result-key-bg);
		transition: transform 200ms ease-in-out;
		${({ theme }) =>
			theme === "2" &&
			"transform: translate(calc(var(--width) / 2 - var(--size) / 2 - 4px));"};
		${({ theme }) =>
			theme === "3" &&
			"transform: translate(calc(var(--width) - var(--size) - 8px));"};
	}

	&:active::before {
		background-color: var(--result-key-active);
	}
`;

const ThemeNumbers = styled.div`
	position: absolute;
	top: -14px;
	width: 100%;

	font-weight: 500;
	font-size: 0.35rem;

	display: flex;
	justify-content: space-around;
`;

const ThemeSelectorContainer = styled.div`
	grid-auto-rows: 15px 1fr;
	position: relative;
`;

const ThemeSelector = () => {
	const { theme } = useAppSelector((state) => state.theme);
	const dispatch = useAppDispatch();

	return (
		<ThemeSelectorContainer>
			<ThemeNumbers>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</ThemeNumbers>
			<ThemeSwitch theme={theme} onClick={() => dispatch(nextTheme())} />
		</ThemeSelectorContainer>
	);
};

export default ThemeSelector;
