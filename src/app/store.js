import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "../feature/tabSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const AppDispatch = store.dispatch;
export const RootState = store.getState();
export default store;
