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
          key={film.name}
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

/*

В этом задании мы приступим к реализации видеоплеера. Видеоплеер активируется спустя 1 секунду после наведения и удержании курсора на карточке с фильмом. Под наведением и удержанием подразумевается, что курсор не выходит за пределы карточки с фильмом. В этот момент изображение в карточке замещается плеером и начинается воспроизведение превью фильма.


Подключите компонент «Видеоплеер» к карточке с фильмом. Видеоплеер активируется спустя одну секунду после наведения и удержания курсора на карточке с фильмом. Превью фильма воспроизводится без звука. Если пользователь переместил курсор с карточки, то воспроизведение останавливается и карточка переходит в исходное состояние — вместо видео отображается статичное изображение (как и изначально). При повторном наведении на карточку воспроизведение превью начинается заново.

*/
