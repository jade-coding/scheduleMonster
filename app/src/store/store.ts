import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/Login/userSlice';

const store = configureStore({
  reducer: {
    userReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
