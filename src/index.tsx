import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RegisterPage } from './pages/RegisterPage';
import { FormikBasicPage } from './pages/FormikBasicPage';
import { FormikYupPage } from './pages/FormikYupPage';
import { FormikComponents } from './pages/FormikComponents';
import { FormikAbstract } from './pages/FormikAbstract';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormikAbstract/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
