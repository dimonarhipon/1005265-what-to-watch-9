import {useEffect, useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks';
import CardList from '../../components/card-list/card-list';
import GenreList from '../../components/genre-list/genre-list';
import ShowMore from '../../components/show-more/show-more';
import { MAX_COUNT_FILMS } from '../../const';
import { getGenreFilms } from '../../store/genre-process/genre-process';
import Loader from '../loader/loader';


function Catalog() {
  const {films, isDataLoaded} = useAppSelector(({FILMS}) => FILMS);
  const { genreFilms, filteredFilms} = useAppSelector(({GENRE}) => GENRE);
  const [count, setCount] = useState(MAX_COUNT_FILMS);
  const dispatch = useAppDispatch();
  const cardList = filteredFilms.slice(0, count);

  useEffect(() => {
    dispatch(getGenreFilms(films));
  }, [dispatch, films]);

  const handlerShowMoreClick = (): void => {
    setCount(count + MAX_COUNT_FILMS);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      {isDataLoaded
        ? <Loader />
        :
        <>
          <GenreList films={films} currentGenre={genreFilms} />
          <CardList films={cardList} />
          {filteredFilms.length - count > 0
            ? <ShowMore handlerShowMoreClick={handlerShowMoreClick}/>
            : null}
        </>}

    </section>
  );
}

export default Catalog;
