import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Header from './components/Header/Header';

import MainContainer from './components/MainContainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <MainContainer>
        <App />
      </MainContainer>
     
    </BrowserRouter>
  </React.StrictMode>,
);
