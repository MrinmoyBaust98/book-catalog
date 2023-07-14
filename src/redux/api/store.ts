import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
});

// for typescript type declaretion
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
