import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { currentTheme, currentThemeCss, themeForm } from './themes/reducers';
import { googleFontsReducer } from './googleFonts/reducers';
import SassJsComponent from './SassJsComponent';
// import bootstrap from 'bootstrap.css';

require('../submodules/bootstrap/dist/css/bootstrap.css');
require('./main.scss');
require('sass.js');

const middleware = [thunk];

const store = createStore(
  combineReducers({
    currentTheme,
    currentThemeCss,
    themeForm,
    googleFontsReducer,
  }),
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable no-underscore-dangle */
  applyMiddleware(...middleware),
);

const App = () => (
  <div className="container pxb-u-m_t--md pxb-u-m_b--md">
    <h1>Hello World!</h1>
    <SassJsComponent />
  </div>
);

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app'),
);

export default App;
