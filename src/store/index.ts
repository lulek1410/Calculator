import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./reducers/ThemeSlice";
import EquationReducer from "./reducers/EquationSlice";

export const store = configureStore({
	reducer: {
    theme: ThemeReducer,
    equation: EquationReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
