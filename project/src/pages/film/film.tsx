import {useState, useEffect, MouseEvent} from 'react';
import {AppRoute, TabNames, AuthorizationStatus} from '../../const';
import Logo from '../../components/logo/logo';
import Loader from '../../components/loader/loader';
import CardList from '../../components/card-list/card-list';
import {Link, useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Tabs from '../../components/tabs/tabs';
import User from '../../components/user/user';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loadFilmAction, loadFilmSimilarAction } from '../../store/api-action';
import Footer from '../../components/footer/footer';

/* eslint-disable no-console */
function Film() {
  const MAX_FILMS = 4;
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(loadFilmAction(id));
      dispatch(loadFilmSimilarAction(id));
    }
  }, [dispatch, id]);

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {film, similarFilms, isDataLoaded} = useAppSelector(({FILMS}) => FILMS);

  console.log(film, similarFilms, isDataLoaded);

  let location = useLocation().hash.substr(1);
  location = TabNames.Overview;
  const [activeTab, setActiveTab] = useState(location);

  if (!film) {
    return <Loader />;
  }

  const changeTabHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const value = (evt.target as HTMLAnchorElement).hash.substr(1);
    setActiveTab(value);
  };

  return (
    <>
      <section
        className="film-card film-card--full"
        style={{backgroundColor: film.backgroundColor}}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <User />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={AppRoute.Player} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <Link to={AppRoute.MyList} className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </Link>

                {authorizationStatus === AuthorizationStatus.Auth
                  ? (
                    <Link to={`${AppRoute.Films}/${AppRoute.Review}`} className="btn film-card__button">Add review</Link>
                  ) : (
                    null
                  )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list" onClick={changeTabHandler} >
                  <li
                    className={`film-nav__item ${activeTab.includes(TabNames.Overview) ? 'film-nav__item--active' : ''}`}
                  >
                    <Link to="#overview" className="film-nav__link">Overview</Link>
                  </li>

                  <li
                    className={`film-nav__item ${activeTab.includes(TabNames.Details) ? 'film-nav__item--active' : ''}`}
                  >
                    <Link to="#details" className="film-nav__link">Details</Link>
                  </li>

                  <li
                    className={`film-nav__item ${activeTab.includes(TabNames.Reviews) ? 'film-nav__item--active' : ''}`}
                  >
                    <Link to="#reviews" className="film-nav__link">Reviews</Link>
                  </li>
                </ul>
              </nav>
              <Tabs activeTab={activeTab} film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {isDataLoaded ? <Loader />
            : <CardList films={similarFilms.slice(0, MAX_FILMS)} />}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
