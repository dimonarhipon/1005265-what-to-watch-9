import {Genres} from '../../const';
import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/action';
import {dataFilms} from '../../types/data';

type typeProps = {
  films: dataFilms,
  currentGenre: string,
};

function GenreList ({films, currentGenre}: typeProps) {
  const dispatch = useAppDispatch();
  const genres = films.map((film) => film.genre);
  const uniqueGenres = [Genres.AllGenres, ...Array.from(new Set(genres))].map(
    (genre, index) => ({
      id: index,
      genre,
    }),
  );

  const handleGenreClick = (
    evt: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => {
    const genre = evt.currentTarget.children[0].innerHTML;
    dispatch(changeGenre({ genre }));
  };


  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map(({ genre, id }) => (
        <li
          key={id}
          className={`catalog__genres-item ${genre === currentGenre ?
            'catalog__genres-item--active' : ''}`}
          onClick={handleGenreClick}
        >
          <a className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

export default GenreList;
