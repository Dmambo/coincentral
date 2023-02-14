import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from '../reducer/crypto';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
});

export default store;
