import { RootState } from '../store';

export const selectFavorites = (state: RootState) => state.favorites.items; //дает список всех избранных пицц
export const selectIsFavorite = (id: string) => (state: RootState) =>
  state.favorites.items.some((item) => item.id === id); //скажи, есть ли пицца с таким id в избранном
