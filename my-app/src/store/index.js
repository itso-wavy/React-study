import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;
