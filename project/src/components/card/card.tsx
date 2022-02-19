import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Card() {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={AppRoute.Films} className="small-film-card__link">
          Aviator
        </Link>
      </h3>
    </article>
  );
}

export default Card;
