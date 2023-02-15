/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { fetchCoin, selectedcoin } from '../../redux/reducer/crypto';
import arrow from '../assets/arrow.png';
import './coinLayout.css';

const CoinLayout = () => {
  const dispatch = useDispatch();
  const crypto = useSelector((state) => state.crypto.crypto);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    dispatch(fetchCoin());
  }, [dispatch]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = useMemo(() => {
    const featureCoin = crypto[Math.floor(Math.random() * crypto.length)];

    const filtered = crypto
      .filter((coin) => (coin.name
        ? coin.name.toLowerCase().includes(search.toLowerCase())
        : false))
      .slice(0, limit);
    if (featureCoin) {
      return [featureCoin, ...filtered];
    }
    return filtered;
  }, [crypto, search, limit]);

  return (
    <div className="coin-app">
      {filteredCoins.length > 0 && (
        <Link
          to="/coin/"
          className="feature-coin"
          onClick={() => dispatch(selectedcoin(filteredCoins[0]))}
        >
          <div className="feature-coin">
            <img
              src={filteredCoins[0].image.large}
              alt="coin"
              className="feature-coin__img"
            />
            <div className="feature-coin__details">
              <h2 className="feature-coin__name">{filteredCoins[0].name}</h2>
              <h4 className="feature-coin__symbol">
                {filteredCoins[0].symbol}
              </h4>
              <h4 className="feature-coin__price">
                {filteredCoins[0].market_data.current_price.usd}
              </h4>
            </div>
          </div>
        </Link>
      )}
      <h2 className="allCoins">
        <div className="coin-search">
          <h4 className="coin-text">Search</h4>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coin-input"
              onChange={handleChange}
              value={search}
            />
          </form>
        </div>
      </h2>
      <div className="grid-coin">
        {filteredCoins.length ? (
          filteredCoins.slice(1).map((coin) => (
            <Link
              to="/coin/"
              className="coin-row"
              key={coin.id}
              onClick={() => dispatch(selectedcoin(coin))}
            >
              <div className="coin">
                <div className="coinLayout__container__coin">
                  <div className="coinDetails">
                    <h1 className="details">

                      <img
                        src={coin.image.small}
                        alt="image"
                        className="imgg"
                      />
                    </h1>
                  </div>
                  <div className="coinDetail">
                    <div className="coin-arrow">
                      <img src={arrow} alt="arrow" />
                    </div>
                    <div className="coins-details">
                      {coin.name}
                      (
                      {coin.symbol}
                      )
                      <p className="current-price">
                        <strong>current price</strong>
                        {' '}
                        : $
                        {coin.market_data.current_price.usd}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No coins found</p>
        )}
      </div>

      <button type="button" className="showBtn" onClick={() => setLimit(limit + 10)}>
        Show More
      </button>
    </div>
  );
};

export default CoinLayout;
