import React from "react";
import ReactDOM from "react-dom/client";
import App from "App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "store/index.ts";
import { Global, css } from "@emotion/react";
import { Theme } from "store/reducers/ThemeSlice";
import { useAppSelector } from "hooks/useAppSelector";

const themeStyles = (theme: Theme) => css`
	body {
		--main-bg: var(--main-bg-${theme});
		--keypad-bg: var(--keypad-bg-${theme});
		--screen-bg: var(--screen-bg-${theme});

		--option-key-bg: var(--option-key-bg-${theme});
		--option-key-shadow: var(--option-key-shadow-${theme});
		--option-key-active: var(--option-key-active-${theme});

		--result-key-bg: var(--result-key-bg-${theme});
		--result-key-shadow: var(--result-key-shadow-${theme});
		--result-key-active: var(--result-key-active-${theme});

		--main-key-bg: var(--main-key-bg-${theme});
		--main-key-shadow: var(--main-key-shadow-${theme});
		--main-key-active: var(--main-key-active-${theme});

		--text-key: var(--text-key-${theme});
		--text-result: var(--text-result-${theme});
		--text-screen: var(--text-screen-${theme});

		padding: 20px;
		display: grid;
		place-items: center;
		min-height: 100vh;
		overflow-x: hidden;
		background-color: var(--main-bg);
	}
`;

const ThemedApp = () => {
	const { theme } = useAppSelector((state) => state.theme);

	return (
		<>
			<App />
			<Global styles={themeStyles(theme)} />
		</>
	);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemedApp />
		</Provider>
	</React.StrictMode>
);
