import { RootState } from '../store';

//Пишем селектор_- это выборка из стейта, которая всегда актуальна (обязательно для удобства должна содержать "select/selector")
export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);
