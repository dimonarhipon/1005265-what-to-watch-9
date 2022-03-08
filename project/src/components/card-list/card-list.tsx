import { useState } from 'react';
import Card from '../../components/card/card';
import {dataFilms} from '../../types/data';

type typeProps = {
  films: dataFilms,
}

const MOUSE_DELAY = 1000;
let timer: number | null = null;

function CardList({films}: typeProps) {
  const [isActive, setActive] = useState<number | null>(null);

  const mouseOverHandler = (filmId: number): void => {
    timer = window.setTimeout(() => {
      setActive(filmId);
    }, MOUSE_DELAY);
  };

  const mouseOutHandler = (filmId: number): void => {
    if (timer) {
      clearTimeout(timer);
    }
    setActive(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <Card
          key={film.id}
          {...film}
          isActive={isActive === film.id}
          mouseOverHandler={mouseOverHandler}
          mouseOutHandler={mouseOutHandler}
        />
      ))}
    </div>
  );
}

export default CardList;

