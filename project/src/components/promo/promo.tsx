import {MouseEvent} from 'react';
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFavorite } from '../../store/api-action';

/* eslint-disable no-console */
function Promo() {
  const dispatch = useAppDispatch();
  const {promoFilm} = useAppSelector(({PROMO}) => PROMO);

  const choiceFavoriteHandler = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();

    if (promoFilm?.id) {
      const id = promoFilm.id.toString();
      const status = promoFilm.isFavorite ? 1 : 0;
      console.log(status, id);

      dispatch(changeFavorite({ status, id }));
    }
  };

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />

        <User />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm?.posterImage} alt={`${promoFilm?.name} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm?.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm?.genre}</span>
              <span className="film-card__year">{promoFilm?.released}</span>
            </p>

            <div className="film-card__buttons">
              <Link to={`${AppRoute.Player}/${promoFilm?.id}`} className="btn btn--play film-card__button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>

              <button className="btn btn--list film-card__button" onClick={choiceFavoriteHandler}>
                {promoFilm?.isFavorite
                  ? <svg viewBox="0 0 18 14" width="18" height="14"><use xlinkHref="#in-list"></use></svg>
                  : <svg viewBox="0 0 19 20" width="19" height="20"><use xlinkHref="#add"></use></svg>}

                <span>My list</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
