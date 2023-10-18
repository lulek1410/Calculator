import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = "1" | "2" | "3";

interface ThemeSlice {
	theme: Theme;
}

const initialState: ThemeSlice = {
	theme: "1",
};

const ThemeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		nextTheme: (state) => {
			switch (state.theme) {
				case "1":
					state.theme = "2";
					break;
				case "2":
					state.theme = "3";
					break;
				case "3":
					state.theme = "1";
					break;
			}
		},
		setTheme: (state, { payload }: PayloadAction<Theme>) => {
			state.theme = payload;
		},
	},
});

export const { nextTheme, setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
