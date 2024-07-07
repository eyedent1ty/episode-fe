import { configureStore } from '@reduxjs/toolkit';

import eventsSlice from './features/eventsSlice/eventsSlice';
import categoriesSlice from './features/categoriesSlice/categoriesSlice';

const store = configureStore({
  reducer: {
    events: eventsSlice,
    categories: categoriesSlice
  }
});

type AppStore = typeof store;
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export type { AppStore, RootState, AppDispatch };

export default store;
