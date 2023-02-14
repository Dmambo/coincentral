import { actionTypes } from '../action/actionTypes';
export const addcoin = (coins) => {
  return {
    type: actionTypes.ADD_COIN,
    payload: coins,
  };
};

export const selectedcoin = (coins) => {
  return {
    type: actionTypes.SELECTED_COIN,
    payload: coins,
  };
};
