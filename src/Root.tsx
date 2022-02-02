import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store/modules/rootReducer';

import { persistReducer, persistStore } from 'redux-persist';

import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'Crud',
  storage,
  whitelist: [
    'client',
    ],
};

const root = (state: any, action: any) => {
  if (action.type === 'RESET_REDUX') {
    state = undefined;
  }

  return rootReducer(state, action);
};

const composeEnhancers = composeWithDevTools({ trace: true });

const reduxRoot = (props: any) => {
  let store = createStore(
          persistReducer(persistConfig, root),
          props.initialState,
          composeEnhancers(applyMiddleware(ReduxThunk)),
          // composeWithDevTools(applyMiddleware(ReduxThunk)),
        );

     

  let persistor = persistStore(store);

 
 
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );

  
};

export default reduxRoot;