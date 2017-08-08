import React from 'react';

import SassJsComponent from './SassJsComponent';
// import bootstrap from 'bootstrap.css';

require('../submodules/bootstrap/dist/css/bootstrap.css');
require('./main.scss');
require('sass.js');


const App = () => (
  <div className="container pxb-u-m_t--md pxb-u-m_b--md">
    <h1>Hello World!</h1>
    <SassJsComponent />
  </div>
);

export default App;
