import { createSlice } from "@reduxjs/toolkit";
const setLoading = (state) => {
  state.loading = true;
};
const setError = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
});

export default contactSlice.reducer;
