import styled from "@emotion/styled";
import ThemeSelector from "./ThemeSelector";

const HeaderContainer = styled.div`
	color: var(--text-screen);
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	padding-left: 6px;
`;

const ThemeText = styled.div`
	font-size: 0.35rem;
`;

const ThemeSelectorContainer = styled.div`
	display: flex;
	place-items: center;
	gap: 30px;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<div>calc</div>
			<ThemeSelectorContainer>
				<ThemeText>THEME</ThemeText>
				<ThemeSelector />
			</ThemeSelectorContainer>
		</HeaderContainer>
	);
};

export default Header;
