import cryptoReducer, { fetchCoin, selectedcoin } from '../redux/reducer/crypto';

describe('crypto reducer', () => {
  it('should handle initial state', () => {
    expect(cryptoReducer(undefined, { type: 'unknown' })).toEqual({
      crypto: [],
      selectedCoin: null,
      status: 'idle',
      error: null,
    });
  });

  it('should handle fetchCoin', () => {
    const actual = cryptoReducer(undefined, fetchCoin.pending());
    expect(actual.status).toEqual('loading');
  });

  it('should handle selectedcoin', () => {
    const actual = cryptoReducer(undefined, selectedcoin({}));
    expect(actual.selectedCoin).toEqual({});
  });
});
