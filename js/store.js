import { applyMiddleware, createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

function artists(state = { pageSize:9, current: 0, data: [] }, action) {
  switch (action.type) {
    case 'ARTISTS_FETCHED':
      return Object.assign({}, state, {data : [ ...action.data ], current : 0});

    case 'SHOW_NEXT_ARTISTS':
      console.log(state)
      return Object.assign({}, state, {current : state.current + 1});

    case 'SHOW_PREVIOUS_ARTISTS':
      return Object.assign({}, state, {current : state.current - 1});

    default:
      return state;
  }
}

function albums(state = {current: 0, data: [] }, action) {
  switch (action.type) {
    case 'ALBUMS_FETCHED':
      return Object.assign({}, state, {data : [ ...action.data ]});

    case 'SHOW_NEXT_ALBUMS':
      return Object.assign({}, state, {current : current + 1});

    case 'SHOW_PREVIOUS_ALBUMS':
      return Object.assign({}, state, {current : current - 1});

    default:
      return state;
  }
}

function search(state = '', action) {
  switch(action.type) {
    case 'SET_SEARCH':
      return action.search;

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  artists,
  albums,
  search
});

const logger = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

export default store;
