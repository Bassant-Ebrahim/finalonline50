import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { items: [] },
  reducers: {
    toggleFavorite: (state, action) => {
      const found = state.items.find(i => i.id === action.payload.id);
      if(found){
        state.items = state.items.filter(i => i.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;