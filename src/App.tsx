import styled from "@emotion/styled";
import Keypad from "components/Keypad/Keypad";
import Screen from "components/Screen/Screen";
import Header from "components/Header/Header";

const Calculator = styled.div`
	display: grid;
	gap: 20px;
`;

function App() {
	return (
		<Calculator>
			<Header />
			<Screen />
			<Keypad />
		</Calculator>
	);
}

export default App;
