import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

export const promoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      title={promoFilm.title}
      genre={promoFilm.genre}
      year={promoFilm.year}
    />
  </React.StrictMode>,
  document.getElementById('root'));
