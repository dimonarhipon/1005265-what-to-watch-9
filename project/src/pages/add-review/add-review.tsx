import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Review from '../../components/review/review';
import User from '../../components/user/user';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';

type typeProps = {
  filmId?: number,
}


function AddReview({filmId = 0}: typeProps) {
  const {films} = useAppSelector((state) => state);
  const {
    backgroundColor,
    backgroundImage,
    name,
    posterImage,
  } = films[filmId];
  return (
    <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Films} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <User />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <Review />
      </div>
    </section>
  );
}

export default AddReview;
