import { createSlice } from "@reduxjs/toolkit";

const application = {
  collection: [],
  meta: {},
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "application",
  initialState: application,
  reducers: {
    reset: () => initialState,
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
