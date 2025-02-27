import { createAsyncThunk } from '@reduxjs/toolkit';
import { Pizza } from './types';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { category, search, currentPage, sortType } = params;

    const { data } = await axios.get<Pizza[]>(
      `http://localhost:3001/items?_page=${currentPage}&_limit=4${category}&_sort=${sortType}${search}`,
    );

    return data;
  },
);
