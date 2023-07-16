import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IbooksSearch {
  status: boolean;
  searchtext: string | null;
}

const initialState: IbooksSearch = {
  status: false,
  searchtext: null,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setSearchtext: (state, action: PayloadAction<string>) => {
      state.searchtext = action.payload;
    },
  },
});

export const { setSearchtext } = bookSlice.actions;

export default bookSlice.reducer;
