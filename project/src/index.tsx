import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { BrowserRouter } from 'react-router-dom';

export const promoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App {...promoFilm} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'));
