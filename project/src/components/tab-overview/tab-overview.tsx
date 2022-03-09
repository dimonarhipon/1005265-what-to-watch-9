import {dataFilm} from '../../types/data';

type typeProps = {
  film: dataFilm,
}

function TabOverview({film}: typeProps) {
  const {rating} = film;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {rating}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">
            {/* {scoresCount} ratings */}
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {/* {description} */}
        </p>

        <p className="film-card__director"><strong>Director: {/* {director} */}</strong></p>

        <p className="film-card__starring"><strong>Starring: {/* {starring.map((item) => item).join(', ')} */} </strong></p>
      </div>
    </>
  );
}

export default TabOverview;
