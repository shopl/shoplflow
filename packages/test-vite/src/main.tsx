import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './index.css';
import { ShoplflowProvider } from '@shoplflow/base';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ShoplflowProvider>
      <App />
    </ShoplflowProvider>
  </React.StrictMode>,
);
