import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import pizzaBuilderReducer from './store/reducers/pizzaBuilder';
import orderReducer from './store/reducers/order';

const composeEnhancers = process.env.NODE_ENV  === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

export const pathApp = process.env.NODE_ENV === 'development' ? window.location.origin : window.location.href; 

const rootReducer = combineReducers({
  pizzaBuilder: pizzaBuilderReducer,
  order: orderReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));