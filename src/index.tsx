import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";

import ApiClient from "./api/client";
import {ApolloProvider} from "@apollo/client";
import i18next from "./i18n";

ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={ApiClient}>
          <I18nextProvider i18n={i18next}>
              <App />
          </I18nextProvider>
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
