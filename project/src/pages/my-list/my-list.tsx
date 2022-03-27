import CardList from '../../components/card-list/card-list';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import User from '../../components/user/user';
import { useAppSelector } from '../../hooks';

function MyList() {
  const {films} = useAppSelector(({FILMS}) => FILMS);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <User />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <CardList films={films} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
