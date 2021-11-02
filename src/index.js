import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesContextProvider } from './components/store/favorites-context';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
