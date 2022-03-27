import {useEffect, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import CardList from '../../components/card-list/card-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMore from '../../components/show-more/show-more';
import { MAX_COUNT_FILMS } from '../../const';
import { getGenreFilms } from '../../store/genre-process/genre-films-process';


function Catalog() {
  const {films} = useAppSelector(({FILMS}) => FILMS);
  const { genreFilms, filteredFilms} = useAppSelector(({GENRE}) => GENRE);

  const [count, setCount] = useState(MAX_COUNT_FILMS);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGenreFilms(films));
  }, [genreFilms]);

  const cardList = filteredFilms.slice(0, count);

  const showMoreHandler = (): void => {
    setCount(count + MAX_COUNT_FILMS);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenreList films={films} currentGenre={genreFilms} />
      <CardList films={cardList} />{filteredFilms.length - count > 0
        ? <ShowMore showMoreHandler={showMoreHandler}/>
        : null}

    </section>
  );
}

export default Catalog;