import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../App';
import Region from '../components/region';
import data from '../mocks/data';

describe('Testing Components Render and User Interaction: ', () => {
  const region = {
    state: {
      region: {
        name: 'Rio de Janeiro',
        today_confirmed: 521346858,
        today_new_confirmed: 50,
        today_new_deaths: 5,
        source: 'Ministério da Saúde do Brasil',
      },
    },
  };
  const mockStore = configureMockStore([thunk]);
  const store = mockStore(data);

  it('Tests App render', () => {
    const tree = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('Tests Region render', () => {
    const tree = render(
      <BrowserRouter>
        <Region key={region.name} region={region.state.region} />
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
