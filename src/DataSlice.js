import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchdatas: [],
    fav: [],
}


const DataSlice = createSlice({
    name: 'datastore',
    initialState,
    reducers: {
        setsearchdatas: (state, actions) => {
            state.searchdatas = actions.payload
        },
        setfav: (state, action) => {
            const newItem = action.payload;
            const isDuplicate = state.fav.find((item) => item.mealId === newItem.mealId);
            if (!isDuplicate) {
                state.fav.push(newItem);
            }
        },
        removefav: (state, action) => {
            const remove = action.payload;
            state.fav = state.fav.filter((item) => item.mealId !== remove)
        },

    },
})

export const { setsearchdatas, setfav, removefav, setSelectedProductId } = DataSlice.actions

export default DataSlice.reducer

