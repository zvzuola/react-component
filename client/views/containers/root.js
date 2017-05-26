import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './app.js';

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Router history={browserHistory}>
                    <Route path='/' component={App}>
                    </Route>
                </Router>
            </Provider>
        )
    }
}