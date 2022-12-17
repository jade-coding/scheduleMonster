import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/Login/userSlice';

const store = configureStore({
  reducer: {
    userReducer: userSlice,
  },
});

export default store;
