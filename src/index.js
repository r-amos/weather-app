import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { rootReducer } from './redux/reducers/reducer';

const store = createStore(
    
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
