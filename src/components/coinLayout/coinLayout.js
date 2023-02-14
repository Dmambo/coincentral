import React, { useEffect, useState } from 'react';
import { fetchCoin, selectedcoin } from '../../redux/reducer/crypto';
import { useSelector, useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.png';
import './coinLayout.css';

const CoinLayout = () => {
  const dispatch = useDispatch();
  const crypto = useSelector((state) => state.crypto.crypto);
  console.log(crypto);
  const [search, setSearch] = useState('');
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    dispatch(fetchCoin());
  }, [dispatch]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = useMemo(
    () =>
      crypto &&
      crypto
        .filter((coin) =>
          coin.name
            ? coin.name.toLowerCase().includes(search.toLowerCase())
            : false
        )
        .slice(0, limit),
    [crypto, search, limit]
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h2 className="coin-text">Search a currency</h2>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
            value={search}
          />
        </form>

        {filteredCoins.length ? (
          filteredCoins.map((coin) => {
            return (
              <Link
                to="/coin/"
                className="coin-row"
                key={coin.id}
                onClick={() => dispatch(selectedcoin(coin))}
              >
                <div className="coin">
                  <ul className="coinLayout__container__coin">
                    <li className="coinLayout__container__coin__name">
                      <div className="coinDetails">
                        <div>
                          <h1 classname="details">
                            <img src={coin.image.small} alt="image" />
                            {coin.name}({coin.symbol})
                          </h1>
                          <p>
                            <strong>currrent price</strong> : $
                            {coin.market_data.current_price.usd}
                          </p>
                        </div>
                      </div>
                      <div className="coin-arrow">
                        <img src={arrow} alt="arrow" />
                      </div>
                    </li>
                  </ul>
                </div>
              </Link>
            );
          })
        ) : (
          <p>No coins found</p>
        )}

        <button className="showBtn" onClick={() => setLimit(limit + 10)}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default CoinLayout;
