import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Review from '../../components/review/review';
import { AppRoute } from '../../const';

type typeProps = {
  title: string,
  genre: string,
  year: number,
}

function AddReview({...promoFilm}: typeProps) {
  const {title} = promoFilm;
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Films} className="breadcrumbs__link">{title}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.Login} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <Review />
      </div>
    </section>
  );
}

export default AddReview;
