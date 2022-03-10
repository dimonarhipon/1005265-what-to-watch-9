import { useState } from 'react';
import Card from '../../components/card/card';
import {dataFilms} from '../../types/data';

type typeProps = {
  films: dataFilms,
  genre?: string,
}

const MOUSE_DELAY = 1000;
let timer: number | null = null;

function CardList({films, genre}: typeProps) {
  const [isActive, setActive] = useState<number | null>(null);

  const mouseEnterHandler = (filmId: number): void => {
    timer = window.setTimeout(() => {
      setActive(filmId);
    }, MOUSE_DELAY);
  };

  const mouseLeaveHandler = (filmId: number): void => {
    if (timer) {
      clearTimeout(timer);
    }
    setActive(null);
  };

  return (
    <div className="catalog__films-list">
      {genre ?
        films.filter((film) => film.genre === genre).slice(0, 4)
          .map((film) => (
            <Card
              key={film.id}
              {...film}
              isActive={isActive === film.id}
              mouseEnterHandler={mouseEnterHandler}
              mouseLeaveHandler={mouseLeaveHandler}
            />
          ))
        : films.map((film) => (
          <Card
            key={film.id}
            {...film}
            isActive={isActive === film.id}
            mouseEnterHandler={mouseEnterHandler}
            mouseLeaveHandler={mouseLeaveHandler}
          />
        ))}
    </div>
  );
}

export default CardList;

