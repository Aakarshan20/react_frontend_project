import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import 'antd/dist/antd.css'; //<-----needless

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
