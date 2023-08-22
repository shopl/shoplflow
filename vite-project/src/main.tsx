import { ShoplflowProvider } from '@shoplflow/base';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@shoplflow/base/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShoplflowProvider domain={'SHOPL'}>
      <App />
    </ShoplflowProvider>
  </React.StrictMode>,
);
