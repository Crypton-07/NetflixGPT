import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    selectedLanguage: "en",
  },
  reducers: {
    prefferedLanguages: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});
export const { prefferedLanguages } = configSlice.actions;
export default configSlice.reducer;
