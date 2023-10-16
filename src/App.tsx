import styled from "@emotion/styled";
import Keypad from "components/Keypad/Keypad";
import Screen from "components/Screen/Screen";
import Header from "components/Header/Header";
import { useAppSelector } from "hooks/useAppSelector";
import { Theme } from "store/reducers/ThemeSlice";

const Calculator = styled.div`
	display: grid;
	gap: 20px;
	padding: 20px;
`;

const Body = styled.body<{ theme: Theme }>`
	--main-bg: ${({ theme }) => `var(--main-bg-${theme})`};
	--keypad-bg: ${({ theme }) => `var(--keypad-bg-${theme})`};
	--screen-bg: ${({ theme }) => `var(--screen-bg-${theme})`};

	--option-key-bg: ${({ theme }) => `var(--option-key-bg-${theme})`};
	--option-key-shadow: ${({ theme }) => `var(--option-key-shadow-${theme})`};
	--option-key-active: ${({ theme }) => `var(--option-key-active-${theme})`};

	--result-key-bg: ${({ theme }) => `var(--result-key-bg-${theme})`};
	--result-key-shadow: ${({ theme }) => `var(--result-key-shadow-${theme})`};
	--result-key-active: ${({ theme }) => `var(--result-key-active-${theme})`};

	--main-key-bg: ${({ theme }) => `var(--main-key-bg-${theme})`};
	--main-key-shadow: ${({ theme }) => `var(--main-key-shadow-${theme})`};
	--main-key-active: ${({ theme }) => `var(--main-key-active-${theme})`};

	--text-key: ${({ theme }) => `var(--text-key-${theme})`};
	--text-result: ${({ theme }) => `var(--text-result-${theme})`};
	--text-screen: ${({ theme }) => `var(--text-screen-${theme})`};

	padding: 20px;
	display: grid;
	place-items: center;
	min-height: 100vh;
	overflow-x: hidden;
	background-color: var(--main-bg-${({ theme }) => theme});
`;

function App() {
	const { theme } = useAppSelector((state) => state.theme);

	return (
		<Body theme={theme}>
			<Calculator>
				<Header />
				<Screen />
				<Keypad />
			</Calculator>
		</Body>
	);
}

export default App;
