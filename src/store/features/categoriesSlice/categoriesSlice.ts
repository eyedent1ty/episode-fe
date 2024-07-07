import { createSlice } from '@reduxjs/toolkit';

// DUMMY DATA
import categories from '../../../dummy_data/categories';

const initialState: string[] = categories;

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {}
});

export default categoriesSlice.reducer;
