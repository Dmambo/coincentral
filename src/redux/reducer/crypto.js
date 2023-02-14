import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCoin = createAsyncThunk('crypto/fetch_coin', async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/');
  const data = await response.json();
  console.log(data);
  return data;
});

// const addcoin = createAction('crypto/add_coin');

// Initial state
const initialState = {
  crypto: [],
  selectedCoin: null,
  status: 'idle',
  error: null,
};

// Slice
const cryptoReducer = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    selectedcoin: (state, action) => {
      state.selectedCoin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoin.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchCoin.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.crypto = state.crypto.concat(action.payload);
      })
      .addCase(fetchCoin.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { selectedcoin } = cryptoReducer.actions;

export default cryptoReducer.reducer;
