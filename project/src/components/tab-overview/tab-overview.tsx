import {dataFilm} from '../../types/data';
import {Rating} from '../../const';

type typeProps = {
  film: dataFilm,
}

function TabOverview({film}: typeProps) {
  const {rating, scoresCount, director, starring, description} = film;

  const ratingScore = (value: number) => {
    if (value >= 0 && value < 3) {
      return Rating.Bad;
    } else if (value >= 3 && value < 5) {
      return Rating.Normal;
    } else if (value >= 5 && value < 8) {
      return Rating.Good;
    } else if (value >= 8 && value < 10) {
      return Rating.VeryGood;
    } else {
      return Rating.Awesome;
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {rating}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingScore(rating)}</span>
          <span className="film-rating__count">
            {scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {description}
        </p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {starring.map((item) => item).join(', ')} </strong></p>
      </div>
    </>
  );
}

export default TabOverview;
