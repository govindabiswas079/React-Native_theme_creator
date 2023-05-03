import { configureStore } from '@reduxjs/toolkit';
import reducerSlicer from './reducerSlicer';

export const store = configureStore({
  reducer: {
    reducerSlicer: reducerSlicer,
  },
});
