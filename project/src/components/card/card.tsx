import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import {dataFilm} from '../../types/data';

function Card({...film}: dataFilm) {
  const {id, name, image} = film;
  const [isActive, setActive] = useState(false);

  const mouseOverHandler = () => setActive(true);
  const mouseOutHandler = () => setActive(false);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <video className="visually-hidden" src="">
        {isActive}
      </video>
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
