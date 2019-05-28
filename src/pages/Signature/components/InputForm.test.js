import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import config from '../config.json';
import reducer from '../reducers';
import InputForm from './InputForm';

const store = createStore(
  reducer,
  config.defaults,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(config.muiTheme)}>
        <InputForm />
      </MuiThemeProvider>
    </Provider>,
    div,
  );
});
