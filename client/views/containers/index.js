import React from 'react';
import ReactDOM from 'react-dom';

import createStore from '../store';
import Root from './root';

const store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('app')
);
