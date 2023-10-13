import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./reducers/ThemeSlice";

export const store = configureStore({
	reducer: {
    theme: ThemeReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
