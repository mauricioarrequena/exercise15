import { configureStore } from "@reduxjs/toolkit";
import threadsReducer from "./threadsSlice";

export const store = configureStore({
  reducer: {
    threads: threadsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
