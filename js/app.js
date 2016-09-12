import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store'
import ArtistSearch from './ArtistSearch';

ReactDOM.render(
  <Provider store={store}>
    <ArtistSearch />
  </Provider>,
  document.getElementById('app')
);
