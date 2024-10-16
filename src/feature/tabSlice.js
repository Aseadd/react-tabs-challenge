import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTabs } from "./tabApi";

const initialState = {
  tabs: "",
  status: "idle",
  error: null,
};



export const fetchTabs = createAsyncThunk("tab/fetchTabs", async () => {
  const response = await getTabs();
  //   console.log(response);
  return response;
});

const tabSlice = createSlice({
  name: "tab",
  initialState: {
    tabs: initialState.tabs,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTabs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTabs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.tabs = action.payload;
      })
      .addCase(fetchTabs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default tabSlice.reducer;
