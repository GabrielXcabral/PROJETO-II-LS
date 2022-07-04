import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { ArteContextProvider } from './contexts/FoodContext';

ReactDOM.render(
  <ArteContextProvider>
    <App />
  </ArteContextProvider>,
  document.getElementById('root')
);
