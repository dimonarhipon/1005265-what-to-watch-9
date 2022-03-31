import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Review from '../../components/review/review';
import User from '../../components/user/user';
import { AppRoute } from '../../const';
import {useParams} from 'react-router-dom';
import { loadFilmAction } from '../../store/api-action';
import { useAppDispatch, useAppSelector } from '../../hooks';

function AddReview() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(loadFilmAction(id));
    }
  }, [id]);

  const {film} = useAppSelector(({FILMS}) => FILMS);

  return (
    <section className="film-card film-card--full" style={{backgroundColor: film?.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film?.backgroundImage} alt={film?.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Films} className="breadcrumbs__link">{film?.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <User />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film?.posterImage} alt={`${film?.name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <Review />
      </div>
    </section>
  );
}

export default AddReview;
