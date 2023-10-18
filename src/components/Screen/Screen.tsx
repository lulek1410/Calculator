import styled from "@emotion/styled";
import { useAppSelector } from "hooks/useAppSelector";

const StyledScreen = styled.div`
	white-space: nowrap;
	font-size: clamp(1.1rem, 4vmin, 1.6rem);
	color: var(--text-screen);
	overflow: hidden;
	text-align: end;
`;

const ScreenWrapper = styled.div`
	background-color: var(--screen-bg);
	height: clamp(84px, 15vw, 89px);
	width: clamp(302px, 50vw, 450px);
	padding: 30px 20px 23px 20px;
	border-radius: 8px;

	position: relative;
`;

const CalcPreview = styled.div`
	font-size: clamp(0.6rem, 4vmin, 0.75rem);
	color: var(--text-preview);

	position: absolute;
	top: 5px;
	right: 20px;
`;

const Screen = () => {
	const { currentNum, operator, previousNum } = useAppSelector(
		(state) => state.equation
	);

	return (
		<ScreenWrapper>
			<CalcPreview aria-label="preview">
				{previousNum && `${previousNum} ${operator}`}
			</CalcPreview>
			<StyledScreen>{currentNum}</StyledScreen>
		</ScreenWrapper>
	);
};

export default Screen;
