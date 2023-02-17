import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import CoinLayout from '../components/coinLayout/coinLayout';
import store from '../redux/store/configureStore';

// create a test for the components with snapshots

test('renders CoinLayout component', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <CoinLayout />
    </Provider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
