import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import StackProvider from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <StackProvider />
    </Provider>
  );
};

export default App;
