import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from '../todoApi';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [todoApi.reducerPath]: todoApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling, and other useful features of rtk-query.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});