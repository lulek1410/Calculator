import styled from "@emotion/styled";
import { useAppSelector } from "hooks/useAppSelector";

const StyledScreen = styled.div`
	background-color: var(--screen-bg);
	height: 102px;
	padding: 32px 20px 23px 20px;
	border-radius: 8px;

	font-size: min(1.6rem, 9.5vmin);
	text-align: end;
	color: var(--text-screen);
`;

const Screen = () => {
	const { equation } = useAppSelector((state) => state.equation);

	return <StyledScreen>{equation}</StyledScreen>;
};

export default Screen;
