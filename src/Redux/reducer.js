import {persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import {SET_CURRENT_DRIVERS_PAGE, SET_CURRENT_RACES_PAGE} from './actions';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['currentDriversPage', 'currentRacesPage'],
};

const initialState = {
  currentDriversPage: 0,
  currentRacesPage: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REHYDRATE':
      return state;
    case SET_CURRENT_DRIVERS_PAGE:
      return {
        ...state,
        currentDriversPage: action.payload,
      };
    case SET_CURRENT_RACES_PAGE:
      return {
        ...state,
        currentRacesPage: action.payload,
      };
    default:
      return state;
  }
};

export const persistedReducer = persistReducer(persistConfig, reducer);
