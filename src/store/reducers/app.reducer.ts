import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  isGrid: boolean;
  recentSearch: string[];
};

const initialState: UserState = {
  isGrid: true,
  recentSearch: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setGrid: (state, action) => {
      state.isGrid = action.payload;
    },
    setRecentSearch: (state, action: PayloadAction<string>) => {
      state.recentSearch.unshift(action.payload);
    }
  }
});
export const selectIsGrid = (state: {app: UserState}) => state.app.isGrid;
export const selectRecentSearch = (state: any) => state.app.recentSearch
export const { setGrid, setRecentSearch } = appSlice.actions;

export default appSlice.reducer;
