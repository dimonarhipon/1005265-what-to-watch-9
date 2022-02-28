import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {dataFilm} from '../../types/data';

function Card({...film}: dataFilm) {
  const {id, name, image} = film;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={image} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Films}/${id}`} className="small-film-card__link">
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default Card;
