import { useEffect } from 'react';
import CardList from '../../components/card-list/card-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {loadFavofiteAction} from '../../store/api-action';

function MyList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadFavofiteAction());
  }, [dispatch]);
  const {favorite} = useAppSelector(({FAVORITE}) => FAVORITE);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CardList films={favorite} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
