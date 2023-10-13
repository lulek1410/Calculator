import styled from "@emotion/styled";

const ThemeSwitch = styled.div`
	position: relative;
	--size: 55px;
	width: var(--size);
	height: 20px;
	border-radius: calc(var(--size) / 2);
	background-color: var(--keypad-bg-1);
	cursor: pointer;

	&::before {
		content: "";
		position: absolute;
		top: 4px;
		left: 4px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background-color: var(--result-key-bg-1);
	}

	&:active::before {
		background-color: var(--result-key-active-1);
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
	return (
		<ThemeSelectorContainer>
			<ThemeNumbers>
				<div>1</div>
				<div>2</div>
				<div>3</div>
			</ThemeNumbers>
			<ThemeSwitch />
		</ThemeSelectorContainer>
	);
};

export default ThemeSelector;
