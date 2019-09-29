import './config/ReactotronConfig'

import React from 'react';

import store from './store'

import { Provider } from 'react-redux'

import Routes from './routes'
import { setTopLevelNavigator } from './services/navigation'

const App = () => {
  return (
    <Provider store={store}>
        <Routes ref={setTopLevelNavigator} />
    </Provider>
  );
};

export default App;
