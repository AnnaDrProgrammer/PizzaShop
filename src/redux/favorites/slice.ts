// Задачи этого кода:
// 1) хранить список избранных пицц
// 2) давать функции для добавления и удаления пицц из этого списка
// 3) Сохранять список в браузере пользователя, чтобы он не пропадал после обновления страницы

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pizza } from '../pizza/types';

export interface FavoritesSliceState {
  items: Pizza[];
}

const initialState: FavoritesSliceState = {
  items: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') || '[]')
    : [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Pizza>) => {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (!findItem) {
        state.items.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
