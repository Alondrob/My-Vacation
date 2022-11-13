import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    renderSearch: false
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        advanceSearch: (state) => {
            state.renderSearch = !state.renderSearch
         }
    }
});

export const { advanceSearch } = searchSlice.actions;
export default searchSlice.reducer;

