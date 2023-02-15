import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CoinDetails from '../components/coinDetails/coinDetails';
import store from '../redux/store/configureStore';

test('renders coinDetails component', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <CoinDetails />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
