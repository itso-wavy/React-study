import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './css/style.css';

const container = document.getElementById('root');
// ReactDOM.render(App, container)
const root = createRoot(container);
root.render(<App />);