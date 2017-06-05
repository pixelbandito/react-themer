import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import SassJsComponent from './SassJsComponent.jsx';

require('bootstrap/dist/css/bootstrap.css');
require('./main.scss');
require('sass.js');

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>Hello World!</h1>
                <AwesomeComponent/>
                <SassJsComponent/>
            </div>
        );
    }
}

render (<App/>, document.getElementById('app'));

console.log('Hello World!');
