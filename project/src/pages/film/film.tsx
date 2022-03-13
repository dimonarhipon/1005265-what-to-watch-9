import {useState, MouseEvent} from 'react';
import {AppRoute, TabNames} from '../../const';
import Logo from '../../components/logo/logo';
import CardList from '../../components/card-list/card-list';
import {Link, useLocation} from 'react-router-dom';
import {dataFilms} from '../../types/data';
import Tabs from '../../components/tabs/tabs';

type typeProps = {
  films: dataFilms,
  filmId?: number,
}

function Film({films, filmId = 1}: typeProps) {
  let location = useLocation().hash.substr(1);
  location = TabNames.Overview;
  const [activeTab, setActiveTab] = useState(location);
  const {backgroundColor, backgroundImage, name, genre, released, posterImage} = films[filmId];


  const changeTabHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const value = (evt.target as HTMLAnchorElement).hash.substr(1);
    setActiveTab(value);
  };

  const filterGenreFilms = (array: dataFilms): dataFilms => (
    array.filter((film) => film.genre === genre && film.id !== filmId).slice(0, 4)
  );

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: backgroundColor}} >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

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

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
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
                <Link to={`${AppRoute.Films}/${AppRoute.Review}`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
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
              <Tabs activeTab={activeTab} film={films[filmId]} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CardList films={filterGenreFilms(films)} />
        </section>

        <footer className="page-footer">
          <Logo isLight />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Film;
