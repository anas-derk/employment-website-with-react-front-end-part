import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/index.min.css';
import App from './pages/Home/index';
import store from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);