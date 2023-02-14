import React from 'react';
import { useSelector } from 'react-redux';
import arrow from '../assets/arrow.png';
import exit from '../assets/exit.png';
import { Link } from 'react-router-dom';
import './coinDetails.css';

const CoinDetails = () => {
  const coin = useSelector((state) => state.crypto.selectedCoin);
  console.log(coin);

  if (!coin) return <div>No coin selected</div>;

  return (
    <div className="coin_details">
      <div className="exit">
        <Link to="/">
          <img src={exit} alt="exit" />
        </Link>
      </div>
      <h2 className="coin_details__heading">Coin Details</h2>
      <div className="coin_img">
        <img src={coin.image.large} alt="image" />
      </div>
      <div className="coin_details__container">
        <h3 className="coin_name">
          COIN-NAME:
          <span className="spans">
            {coin.name} <img src={arrow} alt="arrow" />
          </span>
        </h3>
        <h3 className="coin_symbol">
          COIN-SYMBOL:
          <span className="spans">
            {coin.symbol} <img src={arrow} alt="arrow" />{' '}
          </span>
        </h3>
        <h3 className="coin_market_cap">
          COIN-MARKET-CAP:
          <span className="spans">
            {coin.market_data.market_cap_rank} <img src={arrow} alt="arrow" />{' '}
          </span>
        </h3>
        <h3 className="coin_current_price">
          COIN-CURRENT-PRICE:
          <span className="spans">
            {coin.market_data.current_price.usd} <img src={arrow} alt="arrow" />{' '}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CoinDetails;
