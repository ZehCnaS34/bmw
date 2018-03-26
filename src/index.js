import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import bmw from './reducers';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let middleware;
if (typeof devTools !== 'undefined') {
    middleware = compose(
        applyMiddleware(thunk),
        devTools,
    );
} else {
    middleware = applyMiddleware(thunk);
}

let store = createStore(
    bmw,
    middleware
);
window.store = store;

// store.dispatch(init);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
