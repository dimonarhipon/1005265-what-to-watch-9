import { useState, useEffect} from 'react';
import Card from '../../components/card/card';
import {dataFilms} from '../../types/data';

type typeProps = {
  films: dataFilms,
}

const MOUSE_DELAY = 1000;
let timer: number | null = null;

function CardList({films}: typeProps) {
  const [isActive, setActive] = useState<number | null>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    return () => setMount(false);
  }, [mount]);

  if(!mount) {
    return null;
  }

  const handleMouseEnter = (filmId: number): void => {
    timer = window.setTimeout(() => {
      setActive(filmId);
    }, MOUSE_DELAY);
  };

  const handleMouseLeave = (): void => {
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
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
}

export default CardList;

