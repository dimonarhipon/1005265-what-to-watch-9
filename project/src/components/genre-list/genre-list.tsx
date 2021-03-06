import {Genres} from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeGenre, getGenreFilms } from '../../store/genre-process/genre-process';
import {dataFilms} from '../../types/data';

type typeProps = {
  films: dataFilms,
  currentGenre: string,
};

const MAX_COUNT_GENGERS = 10;
const MIN_COUNT_GENGERS = 0;

function GenreList ({films, currentGenre}: typeProps) {
  const dispatch = useAppDispatch();
  const genres = films.map((film) => film.genre);
  const uniqueGenres = [Genres.AllGenres, ...Array.from(new Set(genres))];

  const handleGenreClick = (genre: string) => {
    dispatch(changeGenre(genre));
    dispatch(getGenreFilms(films));
  };

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre, index) => {
        const keyValue = `count-${index}`;
        return (
          <li
            key={keyValue}
            className={`catalog__genres-item ${genre === currentGenre ?
              'catalog__genres-item--active' : ''}`}
          >
            <button
              onClick={() => handleGenreClick(genre)} className="catalog__genres-link"
              style={{
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 'none',
              }}
            >
              {genre}
            </button>
          </li>);
      }).slice(MIN_COUNT_GENGERS, MAX_COUNT_GENGERS)}
    </ul>
  );
}

export default GenreList;
