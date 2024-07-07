import { createSlice } from '@reduxjs/toolkit';

import type { Event } from '../../../types';

// DUMMY DATA
import events from '../../../dummy_data/events';

const initialState: Event[] = events;

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {}
});

export default eventsSlice.reducer;
